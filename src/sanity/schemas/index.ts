import { cancelPolicySchema } from "./cancelPolicy";
import { siteSettingsSchema } from "./siteSettings";
import { topPageSeoSchema } from "./topPageSeo";
import { heroSchema } from "./hero";
import { servicesSchema } from "./services";
import { concernsSchema } from "./concerns";
import { reasonsSchema } from "./reasons";
import { testimonialsSchema } from "./testimonials";
import { profileSchema } from "./profile";
import { pricingSchema } from "./pricing";
import { faqSchema } from "./faq";
import { accessSchema } from "./access";
import { ctaSchema } from "./cta";
import { chiropracticSeoSchema } from "./chiropracticSeo";
import { chiropracticHeroSchema } from "./chiropracticHero";
import { chiropracticConcernsSchema } from "./chiropracticConcerns";
import { chiropracticDisordersSchema } from "./chiropracticDisorders";
import { chiropracticReasonsSchema } from "./chiropracticReasons";
import { chiropracticProfileSchema } from "./chiropracticProfile";
import { chiropracticPricingSchema } from "./chiropracticPricing";
import { chiropracticFaqSchema } from "./chiropracticFaq";
import { chiropracticCtaSchema } from "./chiropracticCta";
import { personalSeoSchema } from "./personalSeo";
import { personalHeroSchema } from "./personalHero";
import { personalConcernsSchema } from "./personalConcerns";
import { personalReasonsSchema } from "./personalReasons";
import { personalComparisonSchema } from "./personalComparison";
import { personalBeforeAfterSchema } from "./personalBeforeAfter";
import { personalTrainerSchema } from "./personalTrainer";
import { personalPricingSchema } from "./personalPricing";
import { personalFlowSchema } from "./personalFlow";
import { personalFaqSchema } from "./personalFaq";
import { personalCtaSchema } from "./personalCta";
// COACHING PAGE SCHEMAS
import { coachingSeoSchema } from "./coachingSeo";
import { coachingHeroSchema } from "./coachingHero";
import { coachingWhyFailSchema } from "./coachingWhyFail";
import { coachingMethodSchema } from "./coachingMethod";
import { coachingFeaturesSchema } from "./coachingFeatures";
import { coachingTestimonialsSchema } from "./coachingTestimonials";
import { coachingPricingSchema } from "./coachingPricing";
import { coachingFaqSchema } from "./coachingFaq";
import { coachingCtaSchema } from "./coachingCta";
import { priceSeoSchema } from "./priceSeo";
// PRICE PAGE SCHEMAS
import { priceHeroSchema } from "./priceHero";
import { priceTrialSchema } from "./priceTrial";
import { pricePremiumSchema } from "./pricePremium";
import { priceCtaSchema } from "./priceCta";
// VOICE PAGE SCHEMAS
import { voiceSeoSchema } from "./voiceSeo";
import { voiceHeroSchema } from "./voiceHero";
import { voiceConcernsSchema } from "./voiceConcerns";
import { voiceCategoryNavSchema } from "./voiceCategoryNav";
import { voiceSeitaiSchema } from "./voiceSeitai";
import { voicePersonalSchema } from "./voicePersonal";
import { voiceCoachingSchema } from "./voiceCoaching";
import { voiceBeforeAfterSchema } from "./voiceBeforeAfter";
import { voiceGoogleReviewsSchema } from "./voiceGoogleReviews";
import { voiceSmallCtaSchema } from "./voiceSmallCTA";
import { voiceCtaSchema } from "./voiceCta";
// VOICE TESTIMONIAL DOCUMENTS (individual entries)
import { seitaiTestimonialSchema } from "./seitaiTestimonial";
import { personalTestimonialSchema } from "./personalTestimonial";
import { coachingTestimonialSchema } from "./coachingTestimonial";
// BLOG
import { blogPostSchema } from "./blogPost";
import { blogSeoSchema } from "./blogSeo";
import { blogHeroSchema } from "./blogHero";
import { blogIntroSchema } from "./blogIntro";
import { blogCategoryNavSchema } from "./blogCategoryNav";
import { blogSeitaiSectionSchema } from "./blogSeitaiSection";
import { blogPersonalSectionSchema } from "./blogPersonalSection";
import { blogCoachingSectionSchema } from "./blogCoachingSection";
import { blogVoiceCtaSchema } from "./blogVoiceCta";
import { blogSupportSchema } from "./blogSupport";
import { blogCtaSchema } from "./blogCta";

export const schemaTypes = [
  cancelPolicySchema,
  siteSettingsSchema,
  topPageSeoSchema,
  heroSchema,
  servicesSchema,
  concernsSchema,
  reasonsSchema,
  testimonialsSchema,
  profileSchema,
  pricingSchema,
  faqSchema,
  accessSchema,
  ctaSchema,
  chiropracticSeoSchema,
  chiropracticHeroSchema,
  chiropracticConcernsSchema,
  chiropracticDisordersSchema,
  chiropracticReasonsSchema,
  chiropracticProfileSchema,
  chiropracticPricingSchema,
  chiropracticFaqSchema,
  chiropracticCtaSchema,
  personalSeoSchema,
  personalHeroSchema,
  personalConcernsSchema,
  personalReasonsSchema,
  personalComparisonSchema,
  personalBeforeAfterSchema,
  personalTrainerSchema,
  personalPricingSchema,
  personalFlowSchema,
  personalFaqSchema,
  personalCtaSchema,
  // COACHING
  coachingSeoSchema,
  coachingHeroSchema,
  coachingWhyFailSchema,
  coachingMethodSchema,
  coachingFeaturesSchema,
  coachingTestimonialsSchema,
  coachingPricingSchema,
  coachingFaqSchema,
  coachingCtaSchema,
  priceSeoSchema,
  // PRICE PAGE
  priceHeroSchema,
  priceTrialSchema,
  pricePremiumSchema,
  priceCtaSchema,
  // VOICE PAGE
  voiceSeoSchema,
  voiceHeroSchema,
  voiceConcernsSchema,
  voiceCategoryNavSchema,
  voiceSeitaiSchema,
  voicePersonalSchema,
  voiceCoachingSchema,
  voiceBeforeAfterSchema,
  voiceGoogleReviewsSchema,
  voiceSmallCtaSchema,
  voiceCtaSchema,
  // VOICE TESTIMONIAL DOCUMENTS
  seitaiTestimonialSchema,
  personalTestimonialSchema,
  coachingTestimonialSchema,
  // BLOG
  blogPostSchema,
  blogSeoSchema,
  blogHeroSchema,
  blogIntroSchema,
  blogCategoryNavSchema,
  blogSeitaiSectionSchema,
  blogPersonalSectionSchema,
  blogCoachingSectionSchema,
  blogVoiceCtaSchema,
  blogSupportSchema,
  blogCtaSchema,
];
