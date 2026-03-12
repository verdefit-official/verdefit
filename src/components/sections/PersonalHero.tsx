import FadeIn from "@/components/FadeIn";

type PersonalHeroData = {
  heading?: string | null;
  subheading?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

export default function PersonalHero({
  data,
  bookingUrl,
  lineUrl,
}: {
  data?: PersonalHeroData | null;
  bookingUrl?: string;
  lineUrl?: string;
}) {
  const heading = data?.heading ?? "もうリバウンドしない身体づくりを横手で。";
  const subheading = data?.subheading ?? "横手市で理想の身体を作る完全個別パーソナルトレーニング";
  const imageUrl = data?.imageUrl ?? "/personal-hero.png";
  const imageAlt = data?.imageAlt ?? "横手市のパーソナルジムVERDE FITでダイエット・ボディメイクに取り組む様子";
  const primaryButtonText = data?.primaryButtonText ?? "予約はこちら";
  const secondaryButtonText = data?.secondaryButtonText ?? "LINEで相談する";

  return (
    <section className="relative overflow-hidden bg-[#e8f3ec]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-10 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <div className="min-w-0 order-2 lg:order-1">
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
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
