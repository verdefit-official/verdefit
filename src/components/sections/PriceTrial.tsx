import FadeIn from "@/components/FadeIn";

type PriceTrialData = {
  badge?: string | null;
  regularPrice?: string | null;
  trialPrice?: string | null;
  detail1?: string | null;
  detail2?: string | null;
  detail3?: string | null;
  buttonText?: string | null;
};

export default function PriceTrial({
  data,
  bookingUrl,
}: {
  data?: PriceTrialData | null;
  bookingUrl?: string;
}) {
  const badge = data?.badge ?? "初回限定";
  const regularPrice = data?.regularPrice ?? "¥11,000";
  const trialPrice = data?.trialPrice ?? "¥5,500";
  const detail1 = data?.detail1 ?? "カウンセリング 30分";
  const detail2 = data?.detail2 ?? "トレーニング体験 60分";
  const detail3 = data?.detail3 ?? "身体の状態・目標に合ったプログラムをご提案します";
  const buttonText = data?.buttonText ?? "体験予約をする";

  return (
    <section className="bg-[#e8f3ec] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[44px]">
              初回限定90分体験セッション
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white px-8 py-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <span className="inline-block rounded-full bg-green-700 px-5 py-1.5 text-xs font-semibold text-white">
              {badge}
            </span>
            <div className="mt-5 flex flex-wrap items-end justify-center gap-3">
              <span className="font-serif text-xl text-gray-400 line-through">
                通常{regularPrice}
              </span>
              <span className="font-serif text-5xl font-bold text-green-700">
                初回{trialPrice}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-400">（税込）</p>
            <div className="mt-6 space-y-2 text-left">
              {[detail1, detail2, detail3].map((d, i) => (
                <p key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  {d}
                </p>
              ))}
            </div>
            <a
              href={bookingUrl ?? "#cta"}
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-green-700 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              {buttonText}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
