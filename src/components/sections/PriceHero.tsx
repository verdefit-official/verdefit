import FadeIn from "@/components/FadeIn";

const tabs = [
  { href: "#seitai", label: "整体" },
  { href: "#personal", label: "パーソナル" },
  { href: "#coaching", label: "コーチング" },
  { href: "#premium", label: "プレミアム" },
];

export default function PriceHero() {
  return (
    <section className="bg-white pt-28 pb-12 md:pt-32 md:pb-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              料金・プラン一覧
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              初回体験から月額プランまで、あなたのペースに合わせてお選びいただけます
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="rounded-full border-2 border-green-700 px-6 py-2 text-sm font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
