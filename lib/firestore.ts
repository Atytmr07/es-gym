import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  Timestamp,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PackageTier {
  label: string;
  price: number;
  duration: number | null;   // days; null if session-based
  sessions: number | null;   // session count; null if time-based
  description?: string;
}

export interface GymPackage {
  id: string;
  name: string;
  description: string;
  type: "gym" | "ems" | "pt" | "kickboks" | "pilates" | "bolgesel" | "cocuk";
  tiers: PackageTier[];
  features: string[];
  variant: "dark" | "light" | "gold";
  accent?: "orange";
  badge?: string;
  active: boolean;
  order: number;
}

export interface Subscription {
  id: string;
  packageId: string;
  packageName: string;
  packageType: string;
  tierLabel: string;
  expiresAt: string | null;       // ISO string
  sessionsTotal: number | null;
  sessionsUsed: number | null;
  purchasedAt: string;            // ISO string
}

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  phone: string;
  role: "admin" | "user";
  subscriptions?: Subscription[];
  // Legacy single-package fields (backward compat)
  activePackage: string | null;
  packageId: string | null;
  packageType: string | null;
  expiresAt: Timestamp | null;
  sessionsTotal: number | null;
  sessionsUsed: number | null;
  createdAt: Timestamp;
}

export interface Transaction {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  packageId: string;
  packageName: string;
  tierLabel: string;
  amount: number;
  currency: string;
  status: "pending" | "success" | "failed";
  iyzicoToken: string;
  iyzicoPaymentId: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ─── Users ────────────────────────────────────────────────────────────────────

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return null;
  return { uid: snap.id, ...snap.data() } as UserProfile;
}

export async function createUserProfile(uid: string, data: Partial<UserProfile>) {
  await setDoc(doc(db, "users", uid), {
    role: "user",
    activePackage: null,
    packageId: null,
    packageType: null,
    expiresAt: null,
    sessionsTotal: null,
    sessionsUsed: null,
    createdAt: serverTimestamp(),
    ...data,
  });
}

export async function updateUserSubscription(
  uid: string,
  data: {
    activePackage: string;
    packageId: string;
    packageType: string;
    expiresAt: Timestamp | null;
    sessionsTotal: number | null;
    sessionsUsed: number | null;
  }
) {
  await updateDoc(doc(db, "users", uid), data);
}

export async function getAllUsers(): Promise<UserProfile[]> {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() } as UserProfile));
}

// ─── Packages ─────────────────────────────────────────────────────────────────

export async function getPackages(): Promise<GymPackage[]> {
  // Composite index gerektirmemek için where kaldırıldı, JS tarafında filtre yapılıyor
  const q = query(collection(db, "packages"), orderBy("order", "asc"));
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() } as GymPackage))
    .filter((p) => p.active !== false);
}

export async function getAllPackages(): Promise<GymPackage[]> {
  const q = query(collection(db, "packages"), orderBy("order", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as GymPackage));
}

export async function getPackageById(id: string): Promise<GymPackage | null> {
  const snap = await getDoc(doc(db, "packages", id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as GymPackage;
}

export async function updatePackage(id: string, data: Partial<GymPackage>) {
  await updateDoc(doc(db, "packages", id), data as Record<string, unknown>);
}

// ─── Transactions ─────────────────────────────────────────────────────────────

export async function createTransaction(data: Omit<Transaction, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "transactions"), data);
  return ref.id;
}

export async function updateTransaction(id: string, data: Partial<Transaction>) {
  await updateDoc(doc(db, "transactions", id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function getTransactionByToken(token: string): Promise<Transaction | null> {
  const q = query(collection(db, "transactions"), where("iyzicoToken", "==", token));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as Transaction;
}

export async function getAllTransactions(): Promise<Transaction[]> {
  const snap = await getDocs(collection(db, "transactions"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() } as Transaction))
    .sort((a, b) => {
      const aTime = (a.createdAt as unknown as { seconds: number })?.seconds ?? 0;
      const bTime = (b.createdAt as unknown as { seconds: number })?.seconds ?? 0;
      return bTime - aTime;
    });
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

export async function seedPackagesIfEmpty() {
  const snap = await getDocs(collection(db, "packages"));
  if (!snap.empty) return;

  const batch = writeBatch(db);
  const packages: Omit<GymPackage, "id">[] = [
    {
      name: "GYM Üyeliği",
      description: "Sınırsız erişim, profesyonel ekipman",
      type: "gym",
      variant: "dark",
      order: 1,
      active: true,
      features: [
        "Sınırsız GYM erişimi",
        "Kardio & ağırlık alanı",
        "Soyunma odası & duş",
        "Fitness değerlendirmesi",
        "Profesyonel ekipman",
      ],
      tiers: [
        { label: "1 Ay", price: 3000, duration: 30, sessions: null },
        { label: "2 Ay", price: 5000, duration: 60, sessions: null },
        { label: "3 Ay", price: 6500, duration: 90, sessions: null },
        { label: "6 Ay", price: 11000, duration: 180, sessions: null },
        { label: "12 Ay", price: 18000, duration: 365, sessions: null },
      ],
    },
    {
      name: "EMS Fitness",
      description: "Az Zaman, Büyük Değişim!",
      type: "ems",
      variant: "dark",
      badge: "⚡ Yeni Nesil",
      order: 2,
      active: true,
      features: [
        "Haftada 3 gün antrenman",
        "EMS tam vücut aktivasyon",
        "Sertifikalı EMS antrenörü",
        "Kişiye özel program",
        "Vücut analizi & aylık takip",
      ],
      tiers: [
        { label: "12 Seans", price: 12000, duration: null, sessions: 12 },
        { label: "16 Seans", price: 14000, duration: null, sessions: 16 },
        { label: "24 Seans", price: 16000, duration: null, sessions: 24 },
        { label: "32 Seans", price: 18000, duration: null, sessions: 32 },
      ],
    },
    {
      name: "Personal Training",
      description: "Birebir sertifikalı PT eğitimi",
      type: "pt",
      variant: "dark",
      badge: "⭐ En Çok Tercih Edilen",
      order: 3,
      active: true,
      features: [
        "Birebir kişisel antrenör",
        "Hedefine özel program",
        "Beslenme danışmanlığı",
        "Vücut analizi & takip",
        "WhatsApp destek hattı",
      ],
      tiers: [
        { label: "8 Seans", price: 8000, duration: null, sessions: 8 },
        { label: "12 Seans", price: 10000, duration: null, sessions: 12 },
        { label: "16 Seans", price: 11000, duration: null, sessions: 16 },
      ],
    },
    {
      name: "Kickboks",
      description: "Pzt · Çar · Cum · Grup Dersi",
      type: "kickboks",
      variant: "dark",
      accent: "orange",
      order: 4,
      active: true,
      features: [
        "Haftada 3 gün antrenman",
        "Boks & tekme kombinasyonları",
        "Sertifikalı antrenör eşliğinde",
        "Kondisyon & refleks geliştirme",
        "GYM alanına ücretsiz erişim",
      ],
      tiers: [{ label: "Aylık", price: 2500, duration: 30, sessions: null }],
    },
    {
      name: "Grup Pilates",
      description: "Sertifikalı eğitmen eşliğinde",
      type: "pilates",
      variant: "light",
      order: 5,
      active: true,
      features: [
        "Reformer pilates grup dersleri",
        "Sertifikalı pilates eğitmeni",
        "Esneklik & postür programı",
        "Max 8 kişilik küçük gruplar",
        "GYM alanına ücretsiz erişim",
      ],
      tiers: [
        { label: "8 Seans", price: 3400, duration: 30, sessions: 8 },
        { label: "24 Seans", price: 7500, duration: 90, sessions: 24 },
        { label: "32 Seans", price: 9500, duration: 120, sessions: 32 },
        { label: "64 Seans", price: 13900, duration: 240, sessions: 64 },
        { label: "100 Seans", price: 18000, duration: 365, sessions: 100 },
      ],
    },
    {
      name: "Bölgesel İncelme",
      description: "Haftada 3 gün · 3 Aylık Program",
      type: "bolgesel",
      variant: "light",
      order: 6,
      active: true,
      features: [
        "Haftada 3 gün istediğiniz bölge",
        "Tel & WhatsApp ile randevu",
        "6 saat öncesine kadar iptal hakkı",
        "Uzman estetisyen eşliğinde",
        "Kişiye özel bölge programı",
      ],
      tiers: [
        { label: "G5", price: 7500, duration: 90, sessions: null, description: "Vücut şekillendirme" },
        { label: "WSlim", price: 8200, duration: 90, sessions: null, description: "İncelme & sıkılaştırma" },
        { label: "Lenf Tulumu", price: 8000, duration: 90, sessions: null, description: "Lenf drenajı" },
      ],
    },
    {
      name: "Hareket Gelişim",
      description: "Çocuklar İçin · 2–12 Yaş",
      type: "cocuk",
      variant: "light",
      badge: "2–12 Yaş",
      order: 7,
      active: true,
      features: [
        "Dikkat & odak geliştirme",
        "Denge, sürat & kuvvet",
        "Problem çözme becerileri",
        "Etkili iletişim & sosyalleşme",
        "Uzman çocuk antrenörü",
      ],
      tiers: [{ label: "Aylık (12 Ders)", price: 7500, duration: 30, sessions: 12 }],
    },
  ];

  for (const pkg of packages) {
    const ref = doc(collection(db, "packages"));
    batch.set(ref, pkg);
  }

  await batch.commit();
}
