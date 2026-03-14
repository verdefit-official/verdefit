import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

const CATEGORY_LABELS: Record<string, string> = {
  seitai: "整体",
  "personal-training": "パーソナルトレーニング",
  coaching: "コーチング",
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PortableTextBlock = any;

type BlogPost = {
  _id: string;
  title?: string | null;
  slug?: { current?: string | null } | null;
  publishedAt?: string | null;
  category?: string | null;
  tags?: string[] | null;
  excerpt?: string | null;
  body?: PortableTextBlock[] | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string; _type: string }; alt?: string; caption?: string } }) => {
      const url = value.asset ? (() => { try { return urlForImage(value as SanityImageRef); } catch { return ""; } })() : "";
      if (!url) return null;
      return (
        <figure className="my-8">
          <img src={url} alt={value.alt ?? ""} className="w-full rounded-lg object-cover" />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-gray-400">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string; blank?: boolean } }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-green-700 underline hover:text-green-800"
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 mt-10 font-serif text-xl font-bold text-[#1f2937] md:text-2xl">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-3 mt-8 font-serif text-lg font-bold text-[#1f2937] md:text-xl">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-2 mt-6 font-bold text-[#1f2937]">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 leading-8 text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-5 ml-5 list-disc space-y-1 text-gray-700">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-5 ml-5 list-decimal space-y-1 text-gray-700">{children}</ol>
    ),
  },
};

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await safeFetch<BlogPost>(
    `*[_type == "blogPost" && slug.current == $slug && category == $category][0]{ title, excerpt, image, imageAlt }`,
    { slug, category }
  );
  if (!post) return {};
  const title = `${post.title ?? "記事"} | VERDE FIT ブログ`;
  const description = post.excerpt ?? "";
  const ogImage = imgUrl(post.image);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: "ja_JP",
      type: "article",
      images: ogImage ? [{ url: ogImage, alt: post.imageAlt ?? "" }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const [post, relatedPosts, siteSettings, ctaData] = await Promise.all([
    safeFetch<BlogPost>(
      `*[_type == "blogPost" && slug.current == $slug && category == $category][0]{ _id, title, slug, publishedAt, category, tags, excerpt, body, image, imageAlt }`,
      { slug, category }
    ),
    safeFetch<BlogPost[]>(
      `*[_type == "blogPost" && category == $category && slug.current != $slug] | order(publishedAt desc) [0..2]{ _id, title, slug, publishedAt, category, tags, excerpt, image, imageAlt }`,
      { category, slug }
    ),
    safeFetch<{ bookingUrl?: string; lineUrl?: string; blogDefaultImage?: { asset: { _ref: string; _type: string } } }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl, blogDefaultImage{ asset{ _ref, _type } } }`
    ),
    safeFetch<{ subheading?: string; heading?: string; description?: string; primaryButtonText?: string; secondaryButtonText?: string }>(
      `*[_type == "blogCta"][0]`
    ),
  ]);

  if (!post) notFound();

  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;
  const defaultThumb = imgUrl(siteSettings?.blogDefaultImage) || "/logo.svg";
  const catLabel = CATEGORY_LABELS[category] ?? category;
  const related = relatedPosts ?? [];

  return (
    <>
      {/* ─── Hero image ─── */}
      {imgUrl(post.image) && (
        <div className="h-56 w-full overflow-hidden bg-gray-200 md:h-72">
          <img
            src={imgUrl(post.image)}
            alt={post.imageAlt ?? post.title ?? ""}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* ─── Article header ─── */}
      <section className={`${imgUrl(post.image) ? "bg-white" : "bg-[#e8f3ec] pt-28 md:pt-32"} pb-6 pt-8`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <nav className="mb-4 text-center text-sm text-gray-500">
              <a href="/" className="hover:text-green-700">TOP</a>
              <span className="mx-2">/</span>
              <a href="/blog" className="hover:text-green-700">ブログ</a>
              <span className="mx-2">/</span>
              <a href={`/blog/${category}`} className="hover:text-green-700">{catLabel}</a>
              <span className="mx-2">/</span>
              <span className="text-gray-700 line-clamp-1">{post.title}</span>
            </nav>

            <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-green-700 px-3 py-0.5 text-xs font-semibold text-white">
                {catLabel}
              </span>
              {(post.tags ?? []).map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-center font-serif text-2xl font-bold leading-snug text-[#1f2937] md:text-[34px]">
              {post.title}
            </h1>

            <p className="mt-3 text-center text-sm text-gray-400">{formatDate(post.publishedAt)}</p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Article body ─── */}
      <section className="bg-white pb-16 pt-6 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            {post.body && post.body.length > 0 ? (
              <div className="mx-auto max-w-none">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            ) : (
              <p className="text-center text-sm text-gray-400">本文を準備中です。</p>
            )}
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-12 border-t border-gray-100 pt-8 text-center">
              <a
                href={`/blog/${category}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-green-700 px-8 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                ← {catLabel}の記事一覧へ
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 関連記事 ─── */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-14 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="mb-8 text-center font-serif text-xl font-bold text-[#1f2937] md:text-2xl">
                関連記事
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rp, i) => {
                const rSlug = rp.slug?.current;
                const href = rSlug ? `/blog/${category}/${rSlug}` : "#";
                return (
                  <FadeIn key={rp._id} delay={i * 80}>
                    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                      <a href={href} className="block overflow-hidden" style={{ aspectRatio: "16/9" }}>
                        <img
                          src={imgUrl(rp.image) || defaultThumb}
                          alt={rp.imageAlt ?? rp.title ?? ""}
                          className="h-full w-full object-cover"
                        />
                      </a>
                      <div className="flex flex-1 flex-col px-4 py-4">
                        <a href={href}>
                          <h3 className="mb-2 text-sm font-bold leading-snug text-[#1f2937] hover:text-green-700">
                            {rp.title}
                          </h3>
                        </a>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {rp.publishedAt ? new Date(rp.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".") : ""}
                          </span>
                          <a href={href} className="text-xs font-semibold text-green-700 hover:underline">続きを読む →</a>
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
