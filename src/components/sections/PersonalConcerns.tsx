import FadeIn from "@/components/FadeIn";

const concerns = [
  {
    key: "self",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "自己流ダイエットの限界",
    description:
      "とりあえず食事量を減らす、動画を見て真似する、歩いてみる。多くの方が一度は試しています。しかし身体の状態や生活習慣を考えずに行うダイエットは効果が出ないだけでなく疲労や不調の原因にもなります。必要なのは努力量ではなく、自分の身体に合った方法です。合わないやり方を続けるほど「頑張っているのに変わらない」と感じてしまいます。",
  },
  {
    key: "rebound",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700" aria-hidden="true">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
    title: "リバウンドの原因",
    description:
      "短期間の無理な食事制限や急な運動で体重は一時的に落ちます。しかし身体は急激な変化を「危険」と判断し、代謝を下げて元に戻そうとします。その状態で元の生活に戻れば体重も戻るのは自然な反応です。問題は意志の弱さではなく、続けられない方法を選んでいることにあります。生活の中で維持できる習慣を作らなければ体型は安定しません。",
  },
  {
    key: "exercise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700" aria-hidden="true">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v7" />
        <path d="M8 21l4-7 4 7" />
        <path d="M8 13H5M19 13h-3" />
      </svg>
    ),
    title: "間違った運動の選び方",
    description:
      "「とりあえず走る」「とにかく筋肉を増やす」と始めても、身体の使い方が合っていなければ効果は出にくくなります。姿勢や関節の動きが整っていない状態で運動すると、効かせたい筋肉ではなく別の部位に負担がかかり、疲れるだけで変化を感じにくくなります。必要なのは量ではなく、今の身体に合ったトレーニングの選択です。",
  },
  {
    key: "diet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "食事制限が続かない理由",
    description:
      "極端な糖質制限や我慢中心の食事は、最初は体重が落ちても長く続きません。日常生活の中で無理を続ければ、ストレスや反動によって食欲が増し、元の生活に戻ってしまいます。大切なのは「食べない」ことではなく、「どう食べるか」を知ることです。生活に合った食習慣を身につけることで、無理なく体型を維持できるようになります。",
  },
  {
    key: "alone",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-700" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "一人では続けられない環境",
    description:
      "ダイエットは一人で頑張ろうとするほど続かなくなります。忙しい日常の中では優先順位が下がり、「今日はいいか」が積み重なっていきます。やる気の問題ではなく、確認してくれる人や方向性を修正してくれる存在がいないことが原因です。正しい方法を知り、定期的に振り返る環境があることで初めて習慣は定着していきます。",
  },
];

export default function PersonalConcerns() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
              ダイエットをしても続かない、効果が出ない本当の理由
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-10">
          {concerns.map((c, i) => (
            <FadeIn key={c.key} delay={i * 60}>
              <div className={i > 0 ? "border-t border-gray-100 pt-10" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f3ec]">
                    {c.icon}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1f2937] md:text-2xl">{c.title}</h3>
                </div>
                <p className="text-sm leading-8 text-gray-600 md:text-[15px]">{c.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
