import FadeIn from "@/components/FadeIn";

type PricePremiumData = {
  planTitle?: string | null;
  programLabel?: string | null;
  price?: string | null;
  monthlyLimit?: string | null;
  checkItems?: string[] | null;
  flexNote?: string | null;
  supports?: string[] | null;
  description?: string | null;
};

const defaultCheckItems = ["整体（60分）", "パーソナルトレーニング（60分）", "コーチング（60分）"];
const defaultSupports = ["食事サポート", "24時間LINE相談サポート", "習慣設計プログラム"];

const defaultDescription =
  "VERDE FITでは、３つのアプローチであなたの理想を叶えます。\n理想の状態に整える整体、理想の身体を作るパーソナルトレーニング、理想の習慣を手に入れるコーチング。\nこの3つを組み合わせることで、理想のあなたが実現します。\n\n整体・トレーニング・コーチングを一体化した6ヶ月のボディメイクプログラムは単なるダイエットではなく、身体・思考・習慣のすべてを整え、リバウンドしない身体づくりを目指します。\n\n一人では続かなかった方でも、専門家の伴走サポートにより理想の身体と健康習慣を手にしませんか？";

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
  data,
  bookingUrl,
  lineUrl,
}: {
  data?: PricePremiumData | null;
  bookingUrl?: string;
  lineUrl?: string;
}) {
  const planTitle = data?.planTitle ?? "VERDE FIT式ボディメイクコーチング";
  const programLabel = data?.programLabel ?? "6か月プログラム";
  const price = data?.price ?? "¥ 498,000";
  const monthlyLimit = data?.monthlyLimit ?? "月8回まで利用可能";
  const checkItems = (data?.checkItems && data.checkItems.length > 0) ? data.checkItems : defaultCheckItems;
  const flexNote = data?.flexNote ?? "※組み合わせ自由";
  const supports = (data?.supports && data.supports.length > 0) ? data.supports : defaultSupports;
  const description = data?.description ?? defaultDescription;

  return (
    <section id="premium" className="scroll-mt-24 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              トータルケアプレミアムプラン
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="rounded-2xl border-2 border-green-700 bg-white px-8 py-10 md:px-12 md:py-12">
            {/* タイトル・価格 */}
            <div className="text-center">
              <p className="font-serif text-xl font-bold text-[#1f2937]">
                {planTitle}
              </p>
              <p className="mt-2 text-sm font-semibold text-green-700">{programLabel}</p>
              <p className="mt-1 font-serif text-[52px] font-bold leading-none text-green-700">
                {price}
              </p>
              <p className="mt-1 text-xs text-gray-400">（税込）</p>
            </div>

            {/* 内容 */}
            <div className="mt-8 text-center">
              <p className="mb-2 text-sm font-semibold text-gray-700">内容</p>
              <p className="mb-3 text-sm text-gray-600">{monthlyLimit}</p>
              <div className="inline-flex flex-col items-start space-y-2">
                {checkItems.map((item, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">{flexNote}</p>

              <div className="mt-5">
                <p className="mb-2 text-sm text-gray-700">追加サポート</p>
                <div className="inline-flex flex-col items-start space-y-1">
                  {supports.map((s, i) => (
                    <p key={i} className="text-sm text-gray-600">・{s}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* 説明文 */}
            <div className="mt-8">
              <p className="whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
