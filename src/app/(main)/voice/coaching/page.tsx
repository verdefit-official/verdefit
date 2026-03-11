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
  title: "コーチングのお客様の声 | 横手市VERDE FIT",
  description: "横手市VERDE FITのコーチングで思考・習慣・人生が変わったお客様のリアルな体験談をすべてご紹介します。",
  openGraph: {
    title: "コーチングのお客様の声 | 横手市VERDE FIT",
    description: "横手市VERDE FITのコーチングで思考・習慣・人生が変わったお客様のリアルな体験談をすべてご紹介します。",
    locale: "ja_JP",
    type: "website",
  },
};

type CoachingTestimonial = {
  _id: string;
  publishedAt?: string | null;
  smallTitle?: string | null;
  heading?: string | null;
  text?: string | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoiceCoachingData = {
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

const defaultTestimonials: CoachingTestimonial[] = [
  {
    _id: "default-1",
    smallTitle: "三日坊主だった私でも習慣が続くようになりました",
    heading: "これまで何を始めても続かないことが悩みでした",
    text: "これまで運動やダイエットを始めても、三日坊主で終わってしまうことが多く悩んでいました。コーチングでは考え方や行動の習慣を見直し、小さな行動から始める方法を教えてもらいました。無理なく続けることができ、今では運動や健康習慣が自然と生活の一部になっています。",
  },
  {
    _id: "default-2",
    smallTitle: "自分を変えるきっかけになりました",
    heading: "自分に自信が持てず、行動することが苦手でした",
    text: "これまで自分に自信が持てず、新しいことに挑戦するのが苦手でした。コーチングを通して自分の考え方の癖に気づき、少しずつ行動できるようになりました。小さな成功体験を積み重ねることで自信もつき、以前より前向きに物事に取り組めるようになりました。",
  },
  {
    _id: "default-3",
    smallTitle: "思考が変わると人生も変わりました",
    heading: "何となく毎日を過ごしていることに悩んでいました",
    text: "毎日を忙しく過ごしていましたが、どこか満足できない気持ちがありました。コーチングで自分の価値観や目標を整理することで、本当に大切にしたいことが明確になりました。今では目標に向かって行動できるようになり、以前より充実した毎日を過ごせています。",
  },
];

export default async function CoachingVoicePage() {
  const [testimonials, coachingData, ctaData, siteSettings] = await Promise.all([
    safeFetch<CoachingTestimonial[]>(
      `*[_type == "coachingTestimonial"] | order(publishedAt desc){ _id, smallTitle, heading, text, image, imageAlt }`
    ),
    safeFetch<VoiceCoachingData>(
      `*[_type == "voiceCoaching"][0]{ sectionTitle, sectionDescription }`
    ),
    safeFetch<VoiceCtaData>(`*[_type == "voiceCta"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const voices =
    testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const sectionTitle = coachingData?.sectionTitle ?? "コーチングを受けたお客様の声";
  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  const staticImgs = [
    { src: "/voice-coaching-01.jpg", alt: "横手市VERDE FITのコーチングで運動習慣が続くようになった女性のお客様写真" },
    { src: "/voice-coaching-02.jpg", alt: "横手市のコーチングで自信をつけ前向きに行動できるようになったお客様写真" },
    { src: "/voice-coaching-03.jpg", alt: "横手市VERDE FITのコーチングで思考と習慣が変わり充実した生活を送るお客様写真" },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[#e8f3ec] pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <nav className="mb-4 text-sm text-gray-500">
              <a href="/" className="hover:text-green-700">TOP</a>
              <span className="mx-2">/</span>
              <a href="/voice" className="hover:text-green-700">お客様の声</a>
              <span className="mx-2">/</span>
              <span className="text-gray-700">コーチング</span>
            </nav>
            <h1 className="font-serif text-3xl font-bold leading-snug text-[#1f2937] md:text-[42px]">
              {sectionTitle}
            </h1>
            <p className="mt-4 text-sm leading-8 text-gray-600 md:text-base">
              {coachingData?.sectionDescription ?? "思考の変化・習慣改善・人生の前向きな変化など、コーチングを通して内面から変わったお客様の体験談をすべてご紹介します。"}
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
