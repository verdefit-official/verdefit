import FadeIn from "@/components/FadeIn";

const steps = [
  {
    key: "contact",
    number: "01",
    title: "問い合わせ",
    description: "LINE・電話・WEBから\nお気軽にご連絡",
  },
  {
    key: "counseling",
    number: "02",
    title: "カウンセリング",
    description: "お悩み・目標を\n丁寧にヒアリング",
  },
  {
    key: "trial",
    number: "03",
    title: "体験",
    description: "実際のトレーニングを\n体験していただきます",
  },
  {
    key: "join",
    number: "04",
    title: "入会",
    description: "ご納得いただけたら\n本格スタート",
  },
];

export default function PersonalFlow() {
  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              体験トレーニングの流れ
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              お問い合わせから体験、スタートまでの流れをご紹介します
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-start sm:gap-0">
            {steps.map((step, i) => (
              <div key={step.key} className="flex flex-1 items-start sm:flex-col">
                {/* ステップ本体 */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 md:h-20 md:w-20">
                    <span className="font-serif text-xl font-bold text-white md:text-2xl">{step.number}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#1f2937] md:text-xl">{step.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-center text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* 矢印 */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center px-2 pt-6 md:pt-8">
                    <span className="text-xl text-green-400">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
