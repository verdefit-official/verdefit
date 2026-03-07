import FadeIn from "@/components/FadeIn";

const topPlans = [
  {
    key: "4",
    popular: false,
    name: "月4回プラン",
    foodLabel: "食事指導なし",
    foodGreen: false,
    price: "¥32,000",
    details: ["1ヶ月／4回セッション", "1回あたり ¥8,000", "有効期限：2ヶ月"],
  },
  {
    key: "8",
    popular: false,
    name: "月8回プラン",
    foodLabel: "食事指導なし",
    foodGreen: false,
    price: "¥56,000",
    details: ["1ヶ月／8回セッション", "1回あたり ¥7,000", "有効期限：4ヶ月"],
  },
  {
    key: "24",
    popular: true,
    name: "24回ダイエットプラン",
    foodLabel: "食事指導付き",
    foodGreen: true,
    price: "¥198,000",
    details: ["60分 × 24回＋食事指導", "推奨期間：3ヶ月", "有効期限：6ヶ月"],
  },
];

const bottomPlans = [
  {
    key: "48",
    popular: false,
    name: "48回ボディメイクプラン",
    foodLabel: "食事指導付き",
    foodGreen: true,
    price: "¥348,000",
    details: ["60分 × 48回＋食事指導", "推奨期間：6ヶ月", "有効期限：12ヶ月"],
  },
  {
    key: "single",
    popular: false,
    name: "単発セッション",
    foodLabel: "都度払い",
    foodGreen: false,
    price: "¥11,000",
    details: ["60分 / 1回", "メンテナンス・お試しに", "予約制"],
  },
];

function PlanCard({
  plan,
  delay = 0,
}: {
  plan: (typeof topPlans)[0];
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className={`relative flex h-full flex-col rounded-xl bg-white px-7 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-center ${plan.popular ? "ring-2 ring-green-600" : ""}`}>
        {plan.popular && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-[12px] font-bold text-white">
            人気 No.1
          </span>
        )}

        <h3 className="font-serif text-xl font-bold text-[#1f2937]">{plan.name}</h3>
        <p className={`mt-1 text-xs font-semibold ${plan.foodGreen ? "text-green-700" : "text-gray-400"}`}>
          {plan.foodLabel}
        </p>

        <p className="mt-5 font-serif text-[40px] font-bold leading-none text-green-700">
          {plan.price}
        </p>
        <p className="mt-1 text-xs text-gray-400">（税込）</p>

        <div className="my-5 space-y-1">
          {plan.details.map((d, i) => (
            <p key={i} className="text-xs text-gray-500">{d}</p>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-md bg-green-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            詳細を見る
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function PersonalPricing() {
  return (
    <section id="pricing" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              料金プラン
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              横手市で通いやすい、明瞭な料金体系
            </p>
          </div>
        </FadeIn>

        {/* 上段3列 */}
        <div className="grid gap-5 sm:grid-cols-3">
          {topPlans.map((plan, i) => (
            <PlanCard key={plan.key} plan={plan} delay={i * 60} />
          ))}
        </div>

        {/* 下段2列（中央寄せ） */}
        <div className="mx-auto mt-5 grid max-w-[680px] gap-5 sm:grid-cols-2">
          {bottomPlans.map((plan, i) => (
            <PlanCard key={plan.key} plan={plan} delay={i * 60 + 180} />
          ))}
        </div>

        <FadeIn delay={300}>
          <p className="mt-8 text-xs text-gray-500">
            ※分割払いも承ります。詳しくはお問い合わせください。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
