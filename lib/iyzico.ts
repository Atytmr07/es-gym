// Iyzico REST API — SDK yerine doğrudan fetch kullanır.
// SDK'nın fs.readdirSync + dynamic require yapısı Turbopack ile uyumsuz.

import crypto from "crypto";

const API_KEY = process.env.IYZICO_API_KEY!;
const SECRET_KEY = process.env.IYZICO_SECRET_KEY!;
const BASE_URL = (process.env.IYZICO_BASE_URL ?? "https://sandbox-api.iyzipay.com").replace(/\/+$/, "");

function randomString(): string {
  return process.hrtime()[0] + Math.random().toString(8).slice(2);
}

function authHeader(uri: string, body: object, rnd: string): string {
  const signature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(rnd + uri + JSON.stringify(body))
    .digest("hex");

  const encoded = Buffer.from(
    `apiKey:${API_KEY}&randomKey:${rnd}&signature:${signature}`
  ).toString("base64");

  return `IYZWSv2 ${encoded}`;
}

async function iyziPost(uri: string, body: object): Promise<Record<string, string>> {
  const rnd = randomString();
  const res = await fetch(`${BASE_URL}${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader(uri, body, rnd),
      "x-iyzi-rnd": rnd,
      "x-iyzi-client-version": "iyzipay-node-2.0.67",
    },
    body: JSON.stringify(body),
  });
  return res.json() as Promise<Record<string, string>>;
}

// ─── Checkout Form ────────────────────────────────────────────────────────────

export interface CheckoutFormInitParams {
  locale?: string;
  conversationId?: string;
  price: string;
  paidPrice: string;
  currency?: string;
  basketId?: string;
  paymentGroup?: string;
  callbackUrl: string;
  enabledInstallments?: number[];
  buyer: {
    id: string; name: string; surname: string; email: string;
    identityNumber: string; registrationAddress: string; ip: string;
    city: string; country: string; gsmNumber?: string;
  };
  shippingAddress: { contactName: string; city: string; country: string; address: string };
  billingAddress: { contactName: string; city: string; country: string; address: string };
  basketItems: { id: string; name: string; category1: string; itemType: string; price: string }[];
}

export async function initializeCheckoutForm(params: CheckoutFormInitParams) {
  return iyziPost("/payment/iyzipos/checkoutform/initialize/auth/ecom", {
    locale: "tr",
    currency: "TRY",
    paymentGroup: "PRODUCT",
    ...params,
  });
}

export async function retrieveCheckoutForm(token: string) {
  return iyziPost("/payment/iyzipos/checkoutform/auth/ecom/detail", {
    locale: "tr",
    conversationId: Date.now().toString(),
    token,
  });
}
