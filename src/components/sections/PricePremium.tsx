import FadeIn from "@/components/FadeIn";

const checkItems = ["整体（60分）", "パーソナルトレーニング（60分）", "コーチング（60分）"];
const supports = ["食事サポート", "24時間LINE相談サポート", "習慣設計プログラム"];

const descriptions = [
  "VERDE FITでは、３つのアプローチであなたの理想を叶えます。\n理想の状態に整える整体、理想の身体を作るパーソナルトレーニング、理想の習慣を手に入れるコーチング。\nこの3つを組み合わせることで、理想のあなたが実現します。",
  "整体・トレーニング・コーチングを一体化した6ヶ月のボディメイクプログラムは単なるダイエットではなく、身体・思考・習慣のすべてを整え、リバウンドしない身体づくりを目指します。",
  "一人では続かなかった方でも、専門家の伴走サポートにより理想の身体と健康習慣を手にしませんか？",
];

function CheckIcon() {
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-green-600 text-green-600">
      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function PricePremium({
  bookingUrl,
  lineUrl,
}: {
  bookingUrl?: string;
  lineUrl?: string;
}) {
  return (
    <section id="premium" className="scroll-mt-24 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="whitespace-nowrap font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              トータルケアプレミアムプラン
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="rounded-2xl border-2 border-green-700 bg-white px-8 py-10 md:px-12 md:py-12">
            {/* タイトル・価格 */}
            <div className="text-center">
              <p className="font-serif text-xl font-bold text-[#1f2937]">
                VERDE FIT式ボディメイクコーチング
              </p>
              <p className="mt-2 text-sm font-semibold text-green-700">6か月プログラム</p>
              <p className="mt-1 font-serif text-[52px] font-bold leading-none text-green-700">
                ¥ 498,000
              </p>
              <p className="mt-1 text-xs text-gray-400">（税込）</p>
            </div>

            {/* 内容 */}
            <div className="mt-8">
              <p className="mb-2 text-sm font-semibold text-gray-700">内容</p>
              <p className="mb-3 text-sm text-gray-600">月8回まで利用可能</p>
              <div className="space-y-2">
                {checkItems.map((item, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">※組み合わせ自由</p>

              <div className="mt-5">
                <p className="mb-2 text-sm text-gray-700">追加サポート</p>
                <div className="space-y-1">
                  {supports.map((s, i) => (
                    <p key={i} className="text-sm text-gray-600">・{s}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* 説明文 */}
            <div className="mt-8 space-y-4">
              {descriptions.map((d, i) => (
                <p key={i} className="whitespace-pre-line text-[13px] leading-7 text-gray-600">
                  {d}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
