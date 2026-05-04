import { NextRequest, NextResponse } from "next/server";
import { fsQuery, fsPatch, fsGet } from "@/lib/firestore-server";
import { retrieveCheckoutForm } from "@/lib/iyzico";
import { sendPaymentNotification } from "@/lib/email";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const token = formData.get("token") as string;

  console.log("[Iyzico Callback] token:", token);

  if (!token) return NextResponse.redirect(`${appUrl}/payment/fail?error=no_token`);

  try {
    const result = await retrieveCheckoutForm(token);
    console.log("[Iyzico Retrieve] status:", result.status, "paymentStatus:", result.paymentStatus, "error:", result.errorMessage);

    const txDocs = await fsQuery("transactions", "iyzicoToken", token);

    if (result.status !== "success" || result.paymentStatus !== "SUCCESS") {
      if (txDocs[0]) {
        await fsPatch("transactions", txDocs[0]._id, {
          status: "failed",
          updatedAt: new Date().toISOString(),
        });
      }
      return NextResponse.redirect(
        `${appUrl}/payment/fail?error=${encodeURIComponent(result.errorMessage ?? "Ödeme doğrulanamadı")}`
      );
    }

    if (!txDocs[0]) {
      return NextResponse.redirect(`${appUrl}/payment/fail?error=tx_not_found`);
    }

    const tx = txDocs[0];

    await fsPatch("transactions", tx._id, {
      status: "success",
      iyzicoPaymentId: result.paymentId ?? null,
      updatedAt: new Date().toISOString(),
    });

    const pkgDoc = await fsGet("packages", String(tx.packageId));
    if (pkgDoc) {
      const tiers = pkgDoc.tiers as { label: string; price: number; duration: number | null; sessions: number | null }[];
      const tier = tiers?.find((t) => t.label === tx.tierLabel);
      const expiresAt = tier?.duration ? new Date(Date.now() + tier.duration * 86400000).toISOString() : null;
      const sessionsTotal = tier?.sessions ?? null;

      // Mevcut abonelikleri oku — üzerine yazma, diziye ekle
      const userData = await fsGet("users", String(tx.userId));
      const existing = (userData?.subscriptions as unknown[]) ?? [];

      const newSub = {
        id: tx._id,
        packageId: tx.packageId,
        packageName: String(tx.packageName ?? pkgDoc.name),
        packageType: String(pkgDoc.type),
        tierLabel: String(tx.tierLabel),
        expiresAt,
        sessionsTotal,
        sessionsUsed: sessionsTotal ? 0 : null,
        purchasedAt: new Date().toISOString(),
      };

      await fsPatch("users", String(tx.userId), {
        subscriptions: [...existing, newSub],
        activePackage: `${pkgDoc.name} - ${tx.tierLabel}`,
        packageId: tx.packageId,
        packageType: pkgDoc.type,
        expiresAt,
        sessionsTotal,
        sessionsUsed: sessionsTotal ? 0 : null,
      });

      // İşletme sahibine e-posta bildirimi gönder (hata olursa yok say)
      sendPaymentNotification({
        memberName: String(tx.userName ?? "Bilinmiyor"),
        memberEmail: String(tx.userEmail ?? ""),
        memberPhone: String(userData?.phone ?? ""),
        packageName: String(pkgDoc.name),
        tierLabel: String(tx.tierLabel),
        amount: Number(tx.amount ?? 0),
        expiresAt,
        sessionsTotal,
      }).catch((e) => console.error("[Email] Bildirim gönderilemedi:", e));
    }

    return NextResponse.redirect(`${appUrl}/payment/success?token=${token}`);
  } catch (err) {
    console.error("[Iyzico Callback] Hata:", err);
    return NextResponse.redirect(`${appUrl}/payment/fail?error=server_error`);
  }
}

export async function GET(req: NextRequest) {
  const token = new URL(req.url).searchParams.get("token");
  if (!token) return NextResponse.redirect(`${appUrl}/payment/fail?error=no_token`);
  return NextResponse.redirect(`${appUrl}/payment/success?token=${token}`);
}
