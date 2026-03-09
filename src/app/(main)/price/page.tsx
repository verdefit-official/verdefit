import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import PriceHero from "@/components/sections/PriceHero";
import PriceTrial from "@/components/sections/PriceTrial";
import PriceSeitai from "@/components/sections/PriceSeitai";
import PricePersonal from "@/components/sections/PricePersonal";
import PriceCoaching from "@/components/sections/PriceCoaching";
import PricePremium from "@/components/sections/PricePremium";
import PersonalCancelPolicy from "@/components/sections/PersonalCancelPolicy";
import CTA from "@/components/sections/CTA";
import Access from "@/components/sections/Access";

// ─── Sanity Types ──────────────────────────────────────────────────────────────

type ChiropracticPricingRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  courses?: { _key: string; name?: string; price?: string; description?: string }[];
  options?: { _key: string; name?: string; price?: string }[];
  couponSectionTitle?: string;
  coupons?: { _key: string; name?: string; price?: string; unit?: string; validity?: string }[];
};

type CoachingPricingRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  trialBadge?: string;
  trialTitle?: string;
  plans?: { _key: string; badge?: string; title?: string; price?: string; details?: string[] }[];
};

type CancelPolicyRaw = {
  intro?: string;
  sections?: { _key: string; title?: string; content?: string }[];
  closing?: string;
};

type CTARaw = {
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

type AccessRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  storeName?: string;
  postalCode?: string;
  address?: string;
  phone?: string;
  hours?: string;
  lastEntry?: string;
  closedDays?: string;
  closedDaysNote?: string;
  parking?: string;
  payment?: string;
};

// ─── generateMetadata ──────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const seo = await safeFetch<{
    pageTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  }>(`*[_type == "priceSeo"][0]`);

  const title =
    seo?.pageTitle ?? "料金・プラン一覧｜横手市の整体・パーソナルジム・コーチング VERDE FIT";
  const description =
    seo?.metaDescription ??
    "VERDE FITの料金・プラン一覧ページです。整体（単発・回数券）、パーソナルトレーニング（月額・短期集中）、コーチング（オンライン・対面）、トータルケアプレミアムプランをご確認いただけます。横手市で本格的な身体づくりをサポートします。";

  return {
    title,
    description,
    keywords: seo?.keywords ?? [
      "横手市 料金",
      "横手市 整体 料金",
      "横手市 パーソナルジム 料金",
      "横手市 コーチング 料金",
      "VERDE FIT 料金",
    ],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      locale: "ja_JP",
      type: "website",
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function PricePage() {
  const [
    chiropracticPricingRaw,
    coachingPricingRaw,
    cancelPolicyRaw,
    ctaRaw,
    accessData,
    siteSettingsData,
  ] = await Promise.all([
    safeFetch<ChiropracticPricingRaw>(`*[_type == "chiropracticPricing"][0]`),
    safeFetch<CoachingPricingRaw>(`*[_type == "coachingPricing"][0]`),
    safeFetch<CancelPolicyRaw>(`*[_type == "cancelPolicy"][0]`),
    safeFetch<CTARaw>(`*[_type == "cta"][0]`),
    safeFetch<AccessRaw>(`*[_type == "access"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const bookingUrl = siteSettingsData?.bookingUrl ?? undefined;
  const lineUrl = siteSettingsData?.lineUrl ?? undefined;
  const phone = accessData?.phone ?? undefined;

  const ctaData = {
    heading: ctaRaw?.heading ?? "あなたに合う方法を、一緒に見つけましょう",
    description:
      ctaRaw?.description ??
      "整体・パーソナルトレーニング・コーチングから、あなたの目標に合ったプランをご提案します。\nまずは初回体験で、VERDE FITの違いを実感してください。",
    primaryButtonText: ctaRaw?.primaryButtonText ?? "予約はこちら",
    secondaryButtonText: ctaRaw?.secondaryButtonText ?? "LINEで相談する",
  };

  return (
    <>
      <PriceHero />
      <PriceTrial bookingUrl={bookingUrl} />
      <PriceSeitai data={chiropracticPricingRaw} bookingUrl={bookingUrl} />
      <PricePersonal bookingUrl={bookingUrl} />
      <PriceCoaching data={coachingPricingRaw} bookingUrl={bookingUrl} />
      <PricePremium bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <PersonalCancelPolicy data={cancelPolicyRaw} sectionBg="bg-white" />
      <CTA data={ctaData} bookingUrl={bookingUrl} lineUrl={lineUrl} phone={phone} />
      <Access data={accessData} sectionBg="bg-[#e8f3ec]" />
    </>
  );
}
