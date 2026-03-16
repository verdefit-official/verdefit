import FadeIn from "@/components/FadeIn";

type PriceHeroData = {
  subtitle?: string | null;
};

const filledTabs = [
  { href: "#seitai", label: "整体" },
  { href: "#personal", label: "パーソナル" },
  { href: "#coaching", label: "コーチング" },
  { href: "#premium", label: "プレミアム" },
];

export default function PriceHero({ data }: { data?: PriceHeroData | null }) {
  const subtitle = data?.subtitle ?? "ご不明な点などはお気軽にご相談ください。";
  return (
    <section className="bg-[#e8f3ec] pt-28 pb-12 md:pt-32 md:pb-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-[#1f2937] sm:text-4xl lg:text-[42px]">
              料金・プラン一覧
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 md:text-base">
              {subtitle}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mt-10 rounded-2xl border border-gray-300 bg-white/60 px-4 py-4">
            <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap sm:items-center sm:justify-between">
              <a
                href="#trial"
                className="w-[calc(50%-0.25rem)] rounded-lg border-2 border-[#3a8a5c] px-4 py-2 text-center text-sm font-semibold text-[#3a8a5c] transition-colors hover:bg-[#3a8a5c] hover:text-white sm:w-auto sm:flex-1"
              >
                初回評価
              </a>
              {filledTabs.map((tab) => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="w-[calc(50%-0.25rem)] rounded-lg bg-[#3a8a5c] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2d6e49] sm:w-auto sm:flex-1"
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
