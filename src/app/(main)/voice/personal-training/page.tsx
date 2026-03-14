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
  title: "パーソナルトレーニングのお客様の声 | 横手市VERDE FIT",
  description: "横手市のパーソナルジムVERDE FITでダイエット成功・体型改善を実感されたお客様のリアルな体験談をすべてご紹介します。",
  openGraph: {
    title: "パーソナルトレーニングのお客様の声 | 横手市VERDE FIT",
    description: "横手市のパーソナルジムVERDE FITでダイエット成功・体型改善を実感されたお客様のリアルな体験談をすべてご紹介します。",
    locale: "ja_JP",
    type: "website",
  },
};

type PersonalStat = {
  label?: string | null;
  value?: string | null;
};

type PersonalTestimonial = {
  _id: string;
  smallTitle?: string | null;
  heading?: string | null;
  text?: string | null;
  stats?: PersonalStat[] | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoicePersonalData = {
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

export default async function PersonalTrainingVoicePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10));
  const offset = (currentPage - 1) * PER_PAGE;

  const [testimonials, total, personalData, ctaData, siteSettings] = await Promise.all([
    safeFetch<PersonalTestimonial[]>(
      `*[_type == "personalTestimonial"] | order(publishedAt desc) [${offset}..${offset + PER_PAGE - 1}]{ _id, smallTitle, heading, text, stats, image, imageAlt }`
    ),
    safeFetch<number>(`count(*[_type == "personalTestimonial"])`),
    safeFetch<VoicePersonalData>(
      `*[_type == "voicePersonal"][0]{ sectionTitle, sectionDescription }`
    ),
    safeFetch<VoiceCtaData>(`*[_type == "voiceCta"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const cards = testimonials ?? [];
  const totalPages = Math.ceil((total ?? 0) / PER_PAGE);
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  const staticImgs = [
    { src: "/voice-personal-01.jpg", alt: "横手市パーソナルジムVERDE FITで3ヶ月-8kg・ウエスト-10cmを達成した30代女性のビフォーアフター写真" },
    { src: "/voice-personal-02.jpg", alt: "横手市VERDE FITのパーソナルトレーニングで健康診断の数値が改善した40代男性の体型変化ビフォーアフター写真" },
    { src: "/voice-personal-03.jpg", alt: "横手市パーソナルジムで仕事しながら-14kg・体脂肪率-8%を達成した女性のダイエット成功ビフォーアフター写真" },
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
              <span className="text-gray-700">パーソナルトレーニング</span>
            </nav>
            <h1 className="font-serif text-3xl font-bold leading-snug text-[#1f2937] md:text-[42px]">
              パーソナルトレーニングで
              <br />
              身体が変わった体験談
            </h1>
            <p className="mt-4 text-sm leading-8 text-gray-600 md:text-base">
              {personalData?.sectionDescription ?? "ダイエット成功・筋力向上・体型改善など、トレーニングによって理想の身体を手に入れたお客様の体験談をすべてご紹介します。"}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Cards ─── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {cards.length === 0 ? (
            <p className="text-center text-gray-500">体験談を準備中です。</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {cards.map((c, i) => (
                <FadeIn key={c._id} delay={Math.min(i, 5) * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                    <div className="overflow-hidden" style={{ aspectRatio: "3/2" }}>
                      <img
                        src={imgUrl(c.image) || staticImgs[i % 3]?.src || ""}
                        alt={c.imageAlt || staticImgs[i % 3]?.alt || ""}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <p className="mb-1 text-xs text-gray-400">{c.smallTitle}</p>
                      <h2 className="mb-3 text-xl font-bold leading-snug text-[#1f2937]">{c.heading}</h2>
                      <p className="flex-1 text-sm leading-7 text-gray-600">{c.text}</p>
                      {c.stats && c.stats.length > 0 && (
                        <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3">
                          {c.stats.map((s, j) => (
                            <p key={j} className="text-sm font-bold text-[#1f2937]">
                              {s.label}
                              <span className="text-green-600">
                                {(s.value ?? "").startsWith("-")
                                  ? `−${(s.value ?? "").slice(1)}`
                                  : s.value}
                              </span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}

          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/voice/personal-training" />

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
