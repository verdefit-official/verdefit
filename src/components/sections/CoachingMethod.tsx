import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "思考の書き換え",
    description:
      "「私は運動が続かない」という思い込みを、「私は少しずつ変われる」に書き換えます。コーチとの対話を通じて、潜在意識レベルで自己イメージを更新します。",
  },
  {
    number: "02",
    title: "小さな行動設計",
    description:
      "いきなり毎日1時間運動ではなく、「毎朝コップ1杯の水を飲む」など、必ず達成できる小さな行動から始めます。成功体験の積み重ねが、自信に変わります。",
  },
  {
    number: "03",
    title: "習慣の定着",
    description:
      "小さな行動を21日〜66日継続することで、脳が新しいパターンとして認識。意識せずとも自然と続く「習慣」として定着します。",
  },
];

const successCases = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-green-700" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "運動習慣の定着",
    thought: "「運動は苦手」→「5分だけならできる」",
    action: "毎朝5分のストレッチ",
    habit: "3ヶ月後、週3回のジム通い",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-green-700" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" />
      </svg>
    ),
    title: "食習慣の改善",
    thought: "「ダイエットは続かない」→「野菜を1品増やすだけ」",
    action: "毎食サラダを追加",
    habit: "半年後、自然に健康的な食事",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-green-700" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
    title: "睡眠習慣の改善",
    thought: "「夜更かしが当たり前」→「23時にベッドに入る」",
    action: "就寝1時間前にスマホOFF",
    habit: "2ヶ月後、自然に早寝早起き",
  },
];

export default function CoachingMethod() {
  return (
    <>
      {/* メソッドセクション */}
      <section className="bg-[#e8f3ec] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-14 text-center">
              <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
                潜在意識から変える<br />
                「思考の書き換え」メソッド
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
                一生モノの習慣を身につける、科学的アプローチ
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <p className="mb-10 text-center text-[15px] font-medium text-gray-700 md:text-[16px]">
              VERDE FITのコーチングでは、思考→行動→習慣のプロセスを科学的に設計します。
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 100}>
                <div className="relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  {i < steps.length - 1 && (
                    <span className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-green-400 md:block" aria-hidden="true">→</span>
                  )}
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-serif text-lg font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="mb-3 font-serif text-xl font-bold text-[#1f2937]">{step.title}</h3>
                  <p className="text-[14px] leading-8 text-gray-600 md:text-[15px]">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 成功事例セクション */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-14 text-center">
              <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
                思考・行動・習慣が変わった実際の変化
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
                具体的な成功事例（横手市・秋田のお客様）
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {successCases.map((c, i) => (
              <FadeIn key={c.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f3ec]">
                    {c.icon}
                  </span>
                  <h3 className="mb-5 font-serif text-lg font-bold text-[#1f2937]">{c.title}</h3>
                  <div className="space-y-3 text-[14px] text-gray-700 md:text-[15px]">
                    <p><span className="font-semibold text-gray-500">思考：</span>{c.thought}</p>
                    <p><span className="font-semibold text-green-700">行動：</span>{c.action}</p>
                    <p><span className="font-semibold text-green-700">習慣：</span>{c.habit}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
