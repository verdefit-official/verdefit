import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import PersonalHero from "@/components/sections/PersonalHero";
import PersonalConcerns from "@/components/sections/PersonalConcerns";
import PersonalReasons from "@/components/sections/PersonalReasons";
import PersonalComparison from "@/components/sections/PersonalComparison";
import PersonalBeforeAfter from "@/components/sections/PersonalBeforeAfter";
import PersonalTrainer from "@/components/sections/PersonalTrainer";
import PersonalPricing from "@/components/sections/PersonalPricing";
import PersonalCancelPolicy from "@/components/sections/PersonalCancelPolicy";
import PersonalFlow from "@/components/sections/PersonalFlow";
import PersonalFAQ from "@/components/sections/PersonalFAQ";
import CTA from "@/components/sections/CTA";
import Access from "@/components/sections/Access";

export const metadata: Metadata = {
  title: "パーソナルトレーニング｜VERDE FIT",
  description:
    "横手市で一生リバウンドしない体づくりを。NSCA認定トレーナーによる完全個別指導・食事サポート・習慣化メソッドで理想の体へ導きます。",
  keywords: ["横手市", "パーソナルトレーニング", "ダイエット", "ボディメイク", "VERDE FIT"],
  openGraph: {
    title: "パーソナルトレーニング｜VERDE FIT",
    description:
      "完全個別指導・食事サポート・習慣化メソッドで、一生リバウンドしない体づくりをサポートします。",
    locale: "ja_JP",
    type: "website",
  },
};

type AccessData = {
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

const ctaData = {
  heading: "いつか変わりたいを今日から始めませんか？",
  description:
    "無料体験カウンセリングを実施しています。\nまずはお気軽にご予約ください。あなたの目標・悩みをじっくりお聞きします。",
  primaryButtonText: "予約はこちら",
  secondaryButtonText: "お電話でのご相談",
};

export default async function PersonalTrainingPage() {
  const [siteSettingsData, accessData] = await Promise.all([
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
    safeFetch<AccessData>(`*[_type == "access"][0]`),
  ]);

  const bookingUrl = siteSettingsData?.bookingUrl ?? undefined;
  const lineUrl = siteSettingsData?.lineUrl ?? undefined;
  const phone = accessData?.phone ?? undefined;

  return (
    <>
      <PersonalHero bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <PersonalConcerns />
      <PersonalReasons />
      <PersonalComparison />
      <PersonalBeforeAfter />
      <PersonalTrainer />
      <PersonalPricing />
      <PersonalCancelPolicy />
      <PersonalFlow />
      <PersonalFAQ />
      <CTA data={ctaData} phone={phone} bookingUrl={bookingUrl} />
      <Access data={accessData} sectionBg="bg-white" />
    </>
  );
}
