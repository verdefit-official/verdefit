import FadeIn from "@/components/FadeIn";

type BACard = {
  label?: string | null;
  result?: string | null;
  text?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

type PersonalBeforeAfterData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  cards?: BACard[] | null;
};

const defaultCards = [
  {
    key: "trainer",
    label: "代表のbefore/after（30代）在住",
    result: "−30kg達成",
    text: "私は子供の頃から体型にコンプレックスがあり自分に自信が持てずに生きてきました。こんな人生を変えたいとパーソナルトレーナーの資格を取得しトレーニングと食習慣を見直すことで身体が変わり、考え方や人生まで前向きに変わりました。VERDE FITはこの経験をもとに『誰にでも変わることができる』ことを伝えるために作った場所です。",
    imageUrl: "/images/personal/personal-trainer.png",
  },
  {
    key: "monitor",
    label: "モニター様before/after（20代）",
    result: "−20kg達成",
    text: "運動習慣がなく体重が増えてしまいましたが、トレーニングと食事習慣の見直しで20kgを達成しました。最初は体力に不安もありましたが、無理のないペースで続けることで徐々に身体が変化。体型だけでなく体力も向上し以前より疲れにくくなりました。正しい方法で続ければ身体は確実に変わることを実感しています。",
    imageUrl: "/images/personal/personal-client.png",
  },
  {
    key: "future",
    label: "未来のお客様",
    result: "次はあなたの番です",
    text: "VERDE FITはこれからたくさんの方の人生の転換点となっていきます。『自分にも変われるだろうか』そう思った今が、その一歩を踏み出すタイミングです。この場所にあなたの変化が加わる日を楽しみにしています。",
    imageUrl: "/images/personal/personal-ba-trainer.png",
  },
];

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-16 w-16 text-green-300" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function PersonalBeforeAfter({ data }: { data?: PersonalBeforeAfterData | null }) {
  const sectionTitle = data?.sectionTitle ?? "身体が変わると人生も変わります。";
  const sectionDescription = data?.sectionDescription ?? "私自身とモニター様の変化をご紹介します";
  const cards =
    data?.cards && data.cards.length > 0
      ? data.cards.map((c, i) => ({
          key: defaultCards[i]?.key ?? String(i),
          label: c.label ?? defaultCards[i]?.label ?? "",
          result: c.result ?? defaultCards[i]?.result ?? "",
          text: c.text ?? defaultCards[i]?.text ?? "",
          imageUrl: c.imageUrl ?? defaultCards[i]?.imageUrl ?? null,
          imageAlt: c.imageAlt ?? null,
        }))
      : defaultCards.map((c) => ({ ...c, imageAlt: null }));

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <FadeIn key={card.key} delay={i * 100}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                {/* 画像エリア */}
                <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: "3/4" }}>
                  {card.imageUrl ? (
                    <img src={card.imageUrl} alt={card.imageAlt ?? card.label ?? ""} className="absolute inset-0 h-full w-full object-cover object-center" />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <PersonIcon />
                    </div>
                  )}
                </div>

                {/* テキストエリア */}
                <div className="flex flex-1 flex-col px-7 py-6">
                  <p className="mb-3 text-xs font-semibold text-green-700">{card.label}</p>
                  <p className="mb-4 font-serif text-[32px] font-bold leading-tight text-green-700">
                    {card.result}
                  </p>
                  <p className="flex-1 text-sm leading-8 text-gray-600">{card.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-12 text-center">
            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              もっと詳しいお客様の声はこちら →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
