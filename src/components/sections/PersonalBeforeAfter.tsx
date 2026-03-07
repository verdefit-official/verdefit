import FadeIn from "@/components/FadeIn";

const voices = [
  {
    key: "male",
    label: "男性会員 before/after（30代）",
    result: "−30kg",
    text: "30kgの壁に何度もぶつかり、諦めかけていました。食事制限とトレーニングを組み合わせ、ダイエットコーチングを受けることで体だけでなく心まで変わりました。VERDE FITはこの変化を当たり前に導いてくれた場所です。",
  },
  {
    key: "female",
    label: "女性会員 before/after（20代）",
    result: "−20kg",
    text: "体重が戻ってしまうことが怖くてトレーニングを敬遠していましたが、食事管理と正しい運動の組み合わせで20kgを落とすことができました。本当に諦めなくて良かった。楽しい雰囲気で続けられたから、体だけでなく毎日が楽しくなりました。",
  },
];

export default function PersonalBeforeAfter() {
  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              体が変わると<br />人生も変わります。
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              VERDE FITで変わった方の声をご紹介します
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {voices.map((v, i) => (
            <FadeIn key={v.key} delay={i * 120}>
              <div className="rounded-xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
                <p className="text-xs font-semibold tracking-wide text-gray-400">{v.label}</p>
                <p className="mt-3 font-serif text-6xl font-bold text-green-700">{v.result}</p>
                <div className="my-5 h-px bg-gray-100" />
                <p className="text-sm leading-8 text-gray-600">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              ※個人の感想であり、効果を保証するものではありません。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
