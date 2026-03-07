import FadeIn from "@/components/FadeIn";

export default function PersonalHero({
  bookingUrl,
  lineUrl,
}: {
  bookingUrl?: string;
  lineUrl?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#e8f3ec]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-10 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0 order-2 lg:order-1">
            <FadeIn>
              <span className="mb-6 inline-block rounded-full bg-green-700 px-5 py-1.5 text-sm font-semibold tracking-wide text-white">
                パーソナルトレーニング
              </span>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="mb-3 font-serif text-3xl font-bold leading-[1.35] text-[#1f2937] sm:text-4xl lg:text-[42px]">
                横手市で一生、リバウンドしない身体づくりを始めませんか？
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mb-8 max-w-xl text-[15px] leading-8 text-[#374151] whitespace-pre-line">
                {"一時的に痩せるダイエットからの卒業。\n一生モノの身体と習慣を身につけることができる。\n\n横手市で理想の身体が手に入るパーソナルジム、VERDE FIT。\n完全個別指導とプロの食事サポートであなたのなりたい姿を現実にします。\nリバウンドしない、一生使える知識と習慣を身につけましょう。"}
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={bookingUrl ?? "#cta"}
                  className="inline-flex items-center justify-center rounded-lg bg-green-700 px-9 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-800"
                >
                  予約はこちら
                </a>
                <a
                  href={lineUrl ?? "#"}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-green-700 bg-white px-9 py-3.5 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
                >
                  LINEで相談する
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250} className="order-1 lg:order-2">
            <div className="relative -mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:mx-0 lg:w-full overflow-hidden aspect-[4/3] lg:aspect-square lg:rounded-full bg-green-100" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
