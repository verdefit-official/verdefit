import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type SanityImageRef = { asset: { _ref: string; _type: string }; hotspot?: unknown };
function imgUrl(ref: SanityImageRef | undefined | null): string {
  if (!ref?.asset?._ref) return "";
  try { return urlForImage(ref); } catch { return ""; }
}

// ─── generateMetadata ─────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const seo = await safeFetch<{
    pageTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  }>(`*[_type == "voiceSeo"][0]{ pageTitle, metaDescription, keywords, ogTitle, ogDescription }`);

  const title = seo?.pageTitle ?? "横手市で選ばれる整体・パーソナルジム・コーチング｜VERDE FITのお客様の声";
  const description =
    seo?.metaDescription ??
    "横手市の整体・パーソナルジムVERDE FITをご利用いただいたお客様の体験談をご紹介。肩こりや腰痛の改善、ダイエット成功など実際の変化をご覧いただけます。横手市で整体やパーソナルジムをお探しの方はぜひ参考にしてください。";

  return {
    title,
    description,
    keywords: seo?.keywords ?? ["横手市 整体 口コミ", "横手市 パーソナルジム 口コミ", "横手市 整体 評判", "横手市 ダイエット 成功事例", "横手市 パーソナルトレーニング 体験談"],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      locale: "ja_JP",
      type: "website",
    },
  };
}

// ─── Icons ────────────────────────────────────────────────────────

function PersonIcon({ className = "h-8 w-8 text-green-600" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-yellow-400"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────

type VoiceHeroData = {
  heading?: string | null;
  description?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

function VoiceHero({
  data,
  bookingUrl,
  lineUrl,
}: {
  data?: VoiceHeroData | null;
  bookingUrl?: string;
  lineUrl?: string;
}) {
  const heading = data?.heading ?? "なりたい理想の自分になれた方の\nリアルな体験談";
  const description = data?.description ?? "VERDE FITで身体と習慣を整え、理想の自分になれたお客様のリアルな声をご紹介します。";
  const primaryButtonText = data?.primaryButtonText ?? "予約はこちら";
  const secondaryButtonText = data?.secondaryButtonText ?? "LINEで相談する";

  return (
    <section className="bg-[#e8f3ec] pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl font-bold leading-[1.45] text-[#1f2937] sm:text-4xl md:text-[46px]">
            <ResponsiveTitle>{heading}</ResponsiveTitle>
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mx-auto mt-6 text-[15px] leading-8 text-gray-600">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={280}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-green-600 px-10 text-base font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto"
            >
              {primaryButtonText}
            </a>
            <a
              href={lineUrl ?? "#cta"}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-green-600 bg-transparent px-10 text-base font-semibold text-green-700 transition-colors hover:bg-green-50 sm:w-auto"
            >
              {secondaryButtonText}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Concerns ─────────────────────────────────────────────────────

function SeitaiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-white" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 14.5 4 9a8 8 0 0 1 16 0c0 5.5-8 12-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-white" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h2m8 0h2M4 12h2m12 0h2M6 8v8m4-10v12m4-12v12m2-8v8" />
    </svg>
  );
}

function CoachingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-white" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 0 1 4 12.8V17H8v-2.2A7 7 0 0 1 12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </svg>
  );
}

type VoiceConcernsData = {
  heading?: string | null;
  concerns?: string[] | null;
  subText?: string | null;
  bottomText?: string | null;
};

function VoiceConcerns({ data }: { data?: VoiceConcernsData | null }) {
  const heading = data?.heading ?? "その身体のお悩み、放置していませんか？";
  const defaultConcerns = ["肩こりや腰痛", "運動不足", "ダイエット失敗", "体型の悩み", "自信の低下"];
  const concerns = data?.concerns && data.concerns.length > 0 ? data.concerns : defaultConcerns;
  const subText = data?.subText ?? "その悩みを、3つのアプローチで解決しています。";
  const bottomText = data?.bottomText ?? "ここでは実際に変化を実感されたお客様の声をご紹介します。";

  const approaches = [
    { label: "整体", img: "/icon-seitai.png" },
    { label: "トレーニング", img: "/icon-training.png" },
    { label: "コーチング", img: "/icon-coaching.png" },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            {heading}
          </h2>
        </FadeIn>

        {/* タグ */}
        <FadeIn delay={100}>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {concerns.map((c, i) => (
              <span
                key={i}
                className="w-36 text-center rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-600"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* サブテキスト */}
        <FadeIn delay={180}>
          <p className="mb-8 text-center text-sm text-gray-500 md:text-base">
            {subText}
          </p>
        </FadeIn>

        {/* アイコン */}
        <FadeIn delay={260}>
          <div className="flex justify-center gap-10 sm:gap-16">
            {approaches.map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <img src={a.img} alt={a.label} className="h-20 w-20" />
                <p className="text-sm font-semibold text-green-600">{a.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 下部テキスト */}
        <FadeIn delay={340}>
          <p className="mt-10 text-center text-sm text-gray-500 md:text-base">
            {bottomText}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Category Nav ─────────────────────────────────────────────────

function SeitaiCardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-16 w-16 text-green-300" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 14.5 4 9a8 8 0 0 1 16 0c0 5.5-8 12-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
    </svg>
  );
}

function TrainingCardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-16 w-16 text-green-300" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5h1v11h-1zM16.5 6.5h1v11h-1zM7.5 12H16.5M4 9.5h2.5M17.5 9.5H20M4 14.5h2.5M17.5 14.5H20" />
    </svg>
  );
}

function CoachingCardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-16 w-16 text-green-300" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 0 1 4 12.8V17H8v-2.2A7 7 0 0 1 12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v1a3 3 0 0 0 6 0v-1" />
      <line x1="12" y1="22" x2="12" y2="22" />
    </svg>
  );
}

type CategoryNavItem = {
  label?: string | null;
  desc?: string | null;
  btnLabel?: string | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoiceCategoryNavData = {
  sectionTitle?: string | null;
  items?: CategoryNavItem[] | null;
};

function VoiceCategoryNav({ data }: { data?: VoiceCategoryNavData | null }) {
  const sectionTitle = data?.sectionTitle ?? "あなたと同じ悩みの体験談を探す";

  const staticImgs = [
    { src: "/voice-cat-seitai.jpg", alt: "横手市の整体施術の様子・VERDE FITのお客様の声" },
    { src: "/voice-cat-personal.jpg", alt: "横手市パーソナルジムVERDE FITのトレーニング風景" },
    { src: "/voice-cat-coaching.jpg", alt: "横手市VERDE FITのコーチングセッションの様子" },
  ];

  const defaultCats = [
    {
      href: "/voice/seitai",
      label: "整体のお客様の声",
      desc: "肩こり・腰痛・姿勢の乱れなど、慢性的な身体の不調を改善されたお客様の体験談をご紹介します。痛みの原因を根本から整えることで、日常生活が楽になったリアルな声をご覧ください。",
      btnLabel: "整体の声を見る",
      img: staticImgs[0],
    },
    {
      href: "/voice/personal-training",
      label: "パーソナルジムのお客様の声",
      desc: "ダイエット成功・筋力向上・体型改善など、トレーニングによって理想の身体を手に入れたお客様の体験談をご紹介します。無理のない習慣づくりで変化を実感されたリアルな声をご覧ください。",
      btnLabel: "ジムの声を見る",
      img: staticImgs[1],
    },
    {
      href: "/voice/coaching",
      label: "コーチングのお客様の声",
      desc: "思考の変化・習慣改善・人生の前向きな変化など、コーチングを通して内面から変わったお客様の体験談をご紹介します。行動が続くようになったリアルな変化の声をご覧ください。",
      btnLabel: "コーチングの声を見る",
      img: staticImgs[2],
    },
  ];

  const staticHrefs = ["/voice/seitai", "/voice/personal-training", "/voice/coaching"];

  const cats =
    data?.items && data.items.length > 0
      ? data.items.map((item, i) => ({
          href: staticHrefs[i] ?? "#",
          label: item.label ?? defaultCats[i]?.label ?? "",
          desc: item.desc ?? defaultCats[i]?.desc ?? "",
          btnLabel: item.btnLabel ?? defaultCats[i]?.btnLabel ?? "",
          img: { src: imgUrl(item.image) || staticImgs[i]?.src || "", alt: item.imageAlt || staticImgs[i]?.alt || "" },
        }))
      : defaultCats;

  return (
    <section className="bg-[#e8f3ec] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            {sectionTitle}
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {cats.map((c, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                {/* 上部：カテゴリ画像 */}
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={c.img.src} alt={c.img.alt} className="h-full w-full object-cover" />
                </div>
                {/* 下部：テキスト＋ボタン */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <p className="mb-3 text-lg font-bold leading-snug text-[#1f2937]">{c.label}</p>
                  <p className="flex-1 text-sm leading-7 text-gray-600">{c.desc}</p>
                  <a
                    href={c.href}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-green-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                  >
                    {c.btnLabel}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Seitai Section ───────────────────────────────────────────────

type VoiceSeitaiVoice = {
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
  linkText?: string | null;
  voices?: VoiceSeitaiVoice[] | null;
};

function VoiceSeitaiSection({ data }: { data?: VoiceSeitaiData | null }) {
  const sectionTitle = data?.sectionTitle ?? "整体で不調が改善したお客様の体験談";
  const linkText = data?.linkText ?? "整体の声を見る";
  const voices = data?.voices ?? [];

  return (
    <section id="seitai" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {voices.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                {/* 上部：お客様写真 */}
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={imgUrl(v.image) || ""}
                    alt={v.imageAlt || ""}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                {/* 下部：テキスト */}
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
                  <h3 className="mb-3 text-base font-bold leading-snug text-[#1f2937]">
                    {v.heading}
                  </h3>
                  <p className="flex-1 text-sm leading-7 text-gray-600">{v.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/voice/seitai"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              {linkText} <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Personal Section ─────────────────────────────────────────────

type VoicePersonalStat = {
  label?: string | null;
  value?: string | null;
};

type VoicePersonalCard = {
  smallTitle?: string | null;
  heading?: string | null;
  text?: string | null;
  stats?: VoicePersonalStat[] | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoicePersonalData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  linkText?: string | null;
  cards?: VoicePersonalCard[] | null;
};

function VoicePersonalSection({ data }: { data?: VoicePersonalData | null }) {
  const sectionTitle = data?.sectionTitle ?? "パーソナルトレーニングで\n身体が変わった体験談";
  const linkText = data?.linkText ?? "パーソナルの声を見る";
  const cards = data?.cards ?? [];

  return (
    <section id="personal" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                {/* 上部：ビフォーアフター画像 */}
                <div className="overflow-hidden" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={imgUrl(c.image) || ""}
                    alt={c.imageAlt || ""}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* 下部：テキスト */}
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="mb-1 text-xs text-gray-400">{c.smallTitle}</p>
                  <h3 className="mb-3 text-xl font-bold leading-snug text-[#1f2937]">{c.heading}</h3>
                  <p className="flex-1 text-sm leading-7 text-gray-600">{c.text}</p>
                  {/* 結果ボックス */}
                  <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3">
                    {(c.stats ?? []).map((s, j) => (
                      <p key={j} className="text-sm font-bold text-[#1f2937]">
                        {s.label}<span className="text-green-600">−{(s.value ?? "").replace("-", "")}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/voice/personal-training"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              {linkText} <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Coaching Section ─────────────────────────────────────────────

type VoiceCoachingVoice = {
  smallTitle?: string | null;
  heading?: string | null;
  text?: string | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoiceCoachingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  linkText?: string | null;
  voices?: VoiceCoachingVoice[] | null;
};

function VoiceCoachingSection({ data }: { data?: VoiceCoachingData | null }) {
  const sectionTitle = data?.sectionTitle ?? "コーチングを受けたお客様の声";
  const linkText = data?.linkText ?? "コーチングの声を見る";
  const voices = data?.voices ?? [];

  return (
    <section id="coaching" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {voices.map((v, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                {/* 上部：お客様写真 */}
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={imgUrl(v.image) || ""}
                    alt={v.imageAlt || ""}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                {/* 下部：テキスト */}
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="mb-2 text-xs text-gray-400">{v.smallTitle}</p>
                  <h3 className="mb-3 text-base font-bold leading-snug text-[#1f2937]">{v.heading}</h3>
                  <p className="flex-1 text-sm leading-7 text-gray-600">{v.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/voice/coaching"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              {linkText} <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Before/After Success ─────────────────────────────────────────

type VoiceBeforeAfterCase = {
  label?: string | null;
  result?: string | null;
  image?: SanityImageRef | null;
  imageAlt?: string | null;
};

type VoiceBeforeAfterData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  cases?: VoiceBeforeAfterCase[] | null;
};

function VoiceBeforeAfter({ data }: { data?: VoiceBeforeAfterData | null }) {
  const sectionTitle = data?.sectionTitle ?? "理想の身体を手に入れた成功事例";
  const sectionDescription = data?.sectionDescription ?? "VERDE FITで理想の身体を手に入れた方々の変化";

  const defaultCases: VoiceBeforeAfterCase[] = [
    { label: "横手市在住・30代女性", result: "−8kg達成" },
    { label: "横手市在住・40代男性", result: "−12kg達成" },
    { label: "横手市在住・50代女性", result: "−6kg達成" },
  ];

  const staticImgs = [
    { src: "/voice-beforeafter-01.jpg", alt: "横手市パーソナルジムVERDE FITで-8kg達成した30代女性のダイエット成功事例ビフォーアフター写真" },
    { src: "/voice-beforeafter-02.jpg", alt: "横手市VERDE FITのパーソナルトレーニングで-12kg達成した40代男性のボディメイク成功事例ビフォーアフター写真" },
    { src: "/voice-beforeafter-03.jpg", alt: "横手市パーソナルジムで50代女性が-6kg達成した体型改善の成功事例ビフォーアフター写真" },
  ];

  const cases =
    data?.cases && data.cases.length > 0 ? data.cases : defaultCases;

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mt-3 text-sm text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="overflow-hidden" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={imgUrl(c.image) || staticImgs[i]?.src || ""}
                    alt={c.imageAlt || staticImgs[i]?.alt || `Before After ${c.label ?? ""}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-5 py-4 text-center">
                  <p className="text-xs text-gray-500">{c.label}</p>
                  <p className="mt-1 font-serif text-2xl font-bold text-green-700">{c.result}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Google Reviews ───────────────────────────────────────────────

type VoiceGoogleReview = {
  name?: string | null;
  text?: string | null;
};

type VoiceGoogleReviewsData = {
  sectionTitle?: string | null;
  reviews?: VoiceGoogleReview[] | null;
};

function VoiceGoogleReviews({ data }: { data?: VoiceGoogleReviewsData | null }) {
  const sectionTitle = data?.sectionTitle ?? "Google口コミでも\n高評価をいただいています";

  const defaultReviews: VoiceGoogleReview[] = [
    {
      name: "横手市在住・Mさん",
      text: "丁寧なカウンセリングで、自分の身体の状態をしっかり理解できました。施術も的確で、長年の肩こりが改善しました。横手市でこんなに質の高い整体が受けられるとは思いませんでした。",
    },
    {
      name: "横手市在住・Tさん",
      text: "パーソナルトレーニングを受けて3ヶ月で-8kg達成。食事指導も無理のない内容で、今でもリバウンドしていません。横手市で本気でダイエットするならここがおすすめです。",
    },
    {
      name: "秋田市在住・Yさん",
      text: "コーチングで人生観が変わりました。思考の整理ができて、自信を持って行動できるようになりました。秋田からでも通う価値があります。",
    },
  ];

  const reviews =
    data?.reviews && data.reviews.length > 0 ? data.reviews : defaultReviews;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-6">
                <div className="mb-3 flex items-center gap-3">
                  <p className="text-sm font-bold text-[#1f2937]">{r.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-7 text-gray-600">{r.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Small CTA ────────────────────────────────────────────────────

type VoiceSmallCtaData = {
  heading?: string | null;
  subText?: string | null;
  bottomText?: string | null;
};

function VoiceSmallCTA({
  data,
  bookingUrl,
  lineUrl,
}: {
  data?: VoiceSmallCtaData | null;
  bookingUrl?: string;
  lineUrl?: string;
}) {
  const heading = data?.heading ?? "あなたも変化を体験しませんか？";
  const subText = data?.subText ?? "1人で悩まず、まずはお気軽にご相談ください";
  const bottomText = data?.bottomText ?? "それぞれのアプローチで、あなたの身体をサポートします。";

  const items = [
    { label: "整体", img: "/icon-seitai.png" },
    { label: "トレーニング", img: "/icon-training.png" },
    { label: "コーチング", img: "/icon-coaching.png" },
  ];

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
            <ResponsiveTitle>{heading}</ResponsiveTitle>
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            {subText}
          </p>

          <div className="mt-8 flex justify-center gap-6 sm:gap-10">
            {items.map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <img src={a.img} alt={a.label} className="h-20 w-20" />
                <p className="text-sm font-semibold text-green-600">{a.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-600 md:text-base">
            {bottomText}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function VoicePage() {
  type VoiceCtaData = {
    subheading?: string;
    heading?: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
  };

  const [
    heroData,
    concernsData,
    categoryNavData,
    seitaiData,
    personalData,
    coachingData,
    latestSeitaiVoices,
    latestPersonalCards,
    latestCoachingVoices,
    beforeAfterData,
    googleReviewsData,
    smallCtaData,
    ctaData,
    siteSettings,
  ] = await Promise.all([
    safeFetch<VoiceHeroData>(`*[_type == "voiceHero"][0]`),
    safeFetch<VoiceConcernsData>(`*[_type == "voiceConcerns"][0]`),
    safeFetch<VoiceCategoryNavData>(`*[_type == "voiceCategoryNav"][0]`),
    safeFetch<VoiceSeitaiData>(`*[_type == "voiceSeitai"][0]{ sectionTitle, sectionDescription, linkText }`),
    safeFetch<VoicePersonalData>(`*[_type == "voicePersonal"][0]{ sectionTitle, sectionDescription, linkText }`),
    safeFetch<VoiceCoachingData>(`*[_type == "voiceCoaching"][0]{ sectionTitle, sectionDescription, linkText }`),
    safeFetch<VoiceSeitaiVoice[]>(
      `*[_type == "seitaiTestimonial"] | order(publishedAt desc) [0..2]{ smallTitle, tags, heading, text, image, imageAlt }`
    ),
    safeFetch<VoicePersonalCard[]>(
      `*[_type == "personalTestimonial"] | order(publishedAt desc) [0..2]{ smallTitle, heading, text, stats, image, imageAlt }`
    ),
    safeFetch<VoiceCoachingVoice[]>(
      `*[_type == "coachingTestimonial"] | order(publishedAt desc) [0..2]{ smallTitle, heading, text, image, imageAlt }`
    ),
    safeFetch<VoiceBeforeAfterData>(`*[_type == "voiceBeforeAfter"][0]`),
    safeFetch<VoiceGoogleReviewsData>(`*[_type == "voiceGoogleReviews"][0]`),
    safeFetch<VoiceSmallCtaData>(`*[_type == "voiceSmallCta"][0]`),
    safeFetch<VoiceCtaData>(`*[_type == "voiceCta"][0]`),
    safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
      `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
    ),
  ]);

  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  return (
    <>
      <VoiceHero data={heroData} bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <VoiceConcerns data={concernsData} />
      <VoiceCategoryNav data={categoryNavData} />
      <VoiceSeitaiSection data={{ ...seitaiData, voices: latestSeitaiVoices && latestSeitaiVoices.length > 0 ? latestSeitaiVoices : undefined }} />
      <VoicePersonalSection data={{ ...personalData, cards: latestPersonalCards && latestPersonalCards.length > 0 ? latestPersonalCards : undefined }} />
      <VoiceCoachingSection data={{ ...coachingData, voices: latestCoachingVoices && latestCoachingVoices.length > 0 ? latestCoachingVoices : undefined }} />
      <VoiceBeforeAfter data={beforeAfterData} />
      <VoiceGoogleReviews data={googleReviewsData} />
      <VoiceSmallCTA data={smallCtaData} bookingUrl={bookingUrl} lineUrl={lineUrl} />
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
