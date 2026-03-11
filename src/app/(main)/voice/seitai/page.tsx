import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";

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
  publishedAt?: string | null;
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

const defaultTestimonials: SeitaiTestimonial[] = [
  {
    _id: "default-1",
    smallTitle: "長年の肩こりが楽になりました",
    tags: ["肩こり", "姿勢"],
    heading: "デスクワークで慢性的な肩こりと姿勢の悪さに悩んでいました",
    text: "デスクワークが多く、常に肩こりに悩まされていました。整体で身体の状態を見てもらい、姿勢や身体の使い方を整えてもらったことで肩の重さが軽くなりました。今では仕事終わりの疲れも以前ほど感じなくなり、身体がとても楽になりました。",
  },
  {
    _id: "default-2",
    smallTitle: "猫背が改善して姿勢が良くなりました",
    tags: ["肩こり", "姿勢"],
    heading: "長年気になっていた姿勢の悪さが改善しました",
    text: "以前から猫背が気になっていましたが、整体で身体のバランスを整えてもらい姿勢が変わってきました。周りからも姿勢が良くなったと言われるようになり、肩や背中の負担も減りました。今では以前より身体が軽く感じます。",
  },
  {
    _id: "default-3",
    smallTitle: "10年悩んだ腰痛が改善しました",
    tags: ["腰痛", "骨盤矯正"],
    heading: "長年の腰痛で日常生活にも不安がありました",
    text: "長年腰痛に悩んでおり、整形外科にも通っていましたがなかなか改善しませんでした。こちらの整体で身体の状態や原因を丁寧に説明してもらい、施術を受けるうちに徐々に痛みが軽くなりました。今では日常生活でも腰を気にすることが減り、安心して過ごせています。",
  },
];

export default async function SeitaiVoicePage() {
  const [testimonials, seitaiData, ctaData, siteSettings] = await Promise.all([
    safeFetch<SeitaiTestimonial[]>(
      `*[_type == "seitaiTestimonial"] | order(publishedAt desc){ _id, smallTitle, tags, heading, text, image, imageAlt }`
    ),
    safeFetch<VoiceSeitaiData>(
      `*[_type == "voiceSeitai"][0]{ sectionTitle, sectionDescription }`
    ),
    safeFetch<VoiceCtaData>(`*[_type == "voiceCta"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const voices =
    testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const sectionTitle = seitaiData?.sectionTitle ?? "整体で不調が改善したお客様の体験談";
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  const staticImgs = [
    { src: "/voice-seitai-01.jpg", alt: "横手市整体VERDE FITで長年の肩こりが改善したお客様の写真" },
    { src: "/voice-seitai-02.jpg", alt: "横手市の整体で猫背・姿勢が改善したお客様の笑顔写真" },
    { src: "/voice-seitai-03.jpg", alt: "横手市VERDE FITの整体で10年来の腰痛が改善したお客様写真" },
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
            <p className="mt-4 text-sm leading-8 text-gray-600 md:text-base">
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
            <div className="grid gap-6 md:grid-cols-3">
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

          <FadeIn delay={200}>
            <div className="mt-12 text-center">
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
        subheading={ctaData?.subheading ?? "初回限定90分体験セッション実施中"}
      />
    </>
  );
}
