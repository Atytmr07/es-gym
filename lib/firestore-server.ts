// Firestore REST API — Next.js API route'larında (Node.js) kullanım için.
// Firebase client SDK gRPC/WebSocket kullandığından server-side'da çalışmaz.

const PROJECT = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY!;
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

// ─── Tip dönüşümleri ──────────────────────────────────────────────────────────

type FsVal =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { nullValue: null }
  | { timestampValue: string }
  | { arrayValue: { values?: FsVal[] } }
  | { mapValue: { fields?: Record<string, FsVal> } };

function fromVal(v: FsVal): unknown {
  if ("stringValue" in v) return v.stringValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("nullValue" in v) return null;
  if ("timestampValue" in v) {
    const ms = new Date(v.timestampValue).getTime();
    return { seconds: Math.floor(ms / 1000), nanoseconds: 0 };
  }
  if ("arrayValue" in v) return (v.arrayValue.values ?? []).map(fromVal);
  if ("mapValue" in v) return fromDoc(v.mapValue.fields ?? {});
  return null;
}

function fromDoc(fields: Record<string, FsVal>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, fromVal(v)]));
}

function toVal(val: unknown): FsVal {
  if (val === null || val === undefined) return { nullValue: null };
  if (val instanceof Date) return { timestampValue: val.toISOString() };
  if (typeof val === "string") return { stringValue: val };
  if (typeof val === "boolean") return { booleanValue: val };
  if (typeof val === "number")
    return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
  if (Array.isArray(val)) return { arrayValue: { values: val.map(toVal) } };
  if (typeof val === "object") {
    const obj = val as Record<string, unknown>;
    // Firestore Timestamp nesnesi gelirse ISO'ya çevir
    if ("seconds" in obj && typeof obj.seconds === "number") {
      return { timestampValue: new Date(obj.seconds * 1000).toISOString() };
    }
    return { mapValue: { fields: toDoc(obj) } };
  }
  return { nullValue: null };
}

function toDoc(data: Record<string, unknown>): Record<string, FsVal> {
  return Object.fromEntries(
    Object.entries(data)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, toVal(v)])
  );
}

// ─── CRUD ─────────────────────────────────────────────────────────────────────

export type FsDoc = Record<string, unknown> & { _id: string };

export async function fsGet(col: string, id: string): Promise<FsDoc | null> {
  const res = await fetch(`${BASE}/${col}/${id}?key=${API_KEY}`);
  if (!res.ok) return null;
  const doc = await res.json();
  if (!doc.fields) return null;
  return { _id: id, ...fromDoc(doc.fields as Record<string, FsVal>) };
}

export async function fsSet(col: string, id: string, data: Record<string, unknown>): Promise<void> {
  await fetch(`${BASE}/${col}/${id}?key=${API_KEY}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields: toDoc(data) }),
  });
}

export async function fsPatch(col: string, id: string, data: Record<string, unknown>): Promise<void> {
  const maskParams = Object.keys(data)
    .map((k) => `updateMask.fieldPaths=${encodeURIComponent(k)}`)
    .join("&");
  await fetch(`${BASE}/${col}/${id}?key=${API_KEY}&${maskParams}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields: toDoc(data) }),
  });
}

export async function fsAdd(col: string, data: Record<string, unknown>): Promise<string> {
  const res = await fetch(`${BASE}/${col}?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields: toDoc(data) }),
  });
  const doc = await res.json();
  return (doc.name as string).split("/").pop()!;
}

export async function fsGetAll(col: string): Promise<FsDoc[]> {
  const res = await fetch(`${BASE}/${col}?key=${API_KEY}`);
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.documents) return [];
  return (data.documents as { name: string; fields: Record<string, FsVal> }[]).map((doc) => ({
    _id: doc.name.split("/").pop()!,
    ...fromDoc(doc.fields),
  }));
}

export async function fsQuery(
  col: string,
  field: string,
  value: string | number | boolean
): Promise<FsDoc[]> {
  let fsVal: FsVal;
  if (typeof value === "string") fsVal = { stringValue: value };
  else if (typeof value === "boolean") fsVal = { booleanValue: value };
  else fsVal = { integerValue: String(value) };

  const res = await fetch(`${BASE}:runQuery?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: col }],
        where: { fieldFilter: { field: { fieldPath: field }, op: "EQUAL", value: fsVal } },
        limit: 1,
      },
    }),
  });

  const results = await res.json();
  if (!Array.isArray(results)) return [];
  return results
    .filter((r: { document?: { name: string; fields: Record<string, FsVal> } }) => r.document)
    .map((r: { document: { name: string; fields: Record<string, FsVal> } }) => ({
      _id: r.document.name.split("/").pop()!,
      ...fromDoc(r.document.fields),
    }));
}
