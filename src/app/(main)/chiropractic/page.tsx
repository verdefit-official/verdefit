import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/sections/Hero";
import Concerns from "@/components/sections/Concerns";
import SeitaiSymptoms from "@/components/sections/SeitaiSymptoms";
import Reasons from "@/components/sections/Reasons";
import Profile from "@/components/sections/Profile";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Access from "@/components/sections/Access";
import CTA from "@/components/sections/CTA";

// ─── Sanity raw types ─────────────────────────────────────────────
type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };

function imgUrl(ref: SanityImageRef | undefined): string | undefined {
  if (!ref?.asset?._ref) return undefined;
  try {
    return urlForImage(ref);
  } catch {
    return undefined;
  }
}

// ─── generateMetadata ─────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const seo = await safeFetch<{
    pageTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  }>(`*[_type == "chiropracticSeo"][0]`);

  const title = seo?.pageTitle ?? "整体｜VERDE FIT";
  const description =
    seo?.metaDescription ??
    "延べ5,000人以上を治療してきた国家資格者が横手市であなたの痛みを根本から整えます。腰痛・肩こり・坐骨神経痛など、あらゆる不調に対応した分析型整体。";

  return {
    title,
    description,
    keywords: seo?.keywords ?? ["横手市", "整体", "腰痛", "肩こり", "坐骨神経痛", "VERDE FIT"],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      locale: "ja_JP",
      type: "website",
    },
  };
}

// ─── Root cause section ───────────────────────────────────────────

function RootCause({
  data,
}: {
  data?: { rootCauseTitle?: string | null; rootCauseText?: string | null } | null;
}) {
  const title = data?.rootCauseTitle ?? "なぜあなたの痛みは繰り返すのか？";
  const text =
    data?.rootCauseText ??
    "痛みのある場所だけを施術しても、多くの場合また繰り返します。身体には、痛みをかばうための「代償動作」が刷り込まれており、これが新たな不調の引き金になっています。VERDE FITでは姿勢・筋肉の使い方・日常生活の動作パターンまで詳細に確認し、痛みを繰り返させている本当の原因「トリガー」を特定した上で施術を行います。その場しのぎではなく、根本からの改善を実現します。";

  return (
    <div className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h3 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
              {title}
            </h3>
            <div className="mt-8 rounded-xl border-2 border-green-700 bg-white px-8 py-8 md:px-20 md:py-10">
              <p className="text-[14px] leading-[2] text-gray-700 md:text-[15px]">
                {text}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function SeitaiPage() {
  type HeroRaw = {
    badge?: string;
    heading?: string;
    subheadingLocation?: string;
    description?: string;
    image?: SanityImageRef;
    imageAlt?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
  };

  type ConcernItem = { _key: string; title?: string; description?: string };
  type ConcernsRaw = {
    sectionTitle?: string;
    sectionDescription?: string;
    listImage?: SanityImageRef;
    concernList?: ConcernItem[];
  };

  type DisorderItemRaw = { _key: string; title?: string; description?: string; icon?: SanityImageRef };
  type DisordersRaw = {
    sectionTitle?: string;
    sectionDescription?: string;
    items?: DisorderItemRaw[];
    rootCauseTitle?: string;
    rootCauseText?: string;
  };

  type ReasonItem = {
    _key: string;
    number?: string;
    title?: string;
    description?: string;
    image?: SanityImageRef;
    imageAlt?: string;
  };
  type ReasonsRaw = {
    sectionTitle?: string;
    sectionDescription?: string;
    reasonList?: ReasonItem[];
  };

  type ProfileRaw = {
    sectionTitle?: string;
    sectionDescription?: string;
    role?: string;
    name?: string;
    image?: SanityImageRef;
    beliefDescription?: string;
    highlight?: string;
    closingText?: string;
    history?: string[];
    credentials?: string[];
  };

  type PricingItem = { _key: string; label?: string; price?: string };
  type PricingColumn = { _key: string; title?: string; items?: PricingItem[] };
  type PricingData = {
    sectionTitle?: string;
    sectionDescription?: string;
    trialBadge?: string;
    trialTitle?: string;
    trialPrice?: string;
    trialDetails?: string;
    trialDuration?: string;
    trialBenefits?: string[];
    pricingColumns?: PricingColumn[];
    pricingNote?: string;
  };

  type FAQItem = { _key: string; question?: string; answer?: string };
  type FAQData = {
    sectionTitle?: string;
    sectionDescription?: string;
    items?: FAQItem[];
  };

  type CTAData = {
    heading?: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
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

  const [
    heroRaw,
    concernsRaw,
    disordersRaw,
    reasonsRaw,
    profileRaw,
    pricingData,
    faqData,
    accessData,
    ctaData,
    siteSettingsData,
  ] = await Promise.all([
    safeFetch<HeroRaw>(
      `*[_type == "chiropracticHero"][0]{ ..., image{ asset{ _ref, _type } } }`
    ),
    safeFetch<ConcernsRaw>(
      `*[_type == "chiropracticConcerns"][0]{ ..., listImage{ asset{ _ref, _type } } }`
    ),
    safeFetch<DisordersRaw>(
      `*[_type == "chiropracticDisorders"][0]{ ..., items[]{ ..., icon{ asset{ _ref, _type } } } }`
    ),
    safeFetch<ReasonsRaw>(
      `*[_type == "chiropracticReasons"][0]{ ..., reasonList[]{ ..., image{ asset{ _ref, _type } } } }`
    ),
    safeFetch<ProfileRaw>(
      `*[_type == "chiropracticProfile"][0]{ ..., image{ asset{ _ref, _type } } }`
    ),
    safeFetch<PricingData>(`*[_type == "chiropracticPricing"][0]`),
    safeFetch<FAQData>(`*[_type == "chiropracticFaq"][0]`),
    safeFetch<AccessData>(`*[_type == "access"][0]`),
    safeFetch<CTAData>(`*[_type == "chiropracticCta"][0]`),
    safeFetch<{ bookingUrl?: string }>(`*[_type == "siteSettings"][0]{ bookingUrl }`),
  ]);

  // Transform image refs → URLs
  const heroData = heroRaw
    ? { ...heroRaw, imageUrl: imgUrl(heroRaw.image) ?? "/chiropractic-hero.png" }
    : null;

  const concernsData = concernsRaw
    ? {
        ...concernsRaw,
        listImageUrl: imgUrl(concernsRaw.listImage) ?? "/chiropractic-concerns.png",
      }
    : null;

  const reasonsData = reasonsRaw
    ? {
        ...reasonsRaw,
        reasonList: reasonsRaw.reasonList?.map((r, i) => ({
          ...r,
          imageUrl: imgUrl(r.image) ?? `/chiropractic-reason-0${i + 1}.png`,
        })),
      }
    : null;

  const profileData = profileRaw
    ? { ...profileRaw, imageUrl: imgUrl(profileRaw.image) }
    : null;

  const disordersData = disordersRaw
    ? {
        ...disordersRaw,
        items: disordersRaw.items?.map((item) => ({
          ...item,
          imageUrl: imgUrl(item.icon),
        })),
      }
    : null;

  const phone = accessData?.phone ?? undefined;

  return (
    <>
      <Hero data={heroData} phone={phone} />
      <Concerns
        data={concernsData}
        showRootCause={false}
        sectionBg="bg-white"
        variant="list"
        listImageUrl={concernsData?.listImageUrl ?? "/chiropractic-concerns.png"}
      />
      <SeitaiSymptoms data={disordersData} />
      <RootCause data={disordersRaw} />
      <Reasons data={reasonsData} sectionBg="bg-[#e8f3ec]" />
      <Profile data={profileData} sectionBg="bg-white" />
      <Pricing data={pricingData} sectionBg="bg-[#e8f3ec]" />
      <FAQ data={faqData} sectionBg="bg-[#e8f3ec]" />
      <Access data={accessData} sectionBg="bg-white" />
      <CTA data={ctaData} phone={phone} bookingUrl={siteSettingsData?.bookingUrl} />
    </>
  );
}
