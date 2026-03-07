import FadeIn from "@/components/FadeIn";

const credentials = [
  "NSCA-CPT（全米認定パーソナルトレーナー）",
  "柔道整復師（国家資格）",
  "COMPASS認定コーチング",
  "トレーニング指導歴 10年以上",
  "延べ指導数 5,000名以上",
];

export default function PersonalTrainer() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              トレーナー紹介
            </h2>
          </div>
        </FadeIn>

        <div className="grid items-center gap-10 md:grid-cols-[280px_1fr] lg:gap-16">
          <FadeIn>
            <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-[#e8f3ec] md:mx-0 md:h-72 md:w-72">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-24 w-24 text-green-300" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <p className="text-sm font-semibold text-green-700">代表トレーナー</p>
              <h3 className="mt-1 font-serif text-[32px] font-bold text-[#1f2937] md:text-[40px]">
                吉田 宗太郎
              </h3>

              <p className="mt-5 text-sm leading-8 text-gray-700">
                自身も95kgから65kgへの30kgダイエットに成功した経験を持つ。「続けられる習慣づくり」の大切さを身をもって知っているからこそ、一人ひとりの生活スタイルに合ったトレーニングと食事管理を提案。楽しさを感じながら、着実に理想の体に近づけるよう、全力でサポートします。
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-700">
                一般的なジムでは変われなかった方、何度も挫折してきた方こそ、ぜひVERDE FITにお越しください。あなたの「変わりたい」という気持ちに、全力で応えます。
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">保有資格・経歴</p>
                <ul className="mt-3 space-y-2">
                  {credentials.map((c, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-green-700 text-[10px] font-bold text-green-700">
                        ✓
                      </span>
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
