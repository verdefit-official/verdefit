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
  plans?: PlanItem[] | null;
};

const defaultPlans: PlanItem[] = [
  {
    _key: "p1",
    badge: "オンライン",
    title: "単発",
    price: "¥8,000",
    details: ["60分 / 1回", "Zoom・Google Meetなど", "全国対応"],
  },
  {
    _key: "p2",
    badge: "対面",
    title: "単発",
    price: "¥8,800",
    details: ["60分 / 1回", "VERDE FIT店舗", "横手市内"],
  },
  {
    _key: "p3",
    badge: "オンライン",
    title: "月額（1回 / 4回）",
    price: "¥28,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥7,000", "習慣化サポート付き"],
  },
  {
    _key: "p4",
    badge: "対面",
    title: "月額（1回 / 4回）",
    price: "¥30,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥7,500", "横手市内対面サポート"],
  },
];

export default function PriceCoaching({
  data,
  bookingUrl,
}: {
  data?: CoachingPricingData | null;
  bookingUrl?: string;
}) {
  const sectionTitle = data?.sectionTitle ?? "コーチング 料金";
  const sectionDescription =
    data?.sectionDescription ?? "思考・習慣を整える、認知科学に基づいたコーチング";
  const trialBadge = data?.trialBadge ?? "オンライン・対面";
  const trialTitle = data?.trialTitle ?? "無料初回体験セッション 60分";
  const plans = data?.plans && data.plans.length > 0 ? data.plans : defaultPlans;

  const singlePlans = plans.slice(0, 2);
  const monthlyPlans = plans.slice(2, 4);

  return (
    <section id="coaching" className="scroll-mt-24 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 初回無料体験 */}
        <FadeIn delay={60}>
          <div className="mb-10 rounded-2xl bg-[#e8f3ec] px-8 py-8 text-center">
            <span className="inline-block rounded-full bg-green-700 px-4 py-1.5 text-xs font-semibold text-white">
              {trialBadge}
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#1f2937]">{trialTitle}</h3>
          </div>
        </FadeIn>

        {/* 単発 */}
        <FadeIn delay={80}>
          <p className="mb-4 text-center text-sm font-semibold text-gray-500">単発</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {singlePlans.map((plan, i) => (
              <div key={plan._key ?? i} className="rounded-xl bg-[#e8f3ec] px-7 py-8 text-center">
                <span className="inline-block rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#1f2937]">{plan.title}</h3>
                <p className="mt-3 font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-400">（税込）</p>
                <div className="mt-4 space-y-1">
                  {(plan.details ?? []).map((d, j) => (
                    <p key={j} className="text-xs text-gray-600">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 月額 */}
        <FadeIn delay={120}>
          <p className="mb-4 text-center text-sm font-semibold text-gray-500">月額</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {monthlyPlans.map((plan, i) => (
              <div key={plan._key ?? i} className="rounded-xl bg-[#e8f3ec] px-7 py-8 text-center">
                <span className="inline-block rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#1f2937]">{plan.title}</h3>
                <p className="mt-3 font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-400">（税込）</p>
                <div className="mt-4 space-y-1">
                  {(plan.details ?? []).map((d, j) => (
                    <p key={j} className="text-xs text-gray-600">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="text-center">
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              コーチングの予約をする
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
