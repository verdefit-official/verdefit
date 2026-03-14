import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "横手市の整体・パーソナルジムの健康ブログ｜VERDE FIT公式ブログ",
  description:
    "横手市の整体・パーソナルジムVERDE FITの公式ブログ。腰痛・肩こり・姿勢改善など身体の不調改善や、ダイエット・トレーニング方法など健康づくりに役立つ情報を整体師・トレーナーが発信しています。",
  keywords: [
    "横手市 整体",
    "横手市 腰痛",
    "横手市 パーソナルトレーニング",
    "横手市 ダイエット",
    "横手市 コーチング",
    "横手市 健康ブログ",
  ],
  openGraph: {
    title: "横手市の整体・パーソナルジムの健康ブログ｜VERDE FIT公式ブログ",
    description:
      "横手市の整体・パーソナルジムVERDE FITの公式ブログ。腰痛・肩こり・姿勢改善など身体の不調改善や、ダイエット・トレーニング方法など健康づくりに役立つ情報を整体師・トレーナーが発信しています。",
    locale: "ja_JP",
    type: "website",
  },
};

type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };
function imgUrl(ref: SanityImageRef | undefined | null): string {
  if (!ref?.asset?._ref) return "";
  try {
    return urlForImage(ref);
  } catch {
    return "";
  }
}

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

const CATEGORIES = [
  {
    value: "seitai",
    label: "整体",
    href: "/blog/seitai",
    heading: "整体師が解説する身体改善ブログ",
    subheading: "〜肩こり・腰痛・姿勢改善のヒント〜",
  },
  {
    value: "personal-training",
    label: "パーソナルトレーニング",
    href: "/blog/personal-training",
    heading: "パーソナルトレーナーが解説するトレーニングブログ",
    subheading: "",
  },
  {
    value: "coaching",
    label: "コーチング",
    href: "/blog/coaching",
    heading: "思考と習慣を変えるコーチングブログ",
    subheading: "",
  },
] as const;

function categoryLabel(value: string | null | undefined): string {
  const cat = CATEGORIES.find((c) => c.value === value);
  return cat?.label ?? value ?? "";
}

function categoryColor(value: string | null | undefined): string {
  if (value === "seitai") return "bg-green-700";
  if (value === "personal-training") return "bg-blue-600";
  if (value === "coaching") return "bg-amber-600";
  return "bg-gray-500";
}

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

function ArticleCard({ post }: { post: BlogPost }) {
  const slug = post.slug?.current;
  const href = slug ? `/blog/${post.category}/${slug}` : "#";
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
      <a href={href} className="block overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {imgUrl(post.image) ? (
          <img
            src={imgUrl(post.image)}
            alt={post.imageAlt ?? post.title ?? ""}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </a>
      <div className="flex flex-1 flex-col px-5 py-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white ${categoryColor(post.category)}`}
          >
            {categoryLabel(post.category)}
          </span>
          {(post.tags ?? []).slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={href}>
          <h3 className="mb-2 text-sm font-bold leading-snug text-[#1f2937] hover:text-green-700 md:text-base">
            {post.title}
          </h3>
        </a>
        {post.excerpt && (
          <p className="flex-1 text-xs leading-6 text-gray-500 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
          <a
            href={href}
            className="text-xs font-semibold text-green-700 hover:underline"
          >
            続きを読む →
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function BlogPage() {
  const [latestPosts, siteSettings, ctaData] = await Promise.all([
    safeFetch<BlogPost[]>(
      `*[_type == "blogPost"] | order(publishedAt desc) [0..8]{ _id, title, slug, publishedAt, category, tags, excerpt, image, imageAlt }`
    ),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
    safeFetch<{ heading?: string; description?: string; primaryButtonText?: string; secondaryButtonText?: string }>(
      `*[_type == "cta"][0]`
    ),
  ]);

  const posts = latestPosts ?? [];
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  // Latest 3 articles (one per category where possible)
  const latestByCategory = CATEGORIES.map((cat) =>
    posts.find((p) => p.category === cat.value)
  ).filter(Boolean) as BlogPost[];
  // Fill remaining from overall latest if needed
  const latestThree =
    latestByCategory.length >= 3
      ? latestByCategory.slice(0, 3)
      : posts.slice(0, 3);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[#e8f3ec] pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-3xl font-bold leading-snug text-[#1f2937] md:text-[42px]">
              身体を変える知識を
              <br />
              横手市から発信
            </h1>
            <p className="mt-4 text-sm leading-8 text-gray-600 md:text-base">
              整体・パーソナルトレーニング・コーチングの専門家が、健康づくりに役立つ情報をお届けします。
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={bookingUrl ?? "#"}
                className="inline-flex h-12 w-48 items-center justify-center rounded-lg bg-green-700 text-sm font-semibold text-white transition-colors hover:bg-green-800"
              >
                無料体験
              </a>
              <a
                href={lineUrl ?? "#"}
                className="inline-flex h-12 w-48 items-center justify-center rounded-lg border-2 border-green-700 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                LINE相談
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Blog intro ─── */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-serif text-2xl font-bold text-[#1f2937] md:text-[32px]">
              身体の悩みを解決する健康ブログ
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["肩こり", "腰痛", "姿勢", "ダイエット", "運動不足"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex min-w-[80px] items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-700 sm:min-w-[96px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-center text-sm leading-8 text-gray-600">
              <p>肩こり・腰痛・姿勢・ダイエット・習慣改善など、身体の悩みを解決するヒントをお届けします。</p>
              <p>VERDE FITでは、整体・パーソナルトレーニング・コーチングの3つの視点から身体改善をサポートしています。</p>
              <p>このブログでは、横手市の皆様が健康的な身体づくりを続けられるよう、日常生活で役立つ知識やセルフケアの方法を発信しています。</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 最新記事 ─── */}
      {latestThree.length > 0 && (
        <section className="bg-[#e8f3ec] py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="mb-10 text-center font-serif text-2xl font-bold text-[#1f2937] md:text-[32px]">
                最新記事
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {latestThree.map((post, i) => {
                const slug = post.slug?.current;
                const href = slug ? `/blog/${post.category}/${slug}` : "#";
                return (
                  <FadeIn key={post._id} delay={i * 80}>
                    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                      <a href={href} className="block overflow-hidden" style={{ aspectRatio: "3/2" }}>
                        {imgUrl(post.image) ? (
                          <img
                            src={imgUrl(post.image)}
                            alt={post.imageAlt ?? post.title ?? ""}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </a>
                      <div className="flex flex-1 flex-col px-5 py-5">
                        <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold text-white ${categoryColor(post.category)}`}>
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
          </div>
        </section>
      )}

      {/* ─── カテゴリ別セクション ─── */}
      {CATEGORIES.map((cat, ci) => {
        const categoryPosts = posts.filter((p) => p.category === cat.value).slice(0, 3);
        return (
          <section key={cat.value} className={ci % 2 === 0 ? "bg-white py-14 md:py-16" : "bg-gray-50 py-14 md:py-16"}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <div className="mb-8 text-center">
                  <h2 className="font-serif text-2xl font-bold text-[#1f2937] md:text-[28px]">
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
                <div className="grid gap-6 md:grid-cols-3">
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
                    href={cat.href}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-green-700 px-8 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
                  >
                    {cat.label}の記事をもっと見る →
                  </a>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* ─── お客様の声 CTA ─── */}
      <section className="bg-[#e8f3ec] py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl font-bold text-[#1f2937] md:text-[28px]">
              横手市で身体が変わったリアルな体験談
            </h2>
            <p className="mt-4 text-sm leading-8 text-gray-600">
              VERDE FITで行っている整体・トレーニング・コーチングは、実際に多くのお客様が変化を実感している方法です。
              <br />
              横手市で身体の悩みを改善された方々のリアルな体験談をご紹介します。
            </p>
            <a
              href="/voice"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              お客様の声を見る
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3つのサポート ─── */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-8 text-center font-serif text-2xl font-bold text-[#1f2937] md:text-[28px]">
              VERDE FITの3つのサポート
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "整体", desc: "国家資格保有者による根本改善の整体施術", href: "/seitai" },
              { label: "パーソナルトレーニング", desc: "完全個別指導で理想の身体づくりを実現", href: "/personal-training" },
              { label: "コーチング", desc: "思考を変え、習慣をデザインする", href: "/coaching" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 80}>
                <div className="flex flex-col items-center rounded-xl bg-[#e8f3ec] px-6 py-8 text-center">
                  <p className="mb-1 font-bold text-[#1f2937]">{item.label}</p>
                  <p className="mb-4 text-xs text-gray-600">{item.desc}</p>
                  <a
                    href={item.href}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-green-700 px-6 text-xs font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
                  >
                    詳しく見る
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTA
        data={{
          heading: ctaData?.heading ?? "横手市で本気で身体を変えたい方へ",
          description:
            ctaData?.description ??
            "「何から始めればいいのか分からない」\n「一人では続かない」\n\nそんな方のために、まずは現在のお身体の状態や目標を丁寧にお聞きします。\n整体・パーソナルトレーニング・コーチングの視点から、あなたに合った改善方法をご提案します。\n\nまずはお気軽にご相談ください。",
          primaryButtonText: ctaData?.primaryButtonText ?? "無料体験予約",
          secondaryButtonText: ctaData?.secondaryButtonText ?? "LINE相談",
        }}
        bookingUrl={bookingUrl}
        lineUrl={lineUrl}
      />
    </>
  );
}
