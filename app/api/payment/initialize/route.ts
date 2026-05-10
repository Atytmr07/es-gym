import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySession } from "@/lib/session";
import { fsGet, fsAdd, fsPatch, fsQuery } from "@/lib/firestore-server";
import { initializeCheckoutForm } from "@/lib/iyzico";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("__session")?.value;
  if (!token) return NextResponse.json({ error: "Giriş yapmalısınız" }, { status: 401 });

  const session = await verifySession(token);
  if (!session) return NextResponse.json({ error: "Geçersiz oturum" }, { status: 401 });

  const { packageId, tierIndex } = await req.json();
  if (!packageId || tierIndex === undefined)
    return NextResponse.json({ error: "Paket bilgisi eksik" }, { status: 400 });

  const [pkgDoc, userDoc] = await Promise.all([
    fsGet("packages", packageId),
    fsGet("users", session.uid),
  ]);

  if (!pkgDoc) return NextResponse.json({ error: "Paket bulunamadı" }, { status: 404 });
  if (!userDoc) return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 404 });

  const tiers = pkgDoc.tiers as { label: string; price: number; duration: number | null; sessions: number | null }[];
  const tier = tiers?.[tierIndex];
  if (!tier) return NextResponse.json({ error: "Tier bulunamadı" }, { status: 404 });

  const price = tier.price.toFixed(2);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
  const userName = String(userDoc.name ?? "Ad Soyad");
  const nameParts = userName.split(" ");

  // Duplicate işlem koruması: Aynı kullanıcının son pending işlemini bul.
  // fsQuery limit:1 döndürdüğünden; bulunan işlem aynı paket+tier ve 5 dakika
  // içindeyse "expired" yaparak temiz bir başlangıç sağla.
  // Bu, çift tıklama veya ağ hatası sonrası yenileme senaryolarını önler.
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60_000).toISOString();
  try {
    const recentTxs = await fsQuery("transactions", "userId", session.uid);
    const candidate = recentTxs[0];
    if (
      candidate &&
      String(candidate.status) === "pending" &&
      String(candidate.packageId) === String(packageId) &&
      String(candidate.tierLabel) === tier.label &&
      String(candidate.createdAt) > fiveMinutesAgo
    ) {
      console.log("[Payment] Duplicate pending işlem bulundu, expired yapılıyor:", candidate._id);
      await fsPatch("transactions", candidate._id, {
        status: "expired",
        updatedAt: new Date().toISOString(),
      });
    }
  } catch {
    // Duplicate kontrolü opsiyonel — hata olursa devam et
  }

  const txId = await fsAdd("transactions", {
    userId: session.uid,
    userEmail: userDoc.email,
    userName: userDoc.name,
    packageId,
    packageName: pkgDoc.name,
    tierLabel: tier.label,
    amount: tier.price,
    currency: "TRY",
    status: "pending",
    iyzicoToken: "",
    iyzicoPaymentId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const result = await initializeCheckoutForm({
    conversationId: `${session.uid}-${Date.now()}`,
    price,
    paidPrice: price,
    basketId: txId,
    callbackUrl: `${appUrl}/api/payment/callback`,
    enabledInstallments: [1, 2, 3, 6, 9],
    buyer: {
      id: session.uid,
      name: nameParts[0] || "Ad",
      surname: nameParts.slice(1).join(" ") || "Soyad",
      email: String(userDoc.email),
      // TODO: Kullanıcıdan TC Kimlik No toplanırsa userDoc.identityNumber kullanılmalı.
      // iyzico sanal ürünlerde kimlik doğrulaması yapmaz; bu numara format zorunluluğu için.
      identityNumber: String(userDoc.identityNumber ?? "74300864791"),
      registrationAddress: "Kepez, Antalya",
      ip,
      city: "Antalya",
      country: "Turkey",
      gsmNumber: String(userDoc.phone || "+905064668981"),
    },
    shippingAddress: { contactName: userName, city: "Antalya", country: "Turkey", address: "Kepez, Antalya" },
    billingAddress: { contactName: userName, city: "Antalya", country: "Turkey", address: "Kepez, Antalya" },
    basketItems: [{
      id: packageId,
      name: `${pkgDoc.name} - ${tier.label}`,
      category1: "Spor Üyeliği",
      itemType: "VIRTUAL",
      price,
    }],
  });

  if (result.status !== "success") {
    await fsPatch("transactions", txId, { status: "failed" });
    return NextResponse.json({ error: result.errorMessage ?? "Ödeme başlatılamadı" }, { status: 500 });
  }

  await fsPatch("transactions", txId, {
    iyzicoToken: result.token,
    updatedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    checkoutFormContent: result.checkoutFormContent,
    paymentPageUrl: result.paymentPageUrl ?? null,
    token: result.token,
    transactionId: txId,
  });
}
