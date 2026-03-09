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
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/icon-exercise.png" alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
    ),
    title: "運動習慣の定着",
    thoughtBefore: "「運動は苦手」",
    thoughtAfter: "「5分だけならできる」",
    action: "毎朝5分のストレッチ",
    habit: "3ヶ月後、週3回のジム通い",
  },
  {
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/icon-food.png" alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
    ),
    title: "食習慣の改善",
    thoughtBefore: "「ダイエットは続かない」",
    thoughtAfter: "「野菜を1品増やすだけ」",
    action: "毎食サラダを追加",
    habit: "半年後、自然に健康的な食事",
  },
  {
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/icon-sleep.png" alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
    ),
    title: "睡眠習慣の改善",
    thoughtBefore: "「夜更かしが当たり前」",
    thoughtAfter: "「23時にベッドに入る」",
    action: "就寝1時間前にスマホOFF",
    habit: "2ヶ月後、自然に早寝早起き",
  },
];

export default function CoachingMethod() {
  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <FadeIn>
          <div className="mb-10 text-center">
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

        {/* 3ステップ */}
        <div className="mb-20 grid gap-0 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((step, i) => (
            <>
              <FadeIn key={step.number} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-serif text-lg font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="mb-4 font-serif text-xl font-bold text-[#1f2937]">{step.title}</h3>
                  <p className="text-[14px] leading-8 text-gray-600 md:text-[15px]">{step.description}</p>
                </div>
              </FadeIn>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="hidden items-center justify-center px-3 md:flex">
                  <span className="text-2xl font-light text-green-500">→</span>
                </div>
              )}
            </>
          ))}
        </div>

        {/* 成功事例 */}
        <FadeIn delay={80}>
          <h3 className="mb-8 text-center font-serif text-2xl font-bold text-[#1f2937] md:text-[32px]">
            思考・行動・習慣が変わった実際の変化
          </h3>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {successCases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f3ec]">
                  {c.icon}
                </span>
                <h4 className="mb-4 font-bold text-[#1f2937]">{c.title}</h4>
                <div className="space-y-1 text-[14px] leading-7 text-gray-700 md:text-[15px]">
                  <p><span className="font-semibold">思考：</span>{c.thoughtBefore}</p>
                  <p className="pl-2 text-gray-400">↓</p>
                  <p>{c.thoughtAfter}</p>
                  <p className="pt-2"><span className="font-semibold">行動：</span>{c.action}</p>
                  <p><span className="font-semibold">習慣：</span>{c.habit}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
