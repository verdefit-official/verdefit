import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import PersonalHero from "@/components/sections/PersonalHero";
import PersonalConcerns from "@/components/sections/PersonalConcerns";
import PersonalReasons from "@/components/sections/PersonalReasons";
import PersonalComparison from "@/components/sections/PersonalComparison";
import PersonalBeforeAfter from "@/components/sections/PersonalBeforeAfter";
import PersonalTrainer from "@/components/sections/PersonalTrainer";
import PersonalPricing from "@/components/sections/PersonalPricing";
import PersonalFlow from "@/components/sections/PersonalFlow";
import PersonalFAQ from "@/components/sections/PersonalFAQ";
import CTA from "@/components/sections/CTA";
import Access from "@/components/sections/Access";

// ─── Types ───────────────────────────────────────────────────────────────────

type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };

function imgUrl(ref: SanityImageRef | undefined): string | undefined {
  if (!ref?.asset?._ref) return undefined;
  try {
    return urlForImage(ref);
  } catch {
    return undefined;
  }
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const seo = await safeFetch<{
    pageTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  }>(`*[_type == "personalSeo"][0]`);

  const title = seo?.pageTitle ?? "横手市のパーソナルジム｜本気で痩せるダイエット専門 VERDE FIT";
  const description =
    seo?.metaDescription ??
    "横手市でパーソナルジムをお探しの方へ。VERDE FITはダイエット・ボディメイク専門のパーソナルトレーニングジムです。食事サポートと個別トレーニングで理想の身体づくりをサポート。横手市で本気で痩せたい方は無料カウンセリングへ。";

  return {
    title,
    description,
    keywords: seo?.keywords ?? ["横手市 パーソナルジム", "横手市 ダイエット", "横手市 パーソナルトレーニング", "横手市 ボディメイク", "横手市 ジム"],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      locale: "ja_JP",
      type: "website",
    },
  };
}

// ─── Raw Sanity Types ─────────────────────────────────────────────────────────

type HeroRaw = {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: SanityImageRef;
  imageAlt?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

type ConcernItemRaw = { _key: string; title?: string; description?: string; icon?: SanityImageRef };
type ConcernsRaw = { sectionTitle?: string; items?: ConcernItemRaw[] };

type ReasonsRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  reasons?: { _key: string; title?: string; description?: string }[];
};

type ComparisonRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  rows?: { _key: string; label?: string; verdeValue?: string; otherValue?: string }[];
};

type BACardRaw = { _key: string; label?: string; result?: string; text?: string; image?: SanityImageRef; imageAlt?: string };
type BeforeAfterRaw = { sectionTitle?: string; sectionDescription?: string; cards?: BACardRaw[] };

type TrainerRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  role?: string;
  name?: string;
  image?: SanityImageRef;
  imageAlt?: string;
  beliefText?: string;
  quote?: string;
  closingText?: string;
  credentials?: string[];
};

type PlanItemRaw = { _key: string; name?: string; foodLabel?: string; foodGreen?: boolean; price?: string; details?: string[]; popular?: boolean };
type PricingRaw = { sectionTitle?: string; sectionDescription?: string; plans?: PlanItemRaw[]; note?: string; cancelPolicyIntro?: string; cancelPolicySections?: { _key: string; title?: string; content?: string }[]; cancelPolicyClosing?: string };

type FlowStepRaw = { _key: string; number?: string; title?: string; description?: string };
type FlowRaw = { sectionTitle?: string; sectionDescription?: string; steps?: FlowStepRaw[] };

type FAQItemRaw = { _key: string; question?: string; answer?: string };
type FAQRaw = { sectionTitle?: string; sectionDescription?: string; items?: FAQItemRaw[] };

type CTARaw = { heading?: string; subheading?: string; description?: string; primaryButtonText?: string; secondaryButtonText?: string };

type AccessRaw = {
  sectionTitle?: string; sectionDescription?: string; storeName?: string; postalCode?: string;
  address?: string; phone?: string; hours?: string; lastEntry?: string;
  closedDays?: string; closedDaysNote?: string; parking?: string; payment?: string;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PersonalTrainingPage() {
  const [
    heroRaw,
    concernsRaw,
    reasonsRaw,
    comparisonRaw,
    beforeAfterRaw,
    trainerRaw,
    pricingRaw,
    flowRaw,
    faqRaw,
    ctaRaw,
    accessData,
    siteSettingsData,
  ] = await Promise.all([
    safeFetch<HeroRaw>(`*[_type == "personalHero"][0]{ ..., image{ asset{ _ref, _type } } }`),
    safeFetch<ConcernsRaw>(`*[_type == "personalConcerns"][0]{ ..., items[]{ ..., icon{ asset{ _ref, _type } } } }`),
    safeFetch<ReasonsRaw>(`*[_type == "personalReasons"][0]`),
    safeFetch<ComparisonRaw>(`*[_type == "personalComparison"][0]`),
    safeFetch<BeforeAfterRaw>(`*[_type == "personalBeforeAfter"][0]{ ..., cards[]{ ..., image{ asset{ _ref, _type } } } }`),
    safeFetch<TrainerRaw>(`*[_type == "personalTrainer"][0]{ ..., image{ asset{ _ref, _type } } }`),
    safeFetch<PricingRaw>(`*[_type == "personalPricing"][0]`),
    safeFetch<FlowRaw>(`*[_type == "personalFlow"][0]`),
    safeFetch<FAQRaw>(`*[_type == "personalFaq"][0]`),
    safeFetch<CTARaw>(`*[_type == "personalCta"][0]`),
    safeFetch<AccessRaw>(`*[_type == "access"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(`*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`),
  ]);

  // Transform image refs → URLs
  const heroData = heroRaw
    ? { ...heroRaw, imageUrl: imgUrl(heroRaw.image) }
    : null;

  const concernsData = concernsRaw
    ? {
        ...concernsRaw,
        items: concernsRaw.items?.map((item) => ({
          ...item,
          iconUrl: imgUrl(item.icon),
        })),
      }
    : null;

  const beforeAfterData = beforeAfterRaw
    ? {
        ...beforeAfterRaw,
        cards: beforeAfterRaw.cards?.map((card) => ({
          ...card,
          imageUrl: imgUrl(card.image),
          imageAlt: card.imageAlt,
        })),
      }
    : null;

  const trainerData = trainerRaw
    ? { ...trainerRaw, imageUrl: imgUrl(trainerRaw.image), imageAlt: trainerRaw.imageAlt }
    : null;

  const bookingUrl = siteSettingsData?.bookingUrl ?? undefined;
  const lineUrl = siteSettingsData?.lineUrl ?? undefined;
  const phone = accessData?.phone ?? undefined;

  return (
    <>
      <PersonalHero data={heroData} bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <PersonalConcerns data={concernsData} />
      <PersonalReasons data={reasonsRaw} />
      <PersonalComparison data={comparisonRaw} />
      <PersonalBeforeAfter data={beforeAfterData} />
      <PersonalTrainer data={trainerData} />
      <PersonalPricing data={pricingRaw} />
      <PersonalFlow data={flowRaw} />
      <PersonalFAQ data={faqRaw} />
      <CTA
        data={ctaRaw}
        phone={phone}
        bookingUrl={bookingUrl}
        lineUrl={lineUrl}
        subheading={ctaRaw?.subheading ?? "無料カウンセリング実施中"}
      />
      <Access data={accessData} sectionBg="bg-white" />
    </>
  );
}
