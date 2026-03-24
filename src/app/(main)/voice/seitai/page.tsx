import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";
import Pagination from "@/components/Pagination";

const PER_PAGE = 10;

type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };
function imgUrl(ref: SanityImageRef | undefined | null): string {
  if (!ref?.asset?._ref) return "";
  try { return urlForImage(ref); } catch { return ""; }
}

export const metadata: Metadata = {
  title: "整体のお客様の声 | 横手市VERDE FIT",
  description: "横手市の整体VERDE FITで肩こり・腰痛・姿勢改善を実感されたお客様のリアルな体験談をすべてご紹介します。",
  openGraph: {
    title: "整体のお客様の声 | 横手市VERDE FIT",
    description: "横手市の整体VERDE FITで肩こり・腰痛・姿勢改善を実感されたお客様のリアルな体験談をすべてご紹介します。",
    locale: "ja_JP",
    type: "website",
  },
};

type SeitaiTestimonial = {
  _id: string;
  smallTitle?: string | null;
  tags?: string[] | null;
  heading?: string | null;
  text?: string | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoiceSeitaiData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
};

type VoiceCtaData = {
  subheading?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

export default async function SeitaiVoicePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10));
  const offset = (currentPage - 1) * PER_PAGE;

  const [testimonials, total, seitaiData, ctaData, siteSettings] = await Promise.all([
    safeFetch<SeitaiTestimonial[]>(
      `*[_type == "seitaiTestimonial"] | order(publishedAt desc) [${offset}..${offset + PER_PAGE - 1}]{ _id, smallTitle, tags, heading, text, image, imageAlt }`
    ),
    safeFetch<number>(`count(*[_type == "seitaiTestimonial"])`),
    safeFetch<VoiceSeitaiData>(
      `*[_type == "voiceSeitai"][0]{ sectionTitle, sectionDescription }`
    ),
    safeFetch<VoiceCtaData>(`*[_type == "voiceCta"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const voices = testimonials ?? [];
  const totalPages = Math.ceil((total ?? 0) / PER_PAGE);
  const sectionTitle = seitaiData?.sectionTitle ?? "整体で不調が改善したお客様の体験談";
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  const staticImgs = [
    { src: "/voice-seitai-01.png", alt: "横手市整体VERDE FITで長年の肩こりが改善したお客様の写真" },
    { src: "/voice-seitai-02.png", alt: "横手市の整体で猫背・姿勢が改善したお客様の笑顔写真" },
    { src: "/voice-seitai-03.png", alt: "横手市VERDE FITの整体で10年来の腰痛が改善したお客様写真" },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[#e8f3ec] pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <FadeIn>
            <nav className="mb-4 text-sm text-gray-500">
              <a href="/" className="hover:text-green-700">TOP</a>
              <span className="mx-2">/</span>
              <a href="/voice" className="hover:text-green-700">お客様の声</a>
              <span className="mx-2">/</span>
              <span className="text-gray-700">整体</span>
            </nav>
            <h1 className="font-serif text-3xl font-bold leading-snug text-[#1f2937] md:text-[42px]">
              {sectionTitle}
            </h1>
            <p className="mt-4 whitespace-pre-line text-sm leading-8 text-gray-600 md:text-base">
              {seitaiData?.sectionDescription ?? "肩こり・腰痛・姿勢の乱れなど、慢性的な身体の不調を改善されたお客様の体験談をすべてご紹介します。"}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Cards ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {voices.length === 0 ? (
            <p className="text-center text-gray-500">体験談を準備中です。</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {voices.map((v, i) => (
                <FadeIn key={v._id} delay={Math.min(i, 5) * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                    <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={imgUrl(v.image) || staticImgs[i % 3]?.src || ""}
                        alt={v.imageAlt || staticImgs[i % 3]?.alt || ""}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <p className="mb-2 text-xs text-gray-400">{v.smallTitle}</p>
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {(v.tags ?? []).map((tag, j) => (
                          <span
                            key={j}
                            className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="mb-3 text-base font-bold leading-snug text-[#1f2937]">
                        {v.heading}
                      </h2>
                      <p className="flex-1 text-sm leading-7 text-gray-600">{v.text}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}

          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/voice/seitai" />

          <FadeIn delay={200}>
            <div className="mt-10 text-center">
              <a
                href="/voice"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-green-700 px-8 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                ← お客様の声トップへ戻る
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
