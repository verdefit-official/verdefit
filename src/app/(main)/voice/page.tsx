import type { Metadata } from "next";
import { safeFetch } from "@/sanity/client";
import FadeIn from "@/components/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "お客様の声｜横手市の整体・パーソナルジム VERDE FIT",
  description:
    "VERDE FITで整体・パーソナルトレーニング・コーチングを体験されたお客様のリアルな体験談をご紹介します。横手市で身体の悩みを解決したお客様の声をぜひご覧ください。",
};

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

function VoiceHero({ bookingUrl, lineUrl }: { bookingUrl?: string; lineUrl?: string }) {
  return (
    <section className="bg-[#e8f3ec] pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl font-bold leading-[1.45] text-[#1f2937] sm:text-4xl md:text-[46px]">
            なりたい理想の自分になれた方の<br />リアルな体験談
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mx-auto mt-6 text-[15px] leading-8 text-gray-600">
            VERDE FITで身体と習慣を整え、理想の自分になれたお客様のリアルな声をご紹介します。
          </p>
        </FadeIn>
        <FadeIn delay={280}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-green-600 px-10 text-base font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto"
            >
              予約はこちら
            </a>
            <a
              href={lineUrl ?? "#cta"}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-green-600 bg-transparent px-10 text-base font-semibold text-green-700 transition-colors hover:bg-green-50 sm:w-auto"
            >
              LINEで相談する
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

function VoiceConcerns() {
  const concerns = ["肩こりや腰痛", "運動不足", "ダイエット失敗", "体型の悩み", "自信の低下"];

  const approaches = [
    { label: "整体", Icon: SeitaiIcon },
    { label: "トレーニング", Icon: TrainingIcon },
    { label: "コーチング", Icon: CoachingIcon },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="mb-10 text-center font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
            その身体のお悩み、放置していませんか？
          </h2>
        </FadeIn>

        {/* タグ */}
        <FadeIn delay={100}>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {concerns.map((c, i) => (
              <span
                key={i}
                className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-600"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* サブテキスト */}
        <FadeIn delay={180}>
          <p className="mb-8 text-center text-sm text-gray-500 md:text-base">
            その悩みを、3つのアプローチで解決しています。
          </p>
        </FadeIn>

        {/* アイコン */}
        <FadeIn delay={260}>
          <div className="flex justify-center gap-10 sm:gap-16">
            {approaches.map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
                  <a.Icon />
                </span>
                <p className="text-sm font-semibold text-green-600">{a.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 下部テキスト */}
        <FadeIn delay={340}>
          <p className="mt-10 text-center text-sm text-gray-500 md:text-base">
            ここでは実際に変化を実感されたお客様の声をご紹介します。
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

function VoiceCategoryNav() {
  const cats = [
    {
      href: "/voice/seitai",
      label: "整体のお客様の声",
      desc: "肩こり・腰痛・姿勢の乱れなど、慢性的な身体の不調を改善されたお客様の体験談をご紹介します。痛みの原因を根本から整えることで、日常生活が楽になったリアルな声をご覧ください。",
      btnLabel: "整体の声を見る",
      Icon: SeitaiCardIcon,
    },
    {
      href: "/voice/personal-training",
      label: "パーソナルジムのお客様の声",
      desc: "ダイエット成功・筋力向上・体型改善など、トレーニングによって理想の身体を手に入れたお客様の体験談をご紹介します。無理のない習慣づくりで変化を実感されたリアルな声をご覧ください。",
      btnLabel: "ジムの声を見る",
      Icon: TrainingCardIcon,
    },
    {
      href: "/voice/coaching",
      label: "コーチングのお客様の声",
      desc: "思考の変化・習慣改善・人生の前向きな変化など、コーチングを通して内面から変わったお客様の体験談をご紹介します。行動が続くようになったリアルな変化の声をご覧ください。",
      btnLabel: "コーチングの声を見る",
      Icon: CoachingCardIcon,
    },
  ];

  return (
    <section className="bg-[#e8f3ec] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="mb-10 text-center font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
            あなたと同じ悩みの体験談を探す
          </h2>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-3">
          {cats.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                {/* 上部：グレー背景＋アイコン（画像差し替え予定） */}
                <div className="flex items-center justify-center bg-gray-100" style={{ aspectRatio: "4/3" }}>
                  <c.Icon />
                </div>
                {/* 下部：テキスト＋ボタン */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <p className="mb-3 text-lg font-bold leading-snug text-[#1f2937]">{c.label}</p>
                  <p className="flex-1 text-sm leading-7 text-gray-600">{c.desc}</p>
                  <a
                    href={c.href}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-green-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-green-600"
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

function VoiceSeitaiSection() {
  const voices = [
    {
      smallTitle: "長年の肩こりが楽になりました",
      tags: ["肩こり", "姿勢"],
      heading: "デスクワークで慢性的な肩こりと姿勢の悪さに悩んでいました",
      text: "デスクワークが多く、常に肩こりに悩まされていました。整体で身体の状態を見てもらい、姿勢や身体の使い方を整えてもらったことで肩の重さが軽くなりました。今では仕事終わりの疲れも以前ほど感じなくなり、身体がとても楽になりました。",
    },
    {
      smallTitle: "猫背が改善して姿勢が良くなりました",
      tags: ["肩こり", "姿勢"],
      heading: "長年気になっていた姿勢の悪さが改善しました",
      text: "以前から猫背が気になっていましたが、整体で身体のバランスを整えてもらい姿勢が変わってきました。周りからも姿勢が良くなったと言われるようになり、肩や背中の負担も減りました。今では以前より身体が軽く感じます。",
    },
    {
      smallTitle: "10年悩んだ腰痛が改善しました",
      tags: ["腰痛", "骨盤矯正"],
      heading: "長年の腰痛で日常生活にも不安がありました",
      text: "長年腰痛に悩んでおり、整形外科にも通っていましたがなかなか改善しませんでした。こちらの整体で身体の状態や原因を丁寧に説明してもらい、施術を受けるうちに徐々に痛みが軽くなりました。今では日常生活でも腰を気にすることが減り、安心して過ごせています。",
    },
  ];

  return (
    <section id="seitai" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
            整体で不調が改善したお客様の体験談
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {voices.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                {/* 上部：グレー背景＋人物アイコン（写真差し替え予定） */}
                <div
                  className="flex items-center justify-center bg-gray-100"
                  style={{ aspectRatio: "4/3" }}
                >
                  <PersonIcon className="h-20 w-20 text-green-300" />
                </div>
                {/* 下部：テキスト */}
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="mb-2 text-xs text-gray-400">{v.smallTitle}</p>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {v.tags.map((tag, j) => (
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
              href="/seitai"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-500 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              整体の詳細ページを見る
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Personal Section ─────────────────────────────────────────────

function VoicePersonalSection() {
  const cards = [
    {
      label: "3ヶ月で-8kg減量",
      result: "−8kg達成",
      fat: "体脂肪 −6%",
      demographics: "女性（30代）",
      text: "今まで諦めていたダイエットが、正しいトレーニングと食事管理で無理なく達成できました。身体が変わっただけでなく、自分に自信が持てるようになりました。",
    },
    {
      label: "健康的な身体の改善",
      result: "−12kg達成",
      fat: "体脂肪 −8%",
      demographics: "男性（40代）",
      text: "仕事が忙しく運動できずにいましたが、パーソナルトレーニングで短時間でも効果的なトレーニングができるようになりました。12kgの減量に成功し、今では体が楽になりました。",
    },
    {
      label: "仕事が忙しくても継続できた",
      result: "−14kg達成",
      fat: "体脂肪 −8%",
      demographics: "女性（50代）",
      text: "今まで何度も運動しようとしてもすぐに諦めていましたが、パーソナルトレーニングでは自分のペースで続けることができました。結果として14kg・体脂肪8%を落とし、身体だけでなく考え方まで前向きに変わりました。",
    },
  ];

  return (
    <section id="personal" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              パーソナルトレーニングで身体が変わった体験談
            </h2>
            <p className="mt-4 text-sm text-gray-500 md:text-base">
              ビフォーアフターの結果をご紹介します
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm">
                <div
                  className="flex w-full flex-col items-center justify-center gap-2 bg-gray-100"
                  style={{ aspectRatio: "4/3" }}
                >
                  <PersonIcon className="h-16 w-16 text-gray-300" />
                  <p className="text-xs text-gray-400">Before / After</p>
                </div>
                <div className="flex flex-1 flex-col px-6 py-5">
                  <p className="text-xs font-semibold text-green-700">{c.label}</p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <p className="font-serif text-3xl font-bold text-green-700">{c.result}</p>
                    <p className="text-sm font-semibold text-gray-500">{c.fat}</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{c.demographics}</p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">{c.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/voice/personal-training"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-green-700 px-8 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-white"
            >
              パーソナルトレーニングのお客様の声をもっと見る <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Coaching Section ─────────────────────────────────────────────

function VoiceCoachingSection() {
  const voices = [
    {
      title: "今まで気づかなかったことに気づくようになりました",
      demographics: "女性（30代）",
      text: "自分の気持ちをうまく整理することができず、やりたいことを諦めてしまうことが多かったのですが、コーチングでは自分の思いを理解しながら行動に移すことができるようになりました。今では自分自身の変化が楽しみになっています。",
    },
    {
      title: "自分らしく行動することができるようになりました",
      demographics: "女性（40代）",
      text: "今まで自分のやりたいことを後回しにしていましたが、コーチングで本当にやりたいことに向かって気持ちを整理することができました。今では自分らしく行動できるようになり、毎日が充実しています。",
    },
    {
      title: "変化を楽しむことに気がつきました",
      demographics: "女性（40代）",
      text: "目標に向かって努力しているのになかなか変わらないことに悩んでいましたが、コーチングで自分の思考パターンを理解することで少しずつ変化を実感できるようになりました。今ではやりたいことを楽しみながら実現できています。",
    },
  ];

  return (
    <section id="coaching" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              コーチングを受けたお客様の声
            </h2>
            <p className="mt-4 text-sm text-gray-500 md:text-base">
              思考と習慣が変わったお客様の体験談
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {voices.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-4 bg-green-600 px-6 py-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                    <PersonIcon className="h-6 w-6 text-green-600" />
                  </span>
                  <div>
                    <p className="text-xs text-green-100">コーチング</p>
                    <p className="text-sm font-semibold text-white">{v.demographics}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-6 py-5">
                  <p className="mb-3 font-bold text-[#1f2937]">{v.title}</p>
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
              className="inline-flex items-center gap-2 rounded-lg border-2 border-green-700 px-8 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
            >
              コーチングのお客様の声をもっと見る <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Before/After Success ─────────────────────────────────────────

function VoiceBeforeAfter() {
  const cases = [
    { label: "女性（30代）", result: "−8kg達成", fat: "体脂肪 −6%" },
    { label: "男性（40代）", result: "−12kg達成", fat: "体脂肪 −8%" },
    { label: "女性（50代）", result: "−6kg達成", fat: "体脂肪 −5%" },
  ];

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              理想の身体を手に入れた成功事例
            </h2>
            <p className="mt-3 text-sm text-gray-500 md:text-base">Before / After</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div
                  className="flex w-full flex-col items-center justify-center gap-2 bg-gray-100"
                  style={{ aspectRatio: "3/4" }}
                >
                  <PersonIcon className="h-16 w-16 text-gray-300" />
                  <p className="text-xs text-gray-400">Before / After</p>
                </div>
                <div className="px-5 py-4 text-center">
                  <p className="text-xs text-gray-400">{c.label}</p>
                  <p className="font-serif text-3xl font-bold text-green-700">{c.result}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-500">{c.fat}</p>
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

function VoiceGoogleReviews() {
  const reviews = [
    {
      name: "M.U様",
      demographics: "女性",
      text: "丁寧な施術と分かりやすい説明で、通うたびに身体が軽くなるのを実感しています。長年悩んでいた肩こりが改善され、毎日の生活が楽になりました。スタッフの方も親切で安心して通えています。",
    },
    {
      name: "T.U様",
      demographics: "女性",
      text: "パーソナルトレーニングで3ヶ月で8kgを落とすことができました。食事制限もきつくなく、無理のないペースで続けることができました。今では運動が楽しくなり、ここに来るのが毎回楽しみです。",
    },
    {
      name: "横田様",
      demographics: "男性",
      text: "コーチングを受けて、仕事でもプライベートでも自分らしく行動できるようになりました。自分が変わっていく実感があり、目標に向かって毎日を過ごせるようになっています。",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              Googleロコミでも高評価をいただいています
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f3ec]">
                    <PersonIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1f2937]">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.demographics}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-7 text-gray-600">{r.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Small CTA ────────────────────────────────────────────────────

function VoiceSmallCTA({ bookingUrl, lineUrl }: { bookingUrl?: string; lineUrl?: string }) {
  const items = [
    { label: "整体" },
    { label: "パーソナル" },
    { label: "コーチング" },
  ];

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
            あなたも変化を体験しませんか？
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            1名でも多くの方に、まずはご相談ください
          </p>

          <div className="mt-8 flex justify-center gap-8">
            {items.map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <PersonIcon className="h-7 w-7 text-green-600" />
                </span>
                <p className="text-sm font-semibold text-[#1f2937]">{a.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex h-14 w-full items-center justify-center rounded-lg bg-green-700 px-10 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-800 sm:w-auto"
            >
              予約はこちら
            </a>
            <a
              href={lineUrl ?? "#cta"}
              className="inline-flex h-14 w-full items-center justify-center rounded-lg border-2 border-green-700 bg-white px-10 text-base font-semibold text-green-700 transition-colors hover:bg-green-50 sm:w-auto"
            >
              LINEで予約する
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function VoicePage() {
  const siteSettings = await safeFetch<{ bookingUrl?: string; lineUrl?: string }>(
    `*[_type == "siteSettings"][0]{ bookingUrl, lineUrl }`
  );

  const bookingUrl = siteSettings?.bookingUrl;
  const lineUrl = siteSettings?.lineUrl;

  return (
    <>
      <VoiceHero bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <VoiceConcerns />
      <VoiceCategoryNav />
      <VoiceSeitaiSection />
      <VoicePersonalSection />
      <VoiceCoachingSection />
      <VoiceBeforeAfter />
      <VoiceGoogleReviews />
      <VoiceSmallCTA bookingUrl={bookingUrl} lineUrl={lineUrl} />
      <CTA
        data={{
          heading: "VERDE FITで自分を変えたい方へ",
          description:
            "初回限定90分体験セッション実施中\n整体・パーソナルトレーニング・コーチングで、あなたの理想の身体と健康習慣を実現します。\nまずは初回体験で、その違いを実感してください。",
          primaryButtonText: "無料体験はこちら",
          secondaryButtonText: "LINEで予約する",
        }}
        bookingUrl={bookingUrl}
        lineUrl={lineUrl}
        subheading="初回限定90分体験セッション実施中"
        plain
      />
    </>
  );
}
