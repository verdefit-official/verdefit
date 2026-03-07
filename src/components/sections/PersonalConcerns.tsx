import FadeIn from "@/components/FadeIn";

const concerns = [
  {
    key: "rebound",
    title: "リバウンドの繰り返し",
    description:
      "食事制限や運動を頑張っても、体重が戻ってしまう。何度も挑戦しているのに結果が続かない。なぜうまくいかないのか、自分に問題があるのかと自信を失ってしまう。",
  },
  {
    key: "diet",
    title: "食事制限が辛くて続かない",
    description:
      "厳しい食事制限はストレスになり、反動で食べ過ぎてしまう。食べること自体を楽しめなくなり、日常生活まで窮屈に感じてしまう。無理な制限ではなく、続けられる食事管理が必要。",
  },
  {
    key: "alone",
    title: "一人では続けられない",
    description:
      "ジムに通ってみたものの何をすれば良いかわからず、モチベーションが続かない。自己流では限界があり、正しい方向性で取り組めているか不安。誰かに伴走してもらいたい。",
  },
];

export default function PersonalConcerns() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              パーソナルトレーニングを<br className="sm:hidden" />続けてきたのに…
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              こんなお悩みはありませんか？
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {concerns.map((c, i) => (
            <FadeIn key={c.key} delay={i * 80}>
              <div className="rounded-xl border border-gray-100 bg-white px-7 py-8 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#1f2937]">{c.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{c.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 rounded-xl border-2 border-green-700 bg-[#e8f3ec] px-8 py-8 text-center md:px-16 md:py-10">
            <p className="text-lg font-bold text-[#1f2937] md:text-xl">
              その悩み、あなたの意志の問題ではありません。
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-gray-700 md:text-[15px]">
              正しい方法・正しいサポートがなければ、どれだけ頑張っても結果は出にくいものです。<br />
              VERDE FITでは、あなたの身体と生活習慣を丁寧に分析し、<br className="hidden md:block" />
              「続けられる」仕組みをゼロから一緒に作り上げます。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
