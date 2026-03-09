import FadeIn from "@/components/FadeIn";

const plans = [
  {
    badge: "オンライン",
    badgeColor: "bg-green-600",
    title: "単発セッション",
    price: "¥8,000",
    details: ["60分 / 1回", "Zoom・Google Meetなど", "秋田・全国対応"],
  },
  {
    badge: "対面",
    badgeColor: "bg-green-800",
    title: "単発セッション",
    price: "¥8,800",
    details: ["60分 / 1回", "VERDE FIT店舗", "横手市内"],
  },
  {
    badge: "オンライン",
    badgeColor: "bg-green-600",
    title: "月額定期プラン",
    price: "¥28,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり¥7,000", "習慣化サポート付き"],
  },
  {
    badge: "対面",
    badgeColor: "bg-green-800",
    title: "月額定期プラン",
    price: "¥30,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり¥7,500", "横手市内対面サポート"],
  },
];

export default function CoachingPricing() {
  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              料金プラン
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              横手市・秋田で通いやすい、明瞭な料金体系
            </p>
            <p className="mt-3 text-sm font-bold text-green-700">
              初回無料体験セッション60分 オンライン・対面
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <FadeIn key={`${plan.badge}-${plan.title}`} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <span className={`mb-4 inline-block self-start rounded-full px-4 py-1 text-xs font-bold text-white ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1f2937]">{plan.title}</h3>
                <p className="mt-3 font-serif text-[40px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-500">（税込）</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg bg-green-700 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                >
                  詳細を見る
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
