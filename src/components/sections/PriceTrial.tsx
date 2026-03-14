import FadeIn from "@/components/FadeIn";

type PriceTrialData = {
  title?: string | null;
  duration?: string | null;
  badge?: string | null;
  regularPrice?: string | null;
  trialPrice?: string | null;
  detail1?: string | null;
  detail2?: string | null;
  description?: string | null;
  buttonText?: string | null;
};

export default function PriceTrial({
  data,
  bookingUrl,
}: {
  data?: PriceTrialData | null;
  bookingUrl?: string;
}) {
  const title = data?.title ?? "初回限定60分体験セッション";
  const duration = data?.duration ?? "60分";
  const badge = data?.badge ?? "初回限定";
  const regularPrice = data?.regularPrice ?? "¥11,000";
  const trialPrice = data?.trialPrice ?? "¥5,500";
  const detail1 = data?.detail1 ?? "カウンセリング20分";
  const detail2 = data?.detail2 ?? "整体・パーソナル40分";
  const detail3 =
    data?.description ?? "現在の身体の状態を確認し\nあなたに最適な改善プランをご提案します。";
  const buttonText = data?.buttonText ?? "体験予約をする";

  return (
    <section id="trial" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {title}
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mt-10 rounded-2xl bg-[#e8f3ec] px-8 py-12 text-center">
            <span className="inline-block rounded-full bg-[#6aaa82] px-6 py-1.5 text-xs font-semibold text-white">
              {badge}
            </span>
            <p className="mt-3 text-sm text-gray-500">{duration}</p>
            <p className="mt-2 font-serif text-4xl font-bold text-green-800 md:text-5xl">
              通常{regularPrice}→初回{trialPrice}
            </p>
            <p className="mt-1 text-xs text-gray-500">（税込）</p>
            <div className="mt-8 text-center">
              <p className="mb-3 font-semibold text-gray-700">内容</p>
              <div className="inline-flex flex-col items-start space-y-2">
                {[detail1, detail2].map((d, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-green-600 text-green-600">
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {d}
                  </p>
                ))}
              </div>
            </div>
            <p className="mt-6 whitespace-pre-line text-sm text-gray-500">{detail3}</p>
            <a
              href={bookingUrl ?? "#cta"}
              className="mt-8 inline-flex h-12 w-52 items-center justify-center rounded-lg bg-green-700 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              {buttonText}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
