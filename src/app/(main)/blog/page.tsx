import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";

type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };
function imgUrl(ref: SanityImageRef | undefined | null): string {
  if (!ref?.asset?._ref) return "";
  try {
    return urlForImage(ref);
  } catch {
    return "";
  }
}

// ─── generateMetadata ────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const seo = await safeFetch<{
    pageTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  }>(`*[_type == "blogSeo"][0]{ pageTitle, metaDescription, keywords, ogTitle, ogDescription }`);

  const title = seo?.pageTitle ?? "横手市の整体・パーソナルジムの健康ブログ｜VERDE FIT公式ブログ";
  const description =
    seo?.metaDescription ??
    "横手市の整体・パーソナルジムVERDE FITの公式ブログ。腰痛・肩こり・姿勢改善など身体の不調改善や、ダイエット・トレーニング方法など健康づくりに役立つ情報を整体師・トレーナーが発信しています。";

  return {
    title,
    description,
    keywords: seo?.keywords ?? [
      "横手市 整体",
      "横手市 腰痛",
      "横手市 パーソナルトレーニング",
      "横手市 ダイエット",
      "横手市 コーチング",
      "横手市 健康ブログ",
    ],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      locale: "ja_JP",
      type: "website",
    },
  };
}

// ─── Types ───────────────────────────────────────────────────────

type BlogPost = {
  _id: string;
  title?: string | null;
  slug?: { current?: string | null } | null;
  publishedAt?: string | null;
  category?: string | null;
  tags?: string[] | null;
  excerpt?: string | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type BlogHeroData = {
  heading?: string | null;
  description?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

type BlogIntroData = {
  heading?: string | null;
  tags?: string[] | null;
  descriptions?: string | null;
  latestSectionTitle?: string | null;
};

type BlogCategorySectionData = {
  sectionTitle?: string | null;
  subheading?: string | null;
  linkText?: string | null;
};

type BlogVoiceCtaData = {
  heading?: string | null;
  description?: string | null;
  buttonText?: string | null;
};

type BlogSupportItem = {
  label?: string | null;
  desc?: string | null;
  buttonText?: string | null;
};

type BlogSupportData = {
  sectionTitle?: string | null;
  items?: BlogSupportItem[] | null;
};

type BlogCtaData = {
  subheading?: string | null;
  heading?: string | null;
  description?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

// ─── Helpers ─────────────────────────────────────────────────────

const CATEGORY_HREFS: Record<string, string> = {
  seitai: "/blog/seitai",
  "personal-training": "/blog/personal-training",
  coaching: "/blog/coaching",
};

const SUPPORT_ITEMS = [
  { href: "/seitai", icon: "/icon-seitai.png", alt: "整体アイコン", bg: "#87c192" },
  { href: "/personal-training", icon: "/icon-training.png", alt: "パーソナルトレーニングアイコン", bg: "#7dc191" },
  { href: "/coaching", icon: "/icon-coaching.png", alt: "コーチングアイコン", bg: "#7cbd8a" },
];

function categoryLabel(value: string | null | undefined): string {
  if (value === "seitai") return "整体";
  if (value === "personal-training") return "パーソナルトレーニング";
  if (value === "coaching") return "コーチング";
  return value ?? "";
}

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

// ─── Article Card ─────────────────────────────────────────────────

function ArticleCard({ post }: { post: BlogPost }) {
  const slug = post.slug?.current;
  const href = slug ? `/blog/${post.category}/${slug}` : "#";
  const thumb = imgUrl(post.image);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <a href={href} className="block overflow-hidden" style={{ aspectRatio: "3/2" }}>
        {thumb ? (
          <img
            src={thumb}
            alt={post.imageAlt ?? post.title ?? ""}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ background: "radial-gradient(ellipse at 75% 10%, #064a38 0%, #033226 50%, #011913 100%)" }}>
            <img src="/logo.svg" alt="" className="h-full w-full object-contain" />
          </div>
        )}
      </a>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
            {categoryLabel(post.category)}
          </span>
          {(post.tags ?? []).map((tag, i) => (
            <span key={i} className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              {tag}
            </span>
          ))}
        </div>
        <a href={href}>
          <h3 className="mb-3 text-base font-bold leading-snug text-[#1f2937] hover:text-green-700">
            {post.title}
          </h3>
        </a>
        {post.excerpt && (
          <p className="flex-1 text-sm leading-7 text-gray-500 line-clamp-4">{post.excerpt}</p>
        )}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span>{formatDate(post.publishedAt)}</span>
          <a href={href} className="font-bold text-green-700 hover:underline">
            続きを読む →
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function BlogPage() {
  const [
    heroData,
    introData,
    seitaiSectionData,
    personalSectionData,
    coachingSectionData,
    voiceCtaData,
    supportData,
    ctaData,
    latestPosts,
    siteSettings,
  ] = await Promise.all([
    safeFetch<BlogHeroData>(`*[_type == "blogHero"][0]`),
    safeFetch<BlogIntroData>(`*[_type == "blogIntro"][0]`),
    safeFetch<BlogCategorySectionData>(`*[_type == "blogSeitaiSection"][0]`),
    safeFetch<BlogCategorySectionData>(`*[_type == "blogPersonalSection"][0]`),
    safeFetch<BlogCategorySectionData>(`*[_type == "blogCoachingSection"][0]`),
    safeFetch<BlogVoiceCtaData>(`*[_type == "blogVoiceCta"][0]`),
    safeFetch<BlogSupportData>(`*[_type == "blogSupport"][0]`),
    safeFetch<BlogCtaData>(`*[_type == "blogCta"][0]`),
    safeFetch<BlogPost[]>(
      `*[_type == "blogPost"] | order(publishedAt desc) [0..8]{ _id, title, slug, publishedAt, category, tags, excerpt, image, imageAlt }`
    ),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const posts = latestPosts ?? [];
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  // ─── Hero defaults
  const heroHeading = heroData?.heading ?? "身体を変える知識を\n横手市から発信";
  const heroDescription = heroData?.description ?? "整体・パーソナルトレーニング・コーチングの専門家が、健康づくりに役立つ情報をお届けします。";
  const heroPrimaryBtn = heroData?.primaryButtonText ?? "無料体験";
  const heroSecondaryBtn = heroData?.secondaryButtonText ?? "LINE相談";

  // ─── Intro defaults
  const introHeading = introData?.heading ?? "身体の悩みを解決する健康ブログ";
  const introTags = introData?.tags ?? ["肩こり", "腰痛", "姿勢", "ダイエット", "運動不足"];
  const introDescriptionsRaw = introData?.descriptions ??
    "肩こり・腰痛・姿勢・ダイエット・習慣改善など、身体の悩みを解決するヒントをお届けします。\nVERDE FITでは、整体・パーソナルトレーニング・コーチングの3つの視点から身体改善をサポートしています。\nこのブログでは、横手市の皆様が健康的な身体づくりを続けられるよう、日常生活で役立つ知識やセルフケアの方法を発信しています。";
  const introDescriptions = introDescriptionsRaw.split("\n").filter(Boolean);
  const latestSectionTitle = introData?.latestSectionTitle ?? "最新記事";

  // ─── Category section defaults
  const CATEGORIES = [
    {
      value: "seitai",
      href: "/blog/seitai",
      heading: seitaiSectionData?.sectionTitle ?? "整体師が解説する身体改善ブログ",
      subheading: seitaiSectionData?.subheading ?? "〜肩こり・腰痛・姿勢改善のヒント〜",
      linkText: seitaiSectionData?.linkText ?? "整体の記事をもっと見る",
      bg: "bg-white",
      cols: 3,
    },
    {
      value: "personal-training",
      href: "/blog/personal-training",
      heading: personalSectionData?.sectionTitle ?? "パーソナルトレーナーが解説するトレーニングブログ",
      subheading: personalSectionData?.subheading ?? "",
      linkText: personalSectionData?.linkText ?? "パーソナルトレーニングの記事をもっと見る",
      bg: "bg-[#e8f3ec]",
      cols: 3,
    },
    {
      value: "coaching",
      href: "/blog/coaching",
      heading: coachingSectionData?.sectionTitle ?? "思考と習慣を変えるコーチングブログ",
      subheading: coachingSectionData?.subheading ?? "",
      linkText: coachingSectionData?.linkText ?? "コーチングの記事をもっと見る",
      bg: "bg-white",
      cols: 2,
    },
  ];

  // ─── Voice CTA defaults
  const voiceCtaHeading = voiceCtaData?.heading ?? "横手市で身体が変わったリアルな体験談";
  const voiceCtaDescription = voiceCtaData?.description ?? "VERDE FITで行っている整体・トレーニング・コーチングは、実際に多くのお客様が変化を実感している方法です。\n横手市で身体の悩みを改善された方々のリアルな体験談をご紹介します。";
  const voiceCtaButtonText = voiceCtaData?.buttonText ?? "お客様の声を見る";

  // ─── Support defaults
  const supportTitle = supportData?.sectionTitle ?? "VERDE FITの3つのサポート";
  const defaultSupportItems = [
    { label: "整体", desc: "国家資格保有者による根本改善の整体施術", buttonText: "詳しく見る" },
    { label: "パーソナルトレーニング", desc: "完全個別指導で理想の身体づくりを実現", buttonText: "詳しく見る" },
    { label: "コーチング", desc: "思考を変え、習慣をデザインする", buttonText: "詳しく見る" },
  ];
  const supportItems =
    supportData?.items && supportData.items.length > 0
      ? supportData.items
      : defaultSupportItems;

  // ─── Latest 3 posts
  const latestByCategory = ["seitai", "personal-training", "coaching"]
    .map((cat) => posts.find((p) => p.category === cat))
    .filter(Boolean) as BlogPost[];
  const latestThree = latestByCategory.length >= 3 ? latestByCategory.slice(0, 3) : posts.slice(0, 3);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[#e8f3ec] pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-3xl font-bold leading-snug text-[#1f2937] md:text-[42px]">
              {heroHeading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="mt-4 text-sm leading-8 text-gray-600 md:text-base">
              {heroDescription}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={bookingUrl ?? "#"}
                className="inline-flex h-12 w-48 items-center justify-center rounded-lg bg-green-700 text-sm font-semibold text-white transition-colors hover:bg-green-800"
              >
                {heroPrimaryBtn}
              </a>
              <a
                href={lineUrl ?? "#"}
                className="inline-flex h-12 w-48 items-center justify-center rounded-lg border-2 border-green-700 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                {heroSecondaryBtn}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ブログ紹介 ─── */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[38px]">
              {introHeading}
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {introTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex min-w-[80px] items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-700 sm:min-w-[96px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-center text-sm leading-8 text-gray-600">
              {introDescriptions.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 最新記事 ─── */}
      <section className="bg-[#e8f3ec] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[38px]">
              {latestSectionTitle}
            </h2>
          </FadeIn>
          {latestThree.length === 0 ? (
            <p className="text-center text-sm text-gray-500">記事を準備中です。</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {latestThree.map((post, i) => {
                const slug = post.slug?.current;
                const href = slug ? `/blog/${post.category}/${slug}` : "#";
                const thumb = imgUrl(post.image);
                return (
                  <FadeIn key={post._id} delay={i * 80}>
                    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                      <a href={href} className="block overflow-hidden" style={{ aspectRatio: "3/2" }}>
                        {thumb ? (
                          <img src={thumb} alt={post.imageAlt ?? post.title ?? ""} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center" style={{ background: "radial-gradient(ellipse at 75% 10%, #064a38 0%, #033226 50%, #011913 100%)" }}>
                            <img src="/logo.svg" alt="" className="h-full w-full object-contain" />
                          </div>
                        )}
                      </a>
                      <div className="flex flex-1 flex-col px-5 py-5">
                        <span className="inline-block self-start rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                          {categoryLabel(post.category)}
                        </span>
                        <a href={href}>
                          <h3 className="mt-3 text-base font-bold leading-snug text-[#1f2937] hover:text-green-700 md:text-lg">
                            {post.title}
                          </h3>
                        </a>
                        {post.excerpt && (
                          <p className="mt-3 flex-1 text-sm leading-7 text-gray-500 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
                          <a href={href} className="text-sm font-bold text-green-700 hover:underline">
                            続きを読む →
                          </a>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── カテゴリ別セクション ─── */}
      {CATEGORIES.map((cat) => {
        const categoryPosts = posts.filter((p) => p.category === cat.value).slice(0, cat.cols);
        return (
          <section key={cat.value} className={`${cat.bg} py-14 md:py-16`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <div className="mb-8 text-center">
                  <h2 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[38px]">
                    {cat.heading}
                  </h2>
                  {cat.subheading && (
                    <p className="mt-1 text-sm text-gray-500">{cat.subheading}</p>
                  )}
                </div>
              </FadeIn>
              {categoryPosts.length === 0 ? (
                <p className="text-center text-sm text-gray-400">記事を準備中です。</p>
              ) : (
                <div className={`grid gap-6 ${cat.cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {categoryPosts.map((post, i) => (
                    <FadeIn key={post._id} delay={i * 80}>
                      <ArticleCard post={post} />
                    </FadeIn>
                  ))}
                </div>
              )}
              <FadeIn delay={200}>
                <div className="mt-8 text-center">
                  <a
                    href={CATEGORY_HREFS[cat.value] ?? "#"}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-green-700 px-8 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
                  >
                    {cat.linkText} →
                  </a>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* ─── お客様の声 CTA ─── */}
      <section className="bg-[#e8f3ec] py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <div className="rounded-2xl bg-white px-8 py-12 text-center shadow-sm md:px-16 md:py-14">
              <h2 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[38px]">
                {voiceCtaHeading}
              </h2>
              <p className="mt-5 text-sm leading-8 text-gray-600">
                {voiceCtaDescription.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
              <a
                href="/voice"
                className="mt-8 inline-flex h-12 w-60 items-center justify-center rounded-lg bg-green-600 text-sm font-semibold text-white transition-colors hover:bg-green-700"
              >
                {voiceCtaButtonText} →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3つのサポート ─── */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[38px]">
              {supportTitle}
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {supportItems.map((item, i) => {
              const staticItem = SUPPORT_ITEMS[i];
              return (
                <FadeIn key={i} delay={i * 80}>
                  <div className="flex h-full flex-col overflow-hidden rounded-xl bg-[#e8f3ec] shadow-sm">
                    <div className="flex items-center justify-center py-10" style={{ backgroundColor: staticItem?.bg }}>
                      <img src={staticItem?.icon} alt={staticItem?.alt} className="h-24 w-24 object-contain" />
                    </div>
                    <div className="flex flex-1 flex-col px-6 pb-8 text-center">
                      <p className="text-lg font-bold text-[#1f2937]">{item.label}</p>
                      <p className="mt-2 flex-1 text-sm text-gray-600">{item.desc}</p>
                      <a
                        href={staticItem?.href}
                        className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-green-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                      >
                        {item.buttonText ?? "詳しく見る"}
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTA
        data={{
          heading: ctaData?.heading ?? "VERDE FITで自分を変えたい方へ",
          description:
            ctaData?.description ??
            "まずはお気軽にご相談ください。\nあなたの目標達成までの道のりを、一緒に考えましょう。",
          primaryButtonText: ctaData?.primaryButtonText ?? "無料体験を予約する",
          secondaryButtonText: ctaData?.secondaryButtonText ?? "LINEで相談する",
        }}
        bookingUrl={bookingUrl}
        lineUrl={lineUrl}
        subheading={ctaData?.subheading ?? "初回限定60分体験セッション実施中"}
      />
    </>
  );
}
