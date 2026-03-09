import FadeIn from "@/components/FadeIn";

export default function CoachingHero({
  bookingUrl,
  lineUrl,
}: {
  bookingUrl?: string;
  lineUrl?: string;
}) {
  return (
    <section className="bg-[#e8f3ec] pt-24 pb-20 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* テキスト */}
          <FadeIn>
            <div>
              <span className="inline-block rounded-full bg-green-700 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                COMPASS認定プロコーチ
              </span>

              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#1f2937] md:text-[52px] md:leading-[1.15]">
                横手市・秋田で、<br />
                挫折しない自分へ。
              </h1>

              <p className="mb-5 text-[17px] font-semibold leading-8 text-[#374151] whitespace-pre-line md:text-[19px]">
                思考と習慣を整え、「続かない」を卒業する本格コーチング
              </p>

              <p className="mt-5 text-[15px] leading-8 text-gray-700 md:text-[16px] md:leading-9">
                「続けたいのに続かない」「やろうと思っても行動できない」。その原因は意志の弱さではなく、思考や習慣のパターンにあります。VERDE FITのコーチングでは、COMPASS認定プロコーチが認知科学のアプローチをもとに思考を整理し、行動が自然と続く習慣づくりをサポートします。ダイエットや運動、健康習慣、仕事や人生の目標まで、あなたの理想の未来を明確にし、実現まで伴走します。「続かない」を「続く」に変え、自分らしく前向きに生きられる毎日へ導きます。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={bookingUrl ?? "#cta"}
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-green-700 px-8 text-base font-semibold text-white transition-colors hover:bg-green-800"
                >
                  無料相談はこちら
                </a>
                <a
                  href={lineUrl ?? "#"}
                  className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-green-700 bg-white px-8 text-base font-semibold text-green-700 transition-colors hover:bg-green-50"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ヒーロー画像 */}
          <FadeIn delay={150}>
            <div className="relative -mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:mx-0 lg:w-full overflow-hidden aspect-[4/3] lg:aspect-square lg:rounded-full bg-green-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/coaching-hero.png"
                alt="横手市・秋田のコーチングセッション VERDE FIT"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
