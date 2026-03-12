import FadeIn from "@/components/FadeIn";

type CoachingHeroData = {
  badge?: string | null;
  heading?: string | null;
  subheading?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

export default function CoachingHero({
  data,
  bookingUrl,
  lineUrl,
}: {
  data?: CoachingHeroData | null;
  bookingUrl?: string;
  lineUrl?: string;
}) {
  const badge = data?.badge ?? "COMPASS認定プロコーチ";
  const heading = data?.heading ?? "横手市・秋田で、挫折しない自分へ。";
  const subheading = data?.subheading ?? "思考と習慣を整え、「続かない」を卒業する本格コーチング";
  const description =
    data?.description ??
    "「続けたいのに続かない」「やろうと思っても行動できない」。その原因は意志の弱さではなく、思考や習慣のパターンにあります。VERDE FITのコーチングでは、COMPASS認定プロコーチが認知科学のアプローチをもとに思考を整理し、行動が自然と続く習慣づくりをサポートします。ダイエットや運動、健康習慣、仕事や人生の目標まで、あなたの理想の未来を明確にし、実現まで伴走します。「続かない」を「続く」に変え、自分らしく前向きに生きられる毎日へ導きます。";
  const imageUrl = data?.imageUrl ?? "/coaching-hero.png";
  const imageAlt = data?.imageAlt ?? "横手市のコーチングVERDE FITでコーチがクライアントと習慣・目標達成について話し合う様子";
  const primaryButtonText = data?.primaryButtonText ?? "無料相談はこちら";
  const secondaryButtonText = data?.secondaryButtonText ?? "LINEで相談する";

  return (
    <section className="relative overflow-hidden bg-[#e8f3ec]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-10 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[2fr_2.5fr] lg:gap-20">
          <div className="min-w-0 order-2 lg:order-1">
            <FadeIn>
              <span className="mb-6 inline-block rounded-full bg-green-700 px-5 py-1.5 text-sm font-semibold tracking-wide text-white">
                {badge}
              </span>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="mb-3 font-serif text-3xl font-bold leading-[1.35] text-[#1f2937] sm:text-4xl lg:text-[42px]">
                {heading}
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mb-8 text-[17px] font-semibold leading-8 text-[#374151] whitespace-pre-line md:text-[19px]">
                {subheading}
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={bookingUrl ?? "#cta"}
                  className="inline-flex h-14 w-full items-center justify-center rounded-lg bg-green-700 px-9 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-800 sm:w-auto"
                >
                  {primaryButtonText}
                </a>
                <a
                  href={lineUrl ?? "#"}
                  className="inline-flex h-14 w-full items-center justify-center rounded-lg border-2 border-green-700 bg-white px-9 text-base font-semibold text-green-700 transition-colors hover:bg-green-50 sm:w-auto"
                >
                  {secondaryButtonText}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250} className="order-1 lg:order-2">
            <div className="relative -mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:mx-0 lg:w-full overflow-hidden aspect-[4/3] lg:aspect-square lg:rounded-full bg-green-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
