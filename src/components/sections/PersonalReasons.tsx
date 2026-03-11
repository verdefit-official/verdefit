import FadeIn from "@/components/FadeIn";

type ReasonItem = {
  title?: string | null;
  description?: string | null;
};

type PersonalReasonsData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  reasons?: ReasonItem[] | null;
};

const icons = [
  <svg key="individual" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>,
  <svg key="food" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </svg>,
  <svg key="habit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>,
];

const defaultReasons = [
  {
    title: "完全個別指導",
    description:
      "年齢、体力、生活リズム、既往歴、目標。すべてを踏まえた上で、あなただけの専用プログラムを構築します。流行のメニューを当てはめるのではなく、「今のあなた」に最適な負荷と頻度を設計。だから無理なく、でも確実に変化を積み重ねていけます。",
  },
  {
    title: "食事サポート設計",
    description:
      "極端な糖質制限や短期集中型ではなく、一生モノの食事の知識が身につきます。外食や付き合いが多い方でも続けられる現実的な方法を提案。「やるべきこと」ではなく「できること」から整えるのでリバウンドしない土台が作られます。",
  },
  {
    title: "習慣化メソッド",
    description:
      "ダイエットが続かない原因は意志の弱さではありません。確認し、修正し、支えてくれる存在がいないことです。定期的な振り返りと軌道修正を行いながら、自然に続く習慣へと落とし込みます。卒業後も自走できる状態まで伴走します。",
  },
];

export default function PersonalReasons({ data }: { data?: PersonalReasonsData | null }) {
  const sectionTitle = data?.sectionTitle ?? "だからVERDE FITは結果が違う";
  const sectionDescription = data?.sectionDescription ?? "一人では変われなかったあなたへ。本気を形にする3つの支え";
  const reasons =
    data?.reasons && data.reasons.length > 0
      ? data.reasons.map((r, i) => ({
          key: String(i),
          title: r.title ?? defaultReasons[i]?.title ?? "",
          description: r.description ?? defaultReasons[i]?.description ?? "",
          icon: icons[i],
        }))
      : defaultReasons.map((r, i) => ({ key: String(i), ...r, icon: icons[i] }));

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <FadeIn key={r.key} delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl bg-white px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
                  {r.icon}
                </div>
                <h3 className="mb-4 font-serif text-xl font-bold text-green-700">{r.title}</h3>
                <p className="flex-1 text-sm leading-8 text-gray-600">{r.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
