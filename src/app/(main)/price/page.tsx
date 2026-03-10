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

// ─── Sanity Types ──────────────────────────────────────────────────────────────

type CancelPolicyRaw = {
  intro?: string;
  sections?: { _key: string; title?: string; content?: string }[];
  closing?: string;
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
    cancelPolicyRaw,
    siteSettingsData,
  ] = await Promise.all([
    safeFetch<CancelPolicyRaw>(`*[_type == "cancelPolicy"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const bookingUrl = siteSettingsData?.bookingUrl ?? undefined;
  const lineUrl = siteSettingsData?.lineUrl ?? undefined;

  const ctaData = {
    heading: "あなたに合う方法を、一緒に見つけましょう",
    description:
      "「本当に変われるのか不安」\n「自分に合う方法が分からない」\n\nそんな方のために、VERDE FITではあなたの身体の状態や生活習慣、目標を丁寧にヒアリングし、最適な改善プランをご提案します。無理な勧誘は一切ありません。まずはお気軽にご相談ください。",
    primaryButtonText: "予約はこちら",
    secondaryButtonText: "LINEで相談する",
  };

  return (
    <>
      <PriceHero />
      <PriceTrial bookingUrl={bookingUrl} />
      <PriceSeitai bookingUrl={bookingUrl} />
      <PricePersonal bookingUrl={bookingUrl} />
      <PriceCoaching bookingUrl={bookingUrl} />
      <PricePremium bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <PersonalCancelPolicy data={cancelPolicyRaw} sectionBg="bg-[#e8f3ec]" />
      <CTA data={ctaData} bookingUrl={bookingUrl} lineUrl={lineUrl} plain />
    </>
  );
}
