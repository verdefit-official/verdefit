import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Concerns from "@/components/sections/Concerns";
import Reasons from "@/components/sections/Reasons";
import Testimonials from "@/components/sections/Testimonials";
import Profile from "@/components/sections/Profile";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Access from "@/components/sections/Access";
import CTA from "@/components/sections/CTA";

// ─── Sanity raw types ────────────────────────────────────────────
type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };

type HeroSanity = {
  badge?: string;
  heading?: string;
  subheadingLocation?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

type ServiceItem = {
  _key: string;
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
};
type ServicesSanity = {
  sectionTitle?: string;
  sectionDescription?: string;
  serviceList?: ServiceItem[];
};

type ConcernItem = { _key: string; title?: string; description?: string };
type ConcernsSanity = {
  sectionTitle?: string;
  sectionDescription?: string;
  concernList?: ConcernItem[];
  rootCauseTitle?: string;
  rootCauseText?: string;
};

type ReasonItem = {
  _key: string;
  number?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};
type ReasonsSanity = {
  sectionTitle?: string;
  sectionDescription?: string;
  reasonList?: ReasonItem[];
};

type VoiceItem = {
  _key: string;
  goal?: string;
  demographics?: string;
  result?: string;
  imageUrl?: string;
  imageAlt?: string;
};
type TestimonialsSanity = {
  sectionTitle?: string;
  sectionDescription?: string;
  voiceList?: VoiceItem[];
};

type ProfileSanity = {
  sectionTitle?: string;
  sectionDescription?: string;
  role?: string;
  name?: string;
  imageUrl?: string;
  imageAlt?: string;
  beliefDescription?: string;
  highlight?: string;
  closingText?: string;
  history?: string[];
  credentials?: string[];
};

type PriceTrialTopRaw = { trialPrice?: string; detail1?: string; detail2?: string };
type ChiropracticTopRaw = { courses?: { _key?: string; name?: string; price?: string }[] };
type PersonalTopRaw = {
  intensivePlans?: { _key?: string; name?: string; price?: string }[];
  monthlyPlans?: { _key?: string; name?: string; price?: string }[];
};
type CoachingTopRaw = {
  singlePlans?: { _key?: string; badge?: string; price?: string }[];
  monthlyPlans?: { _key?: string; badge?: string; title?: string; price?: string }[];
};
type PricingDocRaw = {
  sectionTitle?: string;
  sectionDescription?: string;
  trialBadge?: string;
  trialTitle?: string;
  trialBenefits?: string[];
  pricingColumns?: { _key?: string; title?: string; items?: { _key?: string; label?: string; price?: string }[] }[];
  pricingNote?: string;
};
type CancelPolicyRaw = { intro?: string; sections?: { _key: string; title?: string; content?: string }[]; closing?: string };

type FAQItem = { _key: string; question?: string; answer?: string };
type FAQSanity = {
  sectionTitle?: string;
  sectionDescription?: string;
  items?: FAQItem[];
};

type AccessSanity = {
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

type CTASanity = {
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

type SiteSettingsSanity = {
  bookingUrl?: string;
};

// ─── Raw Sanity types (with image objects) ────────────────────────
type HeroRaw = Omit<HeroSanity, "imageUrl"> & { image?: SanityImageRef };
type ServiceRaw = Omit<ServiceItem, "imageUrl"> & { image?: SanityImageRef };
type ReasonRaw = Omit<ReasonItem, "imageUrl"> & { image?: SanityImageRef };
type VoiceRaw = Omit<VoiceItem, "imageUrl"> & { image?: SanityImageRef };
type ProfileRaw = Omit<ProfileSanity, "imageUrl"> & { image?: SanityImageRef };
type ServicesRaw = Omit<ServicesSanity, "serviceList"> & { serviceList?: ServiceRaw[] };
type ReasonsRaw = Omit<ReasonsSanity, "reasonList"> & { reasonList?: ReasonRaw[] };
type TestimonialsRaw = Omit<TestimonialsSanity, "voiceList"> & { voiceList?: VoiceRaw[] };

function imgUrl(ref: SanityImageRef | undefined): string | undefined {
  if (!ref?.asset?._ref) return undefined;
  try {
    return urlForImage(ref);
  } catch {
    return undefined;
  }
}

export default async function Home() {
  const [
    heroRaw,
    servicesRaw,
    concernsData,
    reasonsRaw,
    testimonialsRaw,
    profileRaw,
    priceTrialTopRaw,
    chiropracticTopRaw,
    personalTopRaw,
    coachingTopRaw,
    pricingDocRaw,
    faqData,
    accessData,
    ctaData,
    siteSettingsData,
    cancelPolicyRaw,
  ] = await Promise.all([
    safeFetch<HeroRaw>(
      `*[_type == "hero"][0]{ ..., image{ asset{ _ref, _type } } }`
    ),
    safeFetch<ServicesRaw>(
      `*[_type == "services"][0]{ ..., serviceList[]{ ..., image{ asset{ _ref, _type } } } }`
    ),
    safeFetch<ConcernsSanity>(`*[_type == "concerns"][0]`),
    safeFetch<ReasonsRaw>(
      `*[_type == "reasons"][0]{ ..., reasonList[]{ ..., image{ asset{ _ref, _type } } } }`
    ),
    safeFetch<TestimonialsRaw>(
      `*[_type == "testimonials"][0]{ ..., voiceList[]{ ..., image{ asset{ _ref, _type } } } }`
    ),
    safeFetch<ProfileRaw>(
      `*[_type == "profile"][0]{ ..., image{ asset{ _ref, _type } } }`
    ),
    safeFetch<PriceTrialTopRaw>(`*[_type == "priceTrial"][0]{ trialPrice, detail1, detail2 }`),
    safeFetch<ChiropracticTopRaw>(`*[_type == "chiropracticPricing"][0]{ courses }`),
    safeFetch<PersonalTopRaw>(`*[_type == "personalPricing"][0]{ "intensivePlans": intensivePlans[]{ _key, name, price }, "monthlyPlans": monthlyPlans[]{ _key, name, price } }`),
    safeFetch<CoachingTopRaw>(`*[_type == "coachingPricing"][0]{ "singlePlans": singlePlans[]{ _key, badge, price }, "monthlyPlans": monthlyPlans[]{ _key, badge, title, price } }`),
    safeFetch<PricingDocRaw>(`*[_type == "pricing"][0]{ sectionTitle, sectionDescription, trialBadge, trialTitle, trialBenefits, pricingColumns, pricingNote }`),
    safeFetch<FAQSanity>(`*[_type == "faqSection"][0]`),
    safeFetch<AccessSanity>(`*[_type == "access"][0]`),
    safeFetch<CTASanity>(`*[_type == "cta"][0]`),
    safeFetch<SiteSettingsSanity>(`*[_type == "siteSettings"][0]{ bookingUrl }`),
    safeFetch<CancelPolicyRaw>(`*[_type == "cancelPolicy"][0]`),
  ]);

  // Transform: resolve image URLs
  const heroData: HeroSanity | null = heroRaw
    ? { ...heroRaw, imageUrl: imgUrl(heroRaw.image) }
    : null;

  const servicesData: ServicesSanity | null = servicesRaw
    ? {
        ...servicesRaw,
        serviceList: servicesRaw.serviceList?.map((s) => ({
          ...s,
          imageUrl: imgUrl(s.image),
        })),
      }
    : null;

  const reasonsData: ReasonsSanity | null = reasonsRaw
    ? {
        ...reasonsRaw,
        reasonList: reasonsRaw.reasonList?.map((r) => ({
          ...r,
          imageUrl: imgUrl(r.image),
        })),
      }
    : null;

  const testimonialsData: TestimonialsSanity | null = testimonialsRaw
    ? {
        ...testimonialsRaw,
        voiceList: testimonialsRaw.voiceList?.map((v) => ({
          ...v,
          imageUrl: imgUrl(v.image),
        })),
      }
    : null;

  const profileData: ProfileSanity | null = profileRaw
    ? { ...profileRaw, imageUrl: imgUrl(profileRaw.image) }
    : null;

  // Build fallback pricing columns from individual specialized schemas
  const seitaiItems = (chiropracticTopRaw?.courses ?? []).map((c, i) => ({
    _key: c._key ?? `s${i}`,
    label: c.name,
    price: c.price,
  }));
  const personalItems = [
    ...(personalTopRaw?.intensivePlans ?? []).map((p, i) => ({ _key: p._key ?? `pi${i}`, label: p.name, price: p.price })),
    ...(personalTopRaw?.monthlyPlans ?? []).map((p, i) => ({ _key: p._key ?? `pm${i}`, label: p.name, price: p.price })),
  ];
  const coachingItems = [
    ...(coachingTopRaw?.singlePlans ?? []).map((p, i) => ({ _key: p._key ?? `cs${i}`, label: `${p.badge ?? ""} 60分`, price: p.price })),
    ...(coachingTopRaw?.monthlyPlans ?? []).map((p, i) => ({ _key: p._key ?? `cm${i}`, label: `${p.title ?? ""} ${p.badge ?? ""}`, price: p.price })),
  ];
  const hasSpecializedData = seitaiItems.length + personalItems.length + coachingItems.length > 0;
  const fallbackColumns = hasSpecializedData ? [
    { _key: "seitai", title: "整体コース", items: seitaiItems },
    { _key: "personal", title: "パーソナルトレーニング", items: personalItems },
    { _key: "coaching", title: "コーチング", items: coachingItems },
  ] : null;

  // pricing Sanity document takes priority for title/columns/note
  const pricingData = {
    sectionTitle: pricingDocRaw?.sectionTitle ?? undefined,
    sectionDescription: pricingDocRaw?.sectionDescription ?? undefined,
    trialBadge: pricingDocRaw?.trialBadge ?? undefined,
    trialTitle: pricingDocRaw?.trialTitle ?? undefined,
    trialBenefits: pricingDocRaw?.trialBenefits ?? undefined,
    pricingNote: pricingDocRaw?.pricingNote ?? undefined,
    trialPrice: priceTrialTopRaw?.trialPrice,
    trialDetails: priceTrialTopRaw?.detail1 && priceTrialTopRaw?.detail2
      ? `${priceTrialTopRaw.detail1} + ${priceTrialTopRaw.detail2}`
      : undefined,
    // pricing.pricingColumns が設定済みの場合はそちらを優先。未設定時は個別スキーマから組み立て
    pricingColumns: (pricingDocRaw?.pricingColumns && pricingDocRaw.pricingColumns.length > 0)
      ? pricingDocRaw.pricingColumns
      : fallbackColumns,
  };

  const phone = accessData?.phone ?? undefined;

  return (
    <>
      <Hero data={heroData} phone={phone} bookingUrl={siteSettingsData?.bookingUrl} />
      <Services data={servicesData} />
      <Concerns data={concernsData} />
      <Reasons data={reasonsData} />
      <Testimonials data={testimonialsData} />
      <Profile data={profileData} />
      <Pricing data={pricingData} cancelPolicy={cancelPolicyRaw} bookingUrl={siteSettingsData?.bookingUrl} />
      <FAQ data={faqData} />
      <Access data={accessData} />
      <CTA data={ctaData} phone={phone} bookingUrl={siteSettingsData?.bookingUrl} />
    </>
  );
}
