import FadeIn from "@/components/FadeIn";

type SinglePlan = { badge: string; price: string };
type MonthlyPlan = { badge: string; title: string; price: string; perSession: string };

const singlePlans: SinglePlan[] = [
  { badge: "オンライン", price: "¥8,000" },
  { badge: "対面", price: "¥8,800" },
];

const monthlyPlans: MonthlyPlan[] = [
  { badge: "オンライン", title: "1ヶ月 / 4回", price: "¥28,000", perSession: "1回あたり ¥7,000" },
  { badge: "対面", title: "1ヶ月 / 4回", price: "¥30,000", perSession: "1回あたり ¥7,500" },
];

function Badge({ label }: { label: string }) {
  const isOnline = label === "オンライン";
  return (
    <span
      className={`inline-block rounded-full px-4 py-1 text-xs font-semibold text-white ${
        isOnline ? "bg-[#6aaa82]" : "bg-green-700"
      }`}
    >
      {label}
    </span>
  );
}

export default function PriceCoaching({ bookingUrl }: { bookingUrl?: string }) {
  return (
    <section id="coaching" className="scroll-mt-24 bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              コーチング 料金
            </h2>
            <p className="mt-4 text-sm text-gray-500 md:text-base">思考を変え、習慣をデザインする</p>
          </div>
        </FadeIn>

        {/* 初回無料体験 */}
        <FadeIn delay={60}>
          <div className="mb-10 rounded-2xl bg-white px-8 py-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Badge label="オンライン" />
              <Badge label="対面" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-green-700">
              初回無料体験セッション６０分
            </h3>
          </div>
        </FadeIn>

        {/* 単発 */}
        <FadeIn delay={80}>
          <p className="mb-4 text-sm font-semibold text-gray-700">単発</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {singlePlans.map((plan, i) => (
              <div key={i} className="rounded-xl bg-white px-7 py-8 text-center">
                <Badge label={plan.badge} />
                <p className="mt-3 text-sm text-gray-600">60分</p>
                <p className="mt-2 font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-400">（税込）</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 月額 */}
        <FadeIn delay={120}>
          <p className="mb-4 text-sm font-semibold text-gray-700">月額</p>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {monthlyPlans.map((plan, i) => (
              <div key={i} className="rounded-xl bg-white px-7 py-8 text-center">
                <Badge label={plan.badge} />
                <p className="mt-3 text-sm text-gray-600">{plan.title}</p>
                <p className="mt-2 font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-400">（税込）</p>
                <p className="mt-3 text-xs text-gray-500">{plan.perSession}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="text-center">
            <a
              href="/coaching"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              コーチング詳細はこちら →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
