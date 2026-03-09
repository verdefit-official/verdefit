import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    name: "M.Kさん",
    demographics: "30代女性・横手市在住",
    before: "ダイエットが続かず自信喪失",
    after: "3ヶ月で運動習慣が定着",
    text: "何度もダイエットに失敗していましたが、コーチングで「なぜ続かないのか」の本質が分かりました。横手市で地域に寄り添ったサポートが受けられるのも魅力でした。",
  },
  {
    name: "T.Sさん",
    demographics: "40代男性・秋田市在住",
    before: "仕事のストレスで不規則な生活",
    after: "2ヶ月で睡眠・食事が改善",
    text: "忙しくて健康を後回しにしていましたが、小さな行動から始めるアプローチで無理なく習慣が変わりました。秋田でオンラインにも対応していて助かりました。",
  },
  {
    name: "Y.Nさん",
    demographics: "50代女性・横手市在住",
    before: "更年期で体調不良が続く",
    after: "4ヶ月で心身ともに安定",
    text: "年齢のせいだと諦めていましたが、思考を変えることで行動が変わり、体調が改善しました。横手市で親身になってくれるコーチに出会えて感謝しています。",
  },
];

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-10 w-10 text-white" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function CoachingTestimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              習慣が変わったお客様の声
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              横手市・秋田エリアで思考と習慣が変わった体験談
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                {/* ヘッダー */}
                <div className="flex items-center gap-4 bg-green-700 px-6 py-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600">
                    <PersonIcon />
                  </span>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-green-100">{t.demographics}</p>
                  </div>
                </div>

                {/* BEFORE / AFTER */}
                <div className="border-b border-gray-100 px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">
                      <span className="mr-2 inline-block rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">BEFORE</span>
                      {t.before}
                    </p>
                    <p className="text-sm">
                      <span className="mr-2 inline-block rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">AFTER</span>
                      {t.after}
                    </p>
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex flex-1 items-start px-6 py-5">
                  <p className="text-[14px] leading-8 text-gray-600 md:text-[15px]">{t.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
