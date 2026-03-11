import FadeIn from "@/components/FadeIn";

type MonthlyPlan = {
  name: string;
  price: string;
  perSession: string;
  validity: string;
};

type IntensivePlan = {
  name: string;
  price: string;
  popular?: boolean;
  checkItems: string[];
  period: string;
  validityPeriod: string;
  description: string;
};

type PersonalPricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  monthlyPlans?: Array<{ _key?: string; name?: string; price?: string; perSession?: string; validity?: string }> | null;
  intensivePlans?: Array<{ _key?: string; name?: string; price?: string; popular?: boolean; checkItems?: string[]; period?: string; validityPeriod?: string; description?: string }> | null;
  singlePrice?: string | null;
};

const defaultMonthlyPlans: MonthlyPlan[] = [
  { name: "月4回プラン", price: "¥32,000", perSession: "1回あたり ¥8,000", validity: "有効期限：2ヶ月" },
  { name: "月8回プラン", price: "¥56,000", perSession: "1回あたり ¥7,000", validity: "有効期限：4ヶ月" },
];

const defaultIntensivePlans: IntensivePlan[] = [
  {
    name: "24回ダイエットプラン",
    price: "¥198,000",
    popular: true,
    checkItems: ["60分パーソナルトレーニング24回", "食事指導付き"],
    period: "推奨利用期間：3ヶ月",
    validityPeriod: "有効期限：初回利用日から6ヶ月",
    description: "ダイエットを成功させ、リバウンドしない知識を身につけるプラン。",
  },
  {
    name: "48回ボディメイクプラン",
    price: "¥348,000",
    checkItems: ["60分パーソナルトレーニング48回", "食事指導付き"],
    period: "推奨利用期間：6ヶ月",
    validityPeriod: "有効期限：初回利用日から12ヶ月",
    description: "一生モノの知識と習慣を身につける本格ボディメイクプラン。",
  },
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

export default function PricePersonal({ data, bookingUrl }: { data?: PersonalPricingData | null; bookingUrl?: string }) {
  const sectionTitle = data?.sectionTitle ?? "パーソナルトレーニング 料金";
  const sectionDescription = data?.sectionDescription ?? "完全個別指導で理想の身体づくりを実現";
  const monthlyPlans: MonthlyPlan[] = (data?.monthlyPlans && data.monthlyPlans.length > 0)
    ? data.monthlyPlans.map((p) => ({ name: p.name ?? "", price: p.price ?? "", perSession: p.perSession ?? "", validity: p.validity ?? "" }))
    : defaultMonthlyPlans;
  const intensivePlans: IntensivePlan[] = (data?.intensivePlans && data.intensivePlans.length > 0)
    ? data.intensivePlans.map((p) => ({ name: p.name ?? "", price: p.price ?? "", popular: p.popular, checkItems: p.checkItems ?? [], period: p.period ?? "", validityPeriod: p.validityPeriod ?? "", description: p.description ?? "" }))
    : defaultIntensivePlans;
  const singlePrice = data?.singlePrice ?? "¥11,000";

  return (
    <section id="personal" className="scroll-mt-24 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-sm text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 月額プラン */}
        <FadeIn delay={60}>
          <p className="mb-4 text-lg font-bold text-[#1f2937]">月額プラン（食事指導なし）</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {monthlyPlans.map((plan, i) => (
              <div key={i} className="rounded-xl bg-[#e8f3ec] px-7 py-8 text-center">
                <h3 className="font-serif text-xl font-bold text-[#1f2937]">{plan.name}</h3>
                <p className="mt-4 font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-400">（税込）</p>
                <p className="mt-3 text-xs text-gray-500">{plan.perSession}</p>
                <p className="text-xs text-gray-500">{plan.validity}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 短期集中プラン */}
        <FadeIn delay={100}>
          <p className="mb-4 text-lg font-bold text-[#1f2937]">短期集中プラン</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {intensivePlans.map((plan, i) => (
              <div key={i} className="relative rounded-xl bg-[#e8f3ec] px-7 py-8">
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-[12px] font-bold text-white">
                    人気No.1
                  </span>
                )}
                <h3 className="text-center font-serif text-xl font-bold text-[#1f2937]">{plan.name}</h3>
                <p className="mt-3 text-center font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-center text-xs text-gray-400">（税込）</p>
                <div className="mt-4 text-center">
                  <p className="mb-2 text-lg font-bold text-[#1f2937]">内容</p>
                  <div className="inline-flex flex-col items-start space-y-1.5">
                    {plan.checkItems.map((item, j) => (
                      <p key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckIcon />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-gray-500">{plan.period}</p>
                <p className="text-center text-xs text-gray-500">{plan.validityPeriod}</p>
                <p className="mt-4 text-center text-xs text-gray-500">{plan.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 単発 */}
        <FadeIn delay={140}>
          <p className="mb-4 text-center text-lg font-bold text-[#1f2937]">単発</p>
          <div className="mx-auto mb-10 max-w-xs rounded-xl bg-[#e8f3ec] px-7 py-8 text-center">
            <p className="text-sm text-gray-500">60分</p>
            <p className="mt-3 font-serif text-[40px] font-bold leading-none text-green-700">
              {singlePrice}
            </p>
            <p className="mt-1 text-xs text-gray-400">（税込）</p>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <div className="text-center">
            <a
              href="/personal"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              パーソナルトレーニング詳細はこちら →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
