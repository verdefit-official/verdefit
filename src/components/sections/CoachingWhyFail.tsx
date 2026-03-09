import FadeIn from "@/components/FadeIn";

const bullets = [
  "「今日は疲れたから明日にしよう」と先延ばしにしてしまう",
  "ダイエットを始めても、いつも三日坊主で終わる",
  "頭では分かっているのに、行動が変わらない",
  "一時的には頑張れるが、すぐに元の生活に戻ってしまう",
];

export default function CoachingWhyFail() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ① 続かない理由 */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              「意志が弱い」は間違い。<br />
              運動・ダイエットが続かない本当の理由
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              横手市・秋田で健康づくりや習慣改善に取り組む多くの方が、こんな経験をされています。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mx-auto w-fit rounded-2xl bg-[#e8f3ec] px-8 py-8 md:px-10">
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-[#1f2937] md:text-[16px]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-700" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* ② 根本原因 */}
        <FadeIn delay={120}>
          <div className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" className="h-5 w-5" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4M12 16h.01" />
                </svg>
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1f2937] md:text-[32px]">
                実は、これは意志の問題ではありません
              </h3>
            </div>

            <p className="text-[15px] leading-9 text-gray-700 md:text-[16px]">
              脳は「現状維持」を好む仕組みになっています。新しい行動を始めようとすると、脳が自動的にブレーキをかけ、元の習慣に戻そうとするのです。つまり、運動やダイエットが続かないのは、あなたの意志が弱いからではなく、脳の仕組みを理解せずに挑戦しているからなのです。
            </p>

            <div className="mt-8 rounded-xl border-2 border-green-700 bg-white px-8 py-6 text-center">
              <p className="text-[15px] font-bold leading-8 text-green-800 md:text-[16px]">
                VERDE FITのコーチングでは、横手市・秋田で習慣改善に悩む方々に、<br className="hidden md:block" />
                認知科学に基づいた「続く仕組み」をお伝えします。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
