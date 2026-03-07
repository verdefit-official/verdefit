import FadeIn from "@/components/FadeIn";

const credentials = [
  "NSCA-CPT（認定パーソナルトレーナー）",
  "柔道整復師 国家資格",
  "COMPASS認定プロコーチ",
  "トレーニング指導歴 10年",
  "延べ指導人数 5,000人以上",
];

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-24 w-24 text-green-300" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-green-600" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-4.5" />
    </svg>
  );
}

export default function PersonalTrainer() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              トレーナー紹介
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              なりたい理想の自分へとあなたを導きます
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr] lg:gap-16">
          <FadeIn>
            <div className="overflow-hidden aspect-[4/5] w-full rounded-xl bg-[#e8f3ec]">
              <img
                src="/profile.png"
                alt="代表トレーナー 吉田宗太郎"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <p className="text-sm font-semibold text-green-700">代表トレーナー</p>
              <h3 className="mt-1 font-serif text-[36px] font-bold text-[#1f2937] md:text-[44px]">
                吉田　宗太郎
              </h3>
              <div className="mt-3 h-1 w-14 bg-green-700" />

              <div className="mt-8">
                <p className="mb-3 font-bold text-green-700">想い</p>
                <p className="text-sm leading-8 text-gray-600">
                  私自身、過去最高体重95kgから65kgまでのダイエットに成功した経験があります。その過程で学んだのは、「正しい知識」と「継続できる環境」がいかに大切かということ。自己流では限界があり、プロのサポートがあってこそ、本当のダイエット成功があります。
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-green-600 px-6 py-5">
                <p className="text-center text-sm font-bold leading-8 text-green-800">
                  私が生まれ育った横手市で、同じように身体の悩みを抱える方々の力になりたい。その想いから、VERDE FITを立ち上げました。
                </p>
              </div>

              <p className="mt-6 text-sm leading-8 text-gray-600">
                ダイエットは我慢や苦痛ではありません。正しい方法を知り、習慣を変えることで、誰でも理想の身体を手に入れることができます。横手市で本気で痩せたいと思っているあなた、一緒に頑張りましょう。
              </p>

              <div className="mt-8">
                <p className="mb-4 font-bold text-green-700">保有資格・経歴</p>
                <ul className="space-y-3">
                  {credentials.map((c, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
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
