import FadeIn from "@/components/FadeIn";

type PlanItem = {
  name: string;
  badge: string;
  badgeGreen?: boolean;
  price: string;
  details: string[];
  popular?: boolean;
};

const monthlyPlans: PlanItem[] = [
  {
    name: "月4回プラン",
    badge: "食事指導なし",
    badgeGreen: false,
    price: "¥32,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥8,000", "有効期限：2ヶ月"],
  },
  {
    name: "月8回プラン",
    badge: "食事指導なし",
    badgeGreen: false,
    price: "¥56,000",
    details: ["60分 × 8回 / 1ヶ月", "1回あたり ¥7,000", "有効期限：4ヶ月"],
  },
];

const intensivePlans: PlanItem[] = [
  {
    name: "24回ダイエットプラン",
    badge: "食事指導付き",
    badgeGreen: true,
    price: "¥198,000",
    details: ["60分 × 24回 ＋ 食事指導", "推奨期間：3ヶ月", "通常より3回分お得 / 有効期限6ヶ月"],
    popular: true,
  },
  {
    name: "48回ボディメイクプラン",
    badge: "食事指導付き",
    badgeGreen: true,
    price: "¥348,000",
    details: ["60分 × 48回 ＋ 食事指導", "推奨期間：6ヶ月", "通常より6回分お得 / 有効期限12ヶ月"],
  },
];

const singlePlan: PlanItem = {
  name: "単発セッション",
  badge: "都度払い",
  price: "¥11,000",
  details: ["60分 / 1回", "メンテナンス・お試しに", "予約制"],
};

function PlanCard({ plan }: { plan: PlanItem }) {
  return (
    <div
      className={`relative rounded-xl bg-white px-7 py-8 text-center shadow-sm ${
        plan.popular ? "ring-2 ring-green-600" : ""
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-[12px] font-bold text-white">
          人気 No.1
        </span>
      )}
      <span
        className={`text-xs font-semibold ${
          plan.badgeGreen ? "text-green-700" : "text-gray-400"
        }`}
      >
        {plan.badge}
      </span>
      <h3 className="mt-1 font-serif text-xl font-bold text-[#1f2937]">{plan.name}</h3>
      <p className="mt-4 font-serif text-[40px] font-bold leading-none text-green-700">
        {plan.price}
      </p>
      <p className="mt-1 text-xs text-gray-400">（税込）</p>
      <div className="mt-4 space-y-1">
        {plan.details.map((d, i) => (
          <p key={i} className="text-xs text-gray-500">
            {d}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function PricePersonal({ bookingUrl }: { bookingUrl?: string }) {
  return (
    <section id="personal" className="scroll-mt-24 bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              パーソナルトレーニング 料金
            </h2>
            <p className="mt-4 text-sm font-medium text-gray-500 md:text-base">
              横手市で通いやすい、明瞭な料金体系
            </p>
          </div>
        </FadeIn>

        {/* 月額プラン */}
        <FadeIn delay={60}>
          <p className="mb-4 text-center text-sm font-semibold text-gray-500">
            月額プラン（食事管理なし）
          </p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {monthlyPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
        </FadeIn>

        {/* 短期集中プラン */}
        <FadeIn delay={100}>
          <p className="mb-4 text-center text-sm font-semibold text-gray-500">短期集中プラン</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {intensivePlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
        </FadeIn>

        {/* 単発 */}
        <FadeIn delay={140}>
          <p className="mb-4 text-center text-sm font-semibold text-gray-500">単発</p>
          <div className="mx-auto mb-10 max-w-xs">
            <PlanCard plan={singlePlan} />
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <div className="text-center">
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              パーソナルトレーニングの予約をする
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
