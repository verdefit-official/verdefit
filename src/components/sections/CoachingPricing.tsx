import FadeIn from "@/components/FadeIn";

type PlanItem = {
  _key?: string;
  badge?: string | null;
  title?: string | null;
  price?: string | null;
  details?: string[] | null;
};

type CoachingPricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  trialBadge?: string | null;
  trialTitle?: string | null;
  trialButtonText?: string | null;
  plans?: PlanItem[] | null;
  note?: string | null;
};

const defaultPlans: PlanItem[] = [
  {
    _key: "p1",
    badge: "オンライン",
    title: "単発セッション",
    price: "¥8,000",
    details: ["60分 / 1回", "Zoom・Google Meetなど", "秋田・全国対応"],
  },
  {
    _key: "p2",
    badge: "対面",
    title: "単発セッション",
    price: "¥8,800",
    details: ["60分 / 1回", "VERDE FIT店舗", "横手市内"],
  },
  {
    _key: "p3",
    badge: "オンライン",
    title: "月額定期プラン",
    price: "¥28,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥7,000", "習慣化サポート付き"],
  },
  {
    _key: "p4",
    badge: "対面",
    title: "月額定期プラン",
    price: "¥30,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥7,500", "横手市内対面サポート"],
  },
];

export default function CoachingPricing({
  data,
  bookingUrl,
}: {
  data?: CoachingPricingData | null;
  bookingUrl?: string;
}) {
  const sectionTitle = data?.sectionTitle ?? "料金プラン";
  const sectionDescription =
    data?.sectionDescription ?? "横手市・秋田で通いやすい、明瞭な料金体系";
  const trialBadge = data?.trialBadge ?? "オンライン・対面";
  const trialTitle = data?.trialTitle ?? "初回無料体験セッション６０分";
  const trialButtonText = data?.trialButtonText ?? "予約はこちら";
  const plans =
    data?.plans && data.plans.length > 0 ? data.plans : defaultPlans;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 初回無料体験カード */}
        <FadeIn delay={60}>
          <div className="mb-8 rounded-2xl bg-gray-50 px-8 py-10 text-center">
            <span className="inline-block rounded-full bg-green-600 px-4 py-1.5 text-xs font-semibold text-white">
              {trialBadge}
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#1f2937] md:text-[28px]">
              {trialTitle}
            </h3>
            <a
              href={bookingUrl ?? "#cta"}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-green-600 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              {trialButtonText}
            </a>
          </div>
        </FadeIn>

        {/* プランカード */}
        <div className="grid gap-5 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <FadeIn key={plan._key ?? i} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-gray-50 p-8">
                <span className="mb-4 inline-block self-start rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1f2937]">{plan.title}</h3>
                <p className="mt-3 font-serif text-[44px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-500">（税込）</p>
                <ul className="mt-5 flex-1 space-y-1.5">
                  {(plan.details ?? []).map((d, j) => (
                    <li key={j} className="text-sm text-gray-600">{d}</li>
                  ))}
                </ul>
                <a
                  href={bookingUrl ?? "#cta"}
                  className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg bg-green-600 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  詳細を見る
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {data?.note && (
          <FadeIn delay={350}>
            <p className="mt-8 text-xs text-gray-500">{data.note}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
