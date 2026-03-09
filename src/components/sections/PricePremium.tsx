import FadeIn from "@/components/FadeIn";

const features = [
  "月8回 60分 パーソナルトレーニング",
  "月4回 60分 コーチング",
];

const supports = [
  "スターターサポート",
  "オーダーサポート",
  "24時間LINEサポート",
  "食事管理",
  "プログラム作成",
];

const description =
  "VERDE FITでは、あなたの悩みを解決します。体の悩みに対する整体、体の改善を求めるパーソナルトレーニング、習慣を整えるコーチング。この3つを組み合わせることで、あなたの体が変わります。\n通常のダイエットではなく、改善・強化・悩みのすべてを一つで。今まで変われなかった悩みでも、充実したサポートからあなたの変化・改善を実現します。";

export default function PricePremium({
  bookingUrl,
  lineUrl,
}: {
  bookingUrl?: string;
  lineUrl?: string;
}) {
  return (
    <section id="premium" className="scroll-mt-24 bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              トータルケアプレミアムプラン
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="rounded-2xl border-2 border-green-700 bg-white px-8 py-10 md:px-12 md:py-12">
            <div className="text-center">
              <span className="inline-block rounded-full bg-amber-500 px-5 py-1.5 text-xs font-bold text-white">
                VERDE FIT式ボディメイクコーチング
              </span>
              <p className="mt-4 text-sm font-semibold text-gray-500">６ヶ月プラン</p>
              <p className="mt-2 font-serif text-[52px] font-bold leading-none text-green-700">
                ¥498,000
              </p>
              <p className="mt-1 text-xs text-gray-400">（税込）</p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="mb-3 text-center text-sm font-bold text-[#1f2937]">内容</p>
              <div className="space-y-2">
                {features.map((f, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-green-700" />
                    {f}
                  </p>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {supports.map((s, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0 text-green-600"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {s}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-8 whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={bookingUrl ?? "#cta"}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-8 text-sm font-semibold text-white transition-colors hover:bg-green-800"
              >
                予約はこちら
              </a>
              <a
                href={lineUrl ?? "#cta"}
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-green-700 px-8 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
