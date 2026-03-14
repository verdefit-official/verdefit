import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import Pagination from "@/components/Pagination";
import CTA from "@/components/sections/CTA";

const PER_PAGE = 10;

const CATEGORY_META: Record<
  string,
  { label: string; title: string; description: string; heading: string; subheading: string }
> = {
  seitai: {
    label: "整体",
    title: "整体ブログ｜横手市VERDE FIT",
    description:
      "横手市の整体師が肩こり・腰痛・姿勢改善に役立つ情報を発信しています。セルフケアや整体の効果について詳しく解説します。",
    heading: "整体師が解説する身体改善ブログ",
    subheading: "〜肩こり・腰痛・姿勢改善のヒント〜",
  },
  "personal-training": {
    label: "パーソナルトレーニング",
    title: "パーソナルトレーニングブログ｜横手市VERDE FIT",
    description:
      "横手市のパーソナルトレーナーがダイエット・筋トレ・食事管理に役立つ情報を発信しています。",
    heading: "パーソナルトレーナーが解説する\nトレーニングブログ",
    subheading: "",
  },
  coaching: {
    label: "コーチング",
    title: "コーチングブログ｜横手市VERDE FIT",
    description:
      "横手市のコーチングの専門家が思考・習慣・目標達成に役立つ情報を発信しています。",
    heading: "思考と習慣を変えるコーチングブログ",
    subheading: "",
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

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;

  const meta = CATEGORY_META[category];
  if (!meta) notFound();

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10));
  const offset = (currentPage - 1) * PER_PAGE;

  const [posts, total, siteSettings, ctaData] = await Promise.all([
    safeFetch<BlogPost[]>(
      `*[_type == "blogPost" && category == $category] | order(publishedAt desc) [$from..$to]{ _id, title, slug, publishedAt, category, tags, excerpt, image, imageAlt }`,
      { category, from: offset, to: offset + PER_PAGE - 1 }
    ),
    safeFetch<number>(
      `count(*[_type == "blogPost" && category == $category])`,
      { category }
    ),
    safeFetch<{ bookingUrl?: string; lineUrl?: string; blogDefaultImage?: { asset: { _ref: string; _type: string } } }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl, blogDefaultImage{ asset{ _ref, _type } } }`
    ),
    safeFetch<{ subheading?: string; heading?: string; description?: string; primaryButtonText?: string; secondaryButtonText?: string }>(
      `*[_type == "blogCta"][0]`
    ),
  ]);

  const articles = posts ?? [];
  const totalPages = Math.ceil((total ?? 0) / PER_PAGE);
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;
  const defaultThumb = imgUrl(siteSettings?.blogDefaultImage) || "/logo.svg";

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[#e8f3ec] pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <FadeIn>
            <nav className="mb-4 text-sm text-gray-500">
              <a href="/" className="hover:text-green-700">TOP</a>
              <span className="mx-2">/</span>
              <a href="/blog" className="hover:text-green-700">ブログ</a>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{meta.label}</span>
            </nav>
            <h1 className="font-serif text-3xl font-bold leading-snug text-[#1f2937] md:text-[42px]">
              {meta.heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            {meta.subheading && (
              <p className="mt-2 text-sm text-gray-500">{meta.subheading}</p>
            )}
            <p className="mt-4 text-sm leading-8 text-gray-600">{meta.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Articles ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <p className="text-center text-gray-500">記事を準備中です。</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((post, i) => {
                const slug = post.slug?.current;
                const href = slug ? `/blog/${category}/${slug}` : "#";
                const thumb = imgUrl(post.image) || defaultThumb;
                return (
                  <FadeIn key={post._id} delay={Math.min(i, 5) * 80}>
                    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
                      <a href={href} className="block overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <img
                          src={thumb}
                          alt={post.imageAlt ?? post.title ?? ""}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </a>
                      <div className="flex flex-1 flex-col px-5 py-4">
                        <div className="mb-2 flex flex-wrap gap-1.5">
                          {(post.tags ?? []).map((tag, j) => (
                            <span
                              key={j}
                              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a href={href}>
                          <h2 className="mb-2 text-sm font-bold leading-snug text-[#1f2937] hover:text-green-700 md:text-base">
                            {post.title}
                          </h2>
                        </a>
                        {post.excerpt && (
                          <p className="flex-1 text-xs leading-6 text-gray-500 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
                          <a href={href} className="text-xs font-semibold text-green-700 hover:underline">
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

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/blog/${category}`}
          />

          <FadeIn delay={200}>
            <div className="mt-10 text-center">
              <a
                href="/blog"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-green-700 px-8 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                ← ブログトップへ戻る
              </a>
            </div>
          </FadeIn>
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
