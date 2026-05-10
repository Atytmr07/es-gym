import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM ?? "E&S GYM <onboarding@resend.dev>";
const OWNER = process.env.OWNER_EMAIL;

interface PaymentNotificationParams {
  memberName: string;
  memberEmail: string;
  memberPhone?: string;
  packageName: string;
  tierLabel: string;
  amount: number;
  expiresAt: string | null;
  sessionsTotal: number | null;
}

export async function sendPaymentNotification(params: PaymentNotificationParams) {
  if (!OWNER || !process.env.RESEND_API_KEY) return;

  const {
    memberName, memberEmail, memberPhone,
    packageName, tierLabel, amount,
    expiresAt, sessionsTotal,
  } = params;

  const dateStr = new Date().toLocaleString("tr-TR", {
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  const subscriptionInfo = expiresAt
    ? `Bitiş: ${new Date(expiresAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}`
    : sessionsTotal
    ? `${sessionsTotal} seans hakkı tanımlandı`
    : "";

  await resend.emails.send({
    from: FROM,
    to: OWNER,
    subject: `💳 Yeni Ödeme: ${memberName} — ₺${amount.toLocaleString("tr-TR")} (${packageName} ${tierLabel})`,
    html: `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#18181b;font-family:system-ui,-apple-system,sans-serif">
  <div style="max-width:520px;margin:32px auto;background:#27272a;border-radius:16px;overflow:hidden">
    <div style="background:#FFC107;padding:24px 32px">
      <p style="margin:0;color:#111827;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px">E&S GYM Fitness Center</p>
      <h1 style="margin:6px 0 0;color:#111827;font-size:22px;font-weight:900">💳 Yeni Ödeme Alındı</h1>
    </div>
    <div style="padding:28px 32px">
      <div style="background:#18181b;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px">
        <p style="margin:0 0 4px;color:#a1a1aa;font-size:12px">Ödeme Tutarı</p>
        <p style="margin:0;color:#FFC107;font-size:36px;font-weight:900">₺${amount.toLocaleString("tr-TR")}</p>
        <p style="margin:4px 0 0;color:#71717a;font-size:11px">${dateStr}</p>
      </div>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#a1a1aa;font-size:13px;width:40%">Üye</td><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#fff;font-size:13px;font-weight:600">${memberName}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#a1a1aa;font-size:13px">E-posta</td><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#fff;font-size:13px">${memberEmail}</td></tr>
        ${memberPhone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#a1a1aa;font-size:13px">Telefon</td><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#fff;font-size:13px">${memberPhone}</td></tr>` : ""}
        <tr><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#a1a1aa;font-size:13px">Paket</td><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#fff;font-size:13px;font-weight:600">${packageName}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#a1a1aa;font-size:13px">Süre / Seans</td><td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#fff;font-size:13px">${tierLabel}</td></tr>
        ${subscriptionInfo ? `<tr><td style="padding:10px 0;color:#a1a1aa;font-size:13px">Üyelik</td><td style="padding:10px 0;color:#4ade80;font-size:13px">${subscriptionInfo}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding:14px;background:#18181b;border-radius:10px;border-left:3px solid #FFC107">
        <p style="margin:0;color:#a1a1aa;font-size:12px">✅ Ödeme Iyzico 3D Secure ile onaylandı. Üyelik otomatik aktive edildi.</p>
      </div>
    </div>
    <div style="padding:16px 32px;background:#18181b;border-top:1px solid #3f3f46">
      <p style="margin:0;color:#52525b;font-size:11px;text-align:center">E&S GYM · Kepez, Antalya · 0506 466 89 81</p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendWelcomeEmail(memberName: string, memberEmail: string) {
  if (!OWNER || !process.env.RESEND_API_KEY) return;

  await resend.emails.send({
    from: FROM,
    to: OWNER,
    subject: `👤 Yeni Üye: ${memberName} (${memberEmail})`,
    html: `
<!DOCTYPE html>
<html lang="tr">
<body style="margin:0;padding:0;background:#18181b;font-family:system-ui,sans-serif">
  <div style="max-width:520px;margin:32px auto;background:#27272a;border-radius:16px;overflow:hidden">
    <div style="background:#FFC107;padding:24px 32px">
      <p style="margin:0;color:#111827;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px">E&S GYM Fitness Center</p>
      <h1 style="margin:6px 0 0;color:#111827;font-size:22px;font-weight:900">👤 Yeni Üye Kaydı</h1>
    </div>
    <div style="padding:28px 32px">
      <div style="background:#18181b;border-radius:12px;padding:20px">
        <p style="margin:0 0 8px;color:#a1a1aa;font-size:12px">Ad Soyad</p>
        <p style="margin:0 0 16px;color:#fff;font-size:18px;font-weight:700">${memberName}</p>
        <p style="margin:0 0 8px;color:#a1a1aa;font-size:12px">E-posta</p>
        <p style="margin:0;color:#FFC107;font-size:14px">${memberEmail}</p>
      </div>
    </div>
    <div style="padding:16px 32px;background:#18181b;border-top:1px solid #3f3f46">
      <p style="margin:0;color:#52525b;font-size:11px;text-align:center">E&S GYM · Kepez, Antalya</p>
    </div>
  </div>
</body>
</html>`,
  });
}
