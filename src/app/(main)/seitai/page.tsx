import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import ChiropracticHero from "@/components/sections/ChiropracticHero";
import Concerns from "@/components/sections/Concerns";
import SeitaiSymptoms from "@/components/sections/SeitaiSymptoms";
import Reasons from "@/components/sections/Reasons";
import Profile from "@/components/sections/Profile";
import ChiropracticPricing from "@/components/sections/ChiropracticPricing";
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
    ogImage?: { asset: { _ref: string; _type: string } };
  }>(`*[_type == "chiropracticSeo"][0]{ pageTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage }`);

  const title = seo?.pageTitle ?? "横手市の整体｜腰痛・肩こりを根本改善 VERDE FIT整体院";
  const description =
    seo?.metaDescription ??
    "横手市で整体をお探しの方へ。腰痛・肩こり・姿勢の悩みを根本改善。VERDE FITは国家資格（柔道整復師）を持つ院長が対応する整体院です。延べ5,000人以上の施術実績。横手市で身体を変えたい方はご相談ください。";
  const ogImageUrl = seo?.ogImage ? urlForImage(seo.ogImage) : undefined;

  return {
    title,
    description,
    keywords: seo?.keywords ?? ["横手市 整体", "横手市 腰痛", "横手市 肩こり", "横手市 骨盤矯正", "横手市 姿勢改善", "VERDE FIT"],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
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
    listImageAlt?: string;
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
    imageAlt?: string;
    beliefDescription?: string;
    highlight?: string;
    closingText?: string;
    history?: string[];
    credentials?: string[];
  };

  type CourseItem = { _key: string; name?: string; price?: string; description?: string };
  type OptionItem = { _key: string; name?: string; price?: string };
  type CouponItem = { _key: string; name?: string; price?: string; unit?: string; validity?: string };
  type PricingData = {
    sectionTitle?: string;
    sectionDescription?: string;
    trialBadge?: string;
    trialTitle?: string;
    trialPrice?: string;
    trialDetails?: string;
    courses?: CourseItem[];
    options?: OptionItem[];
    couponSectionTitle?: string;
    coupons?: CouponItem[];
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
        listImageAlt: concernsRaw.listImageAlt,
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
      <ChiropracticHero data={heroData} phone={phone} bookingUrl={siteSettingsData?.bookingUrl} />
      <Concerns
        data={concernsData}
        showRootCause={false}
        sectionBg="bg-white"
        variant="list"
        listImageUrl={concernsData?.listImageUrl ?? "/chiropractic-concerns.png"}
        listImageAlt={concernsData?.listImageAlt}
      />
      <SeitaiSymptoms data={disordersData} />
      <RootCause data={disordersRaw} />
      <Reasons data={reasonsData} sectionBg="bg-[#e8f3ec]" />
      <Profile data={profileData} sectionBg="bg-white" />
      <ChiropracticPricing data={pricingData} sectionBg="bg-[#e8f3ec]" />
      <FAQ data={faqData} sectionBg="bg-white" />
      <Access data={accessData} sectionBg="bg-[#e8f3ec]" />
      <CTA data={ctaData} phone={phone} bookingUrl={siteSettingsData?.bookingUrl} />
    </>
  );
}
