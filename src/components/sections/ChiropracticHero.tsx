import FadeIn from "@/components/FadeIn";

type ChiropracticHeroData = {
  badge?: string | null;
  heading?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  primaryButtonText?: string | null;
  secondaryButtonText?: string | null;
};

export default function ChiropracticHero({ data, phone, bookingUrl }: { data?: ChiropracticHeroData | null; phone?: string; bookingUrl?: string }) {
  const badge = data?.badge ?? "2026年春 GRAND OPEN";
  const heading = data?.heading ?? "将来の身体に不安を感じている方へ";
  const description =
    data?.description ??
    "延べ5,000人以上を施術してきた国家資格者が、横手で痛みの原因から整えます";
  const imageUrl = data?.imageUrl !== undefined ? data.imageUrl : "/chiropractic-hero.jpg";
  const imageAlt = data?.imageAlt ?? "横手市の整体VERDE FITで施術師が腰痛・肩こりの改善施術をする様子";
  const primaryButtonText = data?.primaryButtonText ?? "予約はこちら";
  const secondaryButtonText = data?.secondaryButtonText ?? "お電話でのご相談";

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
              <p className="mb-5 text-[17px] font-semibold leading-8 text-[#374151] whitespace-pre-line md:text-[19px]">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={350}>
              <p className="mb-8 text-xl font-bold sm:text-2xl">
                <span className="text-green-700">VERDE FIT</span>
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
                  href={phone ? `tel:${phone.replace(/-/g, "")}` : "#"}
                  className="inline-flex h-14 w-full items-center justify-center rounded-lg border-2 border-green-700 bg-white px-9 text-base font-semibold text-green-700 transition-colors hover:bg-green-50 sm:w-auto"
                >
                  {secondaryButtonText}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250} className="order-1 lg:order-2">
            <div className="relative -mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:mx-0 lg:w-full overflow-hidden aspect-[4/3] lg:aspect-square lg:rounded-full">
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200" />
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
