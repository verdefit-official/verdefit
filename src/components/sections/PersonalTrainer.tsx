import FadeIn from "@/components/FadeIn";

type PersonalTrainerData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  role?: string | null;
  name?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  beliefText?: string | null;
  quote?: string | null;
  closingText?: string | null;
  credentials?: string[] | null;
};

const defaultCredentials = [
  "NSCA-CPT（認定パーソナルトレーナー）",
  "柔道整復師 国家資格",
  "COMPASS認定プロコーチ",
  "トレーニング指導歴 10年",
  "延べ指導人数 5,000人以上",
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-green-600" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export default function PersonalTrainer({ data }: { data?: PersonalTrainerData | null }) {
  const sectionTitle = data?.sectionTitle ?? "トレーナー紹介";
  const sectionDescription = data?.sectionDescription ?? "なりたい理想の自分へとあなたを導きます";
  const role = data?.role ?? "代表トレーナー";
  const name = data?.name ?? "吉田　宗太郎";
  const imageUrl = data?.imageUrl ?? "/profile.jpg";
  const imageAlt = data?.imageAlt ?? "横手市のパーソナルジムVERDE FITトレーナー・ダイエット専門 吉田宗太郎";
  const beliefText = data?.beliefText ?? "私自身、過去最高体重95kgから65kgまでのダイエットに成功した経験があります。その過程で学んだのは、「正しい知識」と「継続できる環境」がいかに大切かということ。自己流では限界があり、プロのサポートがあってこそ、本当のダイエット成功があります。";
  const quote = data?.quote ?? "私が生まれ育った横手市で、同じように身体の悩みを抱える方々の力になりたい。その想いから、VERDE FITを立ち上げました。";
  const closingText = data?.closingText ?? "ダイエットは我慢や苦痛ではありません。正しい方法を知り、習慣を変えることで、誰でも理想の身体を手に入れることができます。横手市で本気で痩せたいと思っているあなた、一緒に頑張りましょう。";
  const credentials =
    data?.credentials && data.credentials.length > 0 ? data.credentials : defaultCredentials;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <FadeIn>
            <div className="overflow-hidden aspect-[4/5] w-full rounded-xl bg-[#e8f3ec]">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <p className="text-sm font-semibold text-green-700 md:text-base">{role}</p>
              <h3 className="mt-2 font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
                {name}
              </h3>
              <span className="mt-4 block h-1 w-16 bg-green-700" />

              <div className="mt-8">
                <p className="text-xl font-bold text-green-700 md:text-2xl">想い</p>
                <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700 md:text-[16px] md:leading-9">
                  <p>{beliefText}</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-green-600 px-6 py-5">
                <p className="text-center text-[15px] font-bold leading-8 text-green-800 md:text-[16px]">
                  {quote}
                </p>
              </div>

              <p className="mt-6 text-[15px] leading-8 text-gray-700 md:text-[16px] md:leading-9">{closingText}</p>

              <div className="mt-8">
                <p className="mb-4 text-xl font-bold text-green-700 md:text-2xl">保有資格・経歴</p>
                <ul className="space-y-3">
                  {credentials.map((c, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-gray-700 md:text-[16px]">
                      <CheckIcon />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
