import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import CoachingHero from "@/components/sections/CoachingHero";
import CoachingWhyFail from "@/components/sections/CoachingWhyFail";
import CoachingMethod from "@/components/sections/CoachingMethod";
import CoachingFeatures from "@/components/sections/CoachingFeatures";
import CoachingTestimonials from "@/components/sections/CoachingTestimonials";
import CoachingPricing from "@/components/sections/CoachingPricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Access from "@/components/sections/Access";

type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };

function imgUrl(ref: SanityImageRef | undefined): string | undefined {
  if (!ref?.asset?._ref) return undefined;
  try {
    return urlForImage(ref);
  } catch {
    return undefined;
  }
}

// ─── Raw Sanity Types ─────────────────────────────────────────────────────────
type HeroRaw = {
  badge?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  image?: SanityImageRef;
  imageAlt?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

type WhyFailRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  bullets?: string[];
  rootCauseTitle?: string;
  rootCauseText?: string;
  bottomBoxText?: string;
};

type MethodRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  introText?: string;
  steps?: { _key: string; number?: string; title?: string; description?: string }[];
  successCasesTitle?: string;
  successCases?: { _key: string; title?: string; thoughtBefore?: string; thoughtAfter?: string; action?: string; habit?: string }[];
};

type FeaturesRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  features?: { _key: string; title?: string; description?: string }[];
};

type TestimonialsRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  testimonials?: { _key: string; name?: string; demographics?: string; before?: string; after?: string; text?: string }[];
};

type PricingRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  trialBadge?: string;
  trialTitle?: string;
  trialButtonText?: string;
  plans?: { _key: string; badge?: string; title?: string; price?: string; details?: string[] }[];
  note?: string;
};

type CancelPolicyRaw = { intro?: string; sections?: { _key: string; title?: string; content?: string }[]; closing?: string };

type FAQRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  items?: { _key: string; question?: string; answer?: string }[];
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

// ─── generateMetadata ─────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  const seo = await safeFetch<{
    pageTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: { asset: { _ref: string; _type: string } };
  }>(`*[_type == "coachingSeo"][0]{ pageTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage }`);

  const title =
    seo?.pageTitle ??
    "横手市のコーチングならVERDE FIT｜人生を変える習慣・目標達成サポート";
  const description =
    seo?.metaDescription ??
    "横手市でコーチングをお探しの方へ。VERDE FITでは身体づくりと同時に思考や習慣を整えるコーチングを提供しています。目標設定や行動習慣をサポートし、理想の人生を実現するお手伝いをします。横手市で自己成長を目指す方はご相談ください。";
  const ogImageUrl = seo?.ogImage ? urlForImage(seo.ogImage) : undefined;

  return {
    title,
    description,
    keywords: seo?.keywords ?? [
      "横手市 コーチング",
      "横手市 ライフコーチング",
      "横手市 自己成長",
      "横手市 習慣改善",
      "横手市 メンタルサポート",
    ],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
      locale: "ja_JP",
      type: "website",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CoachingPage() {
  const [
    heroRaw,
    whyFailRaw,
    methodRaw,
    featuresRaw,
    testimonialsRaw,
    pricingRaw,
    faqRaw,
    ctaRaw,
    accessData,
    siteSettingsData,
    cancelPolicyRaw,
  ] = await Promise.all([
    safeFetch<HeroRaw>(`*[_type == "coachingHero"][0]{ ..., image{ asset{ _ref, _type } } }`),
    safeFetch<WhyFailRaw>(`*[_type == "coachingWhyFail"][0]`),
    safeFetch<MethodRaw>(`*[_type == "coachingMethod"][0]`),
    safeFetch<FeaturesRaw>(`*[_type == "coachingFeatures"][0]`),
    safeFetch<TestimonialsRaw>(`*[_type == "coachingTestimonials"][0]`),
    safeFetch<PricingRaw>(`*[_type == "coachingPricing"][0]`),
    safeFetch<FAQRaw>(`*[_type == "coachingFaq"][0]`),
    safeFetch<CTARaw>(`*[_type == "coachingCta"][0]`),
    safeFetch<AccessRaw>(`*[_type == "access"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
    safeFetch<CancelPolicyRaw>(`*[_type == "cancelPolicy"][0]`),
  ]);

  const heroData = heroRaw
    ? { ...heroRaw, imageUrl: imgUrl(heroRaw.image) }
    : null;

  const bookingUrl = siteSettingsData?.bookingUrl ?? undefined;
  const lineUrl = siteSettingsData?.lineUrl ?? undefined;
  const phone = accessData?.phone ?? undefined;

  // FAQのデフォルト値（Sanityにデータがない場合）
  const defaultFaqItems = [
    { _key: "c1", question: "コーチングとはどんなことをするのですか？", answer: "コーチとの対話を通じて、あなたの思考パターンや行動習慣を整理し、理想の目標に向けた行動を設計していきます。VERDE FITでは健康習慣・ダイエット・運動習慣の継続に特化したコーチングを提供しています。" },
    { _key: "c2", question: "コーチングとカウンセリングの違いは何ですか？", answer: "カウンセリングは過去の悩みや問題の整理を中心とするのに対し、コーチングは未来目標達成に焦点を当てます。VERDE FITでは「どうすれば続くのか」を一緒に考え、習慣化をサポートします。" },
    { _key: "c3", question: "どんな人がコーチングを受けていますか？", answer: "ダイエットや運動が続かない方、生活習慣を整えたい方、健康的な生活を送りたい方などが多く利用されています。30〜50代を中心に、習慣を変えたい方が多く受けています。" },
    { _key: "c4", question: "どのくらいの期間で習慣は変わりますか？", answer: "個人差はありますが、多くの方が1〜2ヶ月で思考や行動変化を実感され、3〜6ヶ月ほどで習慣として定着していきます。焦らず無理のないペースで進めています。" },
    { _key: "c5", question: "横手が苦手でも受けられますか？", answer: "はい、どちらにも対応しています。横手市・秋田県南エリアの方は対面、遠方の方や忙しい方はオンラインで受けていただくことも可能です。ご希望に合わせてご案内します。" },
    { _key: "c6", question: "話すのが苦手でも大丈夫ですか？", answer: "はい、大丈夫です。コーチが丁寧に対話しながら進めるので、自然と話せる環境を作ります。整理に慣れていなくても安心して自分のペースで進めていただけます。" },
    { _key: "c7", question: "整体やパーソナルトレーニングと併用できますか？", answer: "はい、併用することでより効果的です。身体を整える整体、身体を動かすトレーニング、習慣を作るコーチングを組み合わせることで、より根本的な健康改善を目指します。" },
    { _key: "c8", question: "無料相談ではどんなことをしますか？", answer: "現在のお悩みや目標をお聞きし、あなたに合ったコーチングの進め方をご説明します。無理な勧誘はありませんので、まずは気軽にご相談ください。" },
  ];

  const faqData = {
    sectionTitle: faqRaw?.sectionTitle ?? "よくある質問",
    sectionDescription: faqRaw?.sectionDescription ?? "横手市・秋田でコーチングを受ける前の疑問を解消",
    items: faqRaw?.items && faqRaw.items.length > 0 ? faqRaw.items : defaultFaqItems,
  };

  const ctaData = {
    heading: ctaRaw?.heading ?? "習慣が変われば人生も変わります",
    description:
      ctaRaw?.description ??
      "「続けたいのに続かない」その原因は意志の弱さではありません。\n思考と習慣の仕組みを整えることで、行動は自然と続くようになります。\nまずは無料相談で、あなたの理想の未来と習慣づくりについて一緒に考えてみませんか。",
    primaryButtonText: ctaRaw?.primaryButtonText ?? "無料相談を予約する",
    secondaryButtonText: ctaRaw?.secondaryButtonText ?? "LINEで相談する",
  };

  return (
    <>
      <CoachingHero data={heroData} bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <CoachingWhyFail data={whyFailRaw} />
      <CoachingMethod data={methodRaw} />
      <CoachingFeatures data={featuresRaw} />
      <CoachingTestimonials data={testimonialsRaw} />
      <CoachingPricing data={pricingRaw} cancelPolicy={cancelPolicyRaw} bookingUrl={bookingUrl} />
      <FAQ data={faqData} sectionBg="bg-[#e8f3ec]" />
      <CTA
        data={ctaData}
        bookingUrl={bookingUrl}
        lineUrl={lineUrl}
        phone={phone}
      />
      <Access data={accessData} sectionBg="bg-white" />
    </>
  );
}
