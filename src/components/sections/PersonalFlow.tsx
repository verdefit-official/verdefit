import FadeIn from "@/components/FadeIn";

const steps = [
  {
    key: "step1",
    number: "01",
    title: "予約",
    description: "LINE・WEBフォームからお気軽にご予約ください。",
  },
  {
    key: "step2",
    number: "02",
    title: "カウンセリング",
    description: "体組成・目標・生活習慣を丁寧にカウンセリング。あなたに合ったプランをご提案します。",
  },
  {
    key: "step3",
    number: "03",
    title: "体験トレーニング",
    description: "実際のトレーニングを体験。楽しみながら効果を実感していただけます。",
  },
  {
    key: "step4",
    number: "04",
    title: "入会・スタート",
    description: "プランをお選びいただき、いよいよ本格スタート。理想の体へ向けて一緒に歩んでいきます。",
  },
];

export default function PersonalFlow() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              体験トレーニングの流れ
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              初めての方も安心してお越しください
            </p>
          </div>
        </FadeIn>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.key} delay={i * 80}>
              <div className="relative flex flex-col items-center rounded-xl bg-[#e8f3ec] px-6 py-8 text-center">
                <span className="font-serif text-4xl font-bold text-green-700">{step.number}</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#1f2937]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{step.description}</p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-green-300 lg:block" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
