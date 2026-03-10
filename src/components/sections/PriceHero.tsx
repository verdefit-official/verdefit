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
            <h1 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              料金・プラン一覧
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 md:text-base">
              {subtitle}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mt-10 rounded-2xl border border-gray-300 bg-white/60 px-4 py-4">
            <div className="flex items-center justify-between gap-2">
              <a
                href="#trial"
                className="flex-1 rounded-lg border-2 border-[#3a8a5c] px-4 py-2 text-center text-sm font-semibold text-[#3a8a5c] transition-colors hover:bg-[#3a8a5c] hover:text-white"
              >
                初回体験
              </a>
              {filledTabs.map((tab) => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="flex-1 rounded-lg bg-[#3a8a5c] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2d6e49]"
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
