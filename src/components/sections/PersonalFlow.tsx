import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type FlowStep = {
  number?: string | null;
  title?: string | null;
  description?: string | null;
};

type PersonalFlowData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  steps?: FlowStep[] | null;
};

const defaultSteps = [
  { key: "contact", number: "01", title: "問い合わせ", description: "LINE・電話・WEBから\nお気軽にご連絡" },
  { key: "counseling", number: "02", title: "カウンセリング", description: "お悩み・目標を\n丁寧にヒアリング" },
  { key: "trial", number: "03", title: "体験", description: "実際のトレーニングを\n体験していただきます" },
  { key: "join", number: "04", title: "入会", description: "ご納得いただけたら\n本格スタート" },
];

export default function PersonalFlow({ data }: { data?: PersonalFlowData | null }) {
  const sectionTitle = data?.sectionTitle ?? "体験トレーニングの流れ";
  const sectionDescription = data?.sectionDescription ?? "お問い合わせから体験、スタートまでの流れをご紹介します";
  const steps =
    data?.steps && data.steps.length > 0
      ? data.steps.map((s, i) => ({
          key: defaultSteps[i]?.key ?? String(i),
          number: s.number ?? defaultSteps[i]?.number ?? String(i + 1).padStart(2, "0"),
          title: s.title ?? "",
          description: s.description ?? "",
        }))
      : defaultSteps;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl whitespace-pre-line text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          {/* デスクトップ：横並び */}
          <div className="hidden sm:flex items-start">
            {steps.map((step, i) => (
              <>
                {/* ステップ */}
                <div key={step.key} className="flex flex-1 flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 md:h-20 md:w-20">
                    <span className="font-serif text-xl font-bold text-white md:text-2xl">{step.number}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#1f2937] md:text-xl">{step.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">{step.description}</p>
                </div>

                {/* 矢印（最後のステップ以外） */}
                {i < steps.length - 1 && (
                  <div className="flex h-16 w-8 shrink-0 items-center justify-center md:h-20">
                    <span className="text-xl text-green-400">→</span>
                  </div>
                )}
              </>
            ))}
          </div>

          {/* モバイル：縦並び */}
          <div className="flex flex-col gap-8 sm:hidden">
            {steps.map((step, i) => (
              <div key={step.key} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
                  <span className="font-serif text-xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#1f2937]">{step.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">{step.description}</p>
                {i < steps.length - 1 && (
                  <span className="mt-6 text-xl text-green-400">↓</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
