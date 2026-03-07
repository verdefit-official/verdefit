import FadeIn from "@/components/FadeIn";

type PlanItem = {
  name?: string | null;
  foodLabel?: string | null;
  foodGreen?: boolean | null;
  price?: string | null;
  details?: string[] | null;
  popular?: boolean | null;
};

type PersonalPricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  plans?: PlanItem[] | null;
  note?: string | null;
};

const defaultPlans: PlanItem[] = [
  { name: "月4回プラン", foodLabel: "食事指導なし", foodGreen: false, price: "¥32,000", details: ["1ヶ月／4回セッション", "1回あたり ¥8,000", "有効期限：2ヶ月"], popular: false },
  { name: "月8回プラン", foodLabel: "食事指導なし", foodGreen: false, price: "¥56,000", details: ["1ヶ月／8回セッション", "1回あたり ¥7,000", "有効期限：4ヶ月"], popular: false },
  { name: "24回ダイエットプラン", foodLabel: "食事指導付き", foodGreen: true, price: "¥198,000", details: ["60分 × 24回＋食事指導", "推奨期間：3ヶ月", "有効期限：6ヶ月"], popular: true },
  { name: "48回ボディメイクプラン", foodLabel: "食事指導付き", foodGreen: true, price: "¥348,000", details: ["60分 × 48回＋食事指導", "推奨期間：6ヶ月", "有効期限：12ヶ月"], popular: false },
  { name: "単発セッション", foodLabel: "都度払い", foodGreen: false, price: "¥11,000", details: ["60分 / 1回", "メンテナンス・お試しに", "予約制"], popular: false },
];

function PlanCard({ plan, delay = 0 }: { plan: Required<PlanItem>; delay?: number }) {
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
          {(plan.details ?? []).map((d, i) => (
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

export default function PersonalPricing({ data }: { data?: PersonalPricingData | null }) {
  const sectionTitle = data?.sectionTitle ?? "料金プラン";
  const sectionDescription = data?.sectionDescription ?? "横手市で通いやすい、明瞭な料金体系";
  const note = data?.note ?? "※分割払いも承ります。詳しくはお問い合わせください。";

  const rawPlans =
    data?.plans && data.plans.length > 0 ? data.plans : defaultPlans;

  const plans = rawPlans.map((p, i) => ({
    name: p.name ?? defaultPlans[i]?.name ?? "",
    foodLabel: p.foodLabel ?? defaultPlans[i]?.foodLabel ?? "",
    foodGreen: p.foodGreen ?? defaultPlans[i]?.foodGreen ?? false,
    price: p.price ?? defaultPlans[i]?.price ?? "",
    details: p.details ?? defaultPlans[i]?.details ?? [],
    popular: p.popular ?? defaultPlans[i]?.popular ?? false,
  }));

  const topPlans = plans.slice(0, 3);
  const bottomPlans = plans.slice(3);

  return (
    <section id="pricing" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 上段3列 */}
        <div className="grid gap-5 sm:grid-cols-3">
          {topPlans.map((plan, i) => (
            <PlanCard key={i} plan={plan} delay={i * 60} />
          ))}
        </div>

        {/* 下段2列（中央寄せ） */}
        {bottomPlans.length > 0 && (
          <div className="mx-auto mt-5 grid max-w-[680px] gap-5 sm:grid-cols-2">
            {bottomPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} delay={i * 60 + 180} />
            ))}
          </div>
        )}

        <FadeIn delay={300}>
          <p className="mt-8 text-xs text-gray-500">{note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
