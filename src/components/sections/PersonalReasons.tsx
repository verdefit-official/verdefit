import FadeIn from "@/components/FadeIn";

const reasons = [
  {
    key: "individual",
    number: "01",
    title: "完全個別指導",
    description:
      "あなた一人のために作るオーダーメイドプログラム。既製品のメニューは一切使いません。体組成・姿勢・生活習慣・目標をヒアリングし、今のあなたに最適なトレーニングを設計。だから効率よく、確実に変われます。",
  },
  {
    key: "food",
    number: "02",
    title: "食事サポート",
    description:
      "厳しい食事制限は不要です。食べながら痩せる仕組みを一緒に考えます。好きなものを我慢するのではなく「いつ・何を・どれだけ食べるか」を見直すだけで、リバウンドしない食習慣が身につきます。",
  },
  {
    key: "habit",
    number: "03",
    title: "習慣化メソッド",
    description:
      "トレーニングは「続けること」が全てです。VERDE FITでは、忙しい日常でも無理なく続けられる習慣設計にこだわります。小さな成功体験を積み重ね、セルフケアが当たり前になるまでサポートします。",
  },
];

export default function PersonalReasons() {
  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              だからVERDE FITは選ばれる
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              結果を出し続けるための3つの理由
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <FadeIn key={r.key} delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl bg-white px-7 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
                <p className="font-serif text-5xl font-bold text-green-100 leading-none">{r.number}</p>
                <h3 className="mt-3 font-serif text-xl font-bold text-green-700">{r.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">{r.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
