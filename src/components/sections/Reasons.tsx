import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type ReasonItem = {
  _key?: string;
  number?: string | null;
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

type ReasonsData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  reasonList?: ReasonItem[] | null;
};

const defaultReasons: ReasonItem[] = [
  {
    _key: "01",
    number: "01",
    title: "国家資格と豊富な実績",
    description:
      "柔道整復師、NSCA-CPT、認定ボディメイクコーチと確かな国家資格と民間資格を持つプロフェッショナルが施術・指導を担当します。10年間で延べ5,000人以上をサポートしてきた経験と最新の知識・技術を組み合わせてあなたに最適なアプローチを提供。横手市に信頼で選ばれる施術のプロが誕生します。",
    imageUrl: "/reason-01.jpg",
    imageAlt: "横手市の整体・パーソナルジムで国家資格を持つ施術者が施術する様子",
  },
  {
    _key: "02",
    number: "02",
    title: "トータルケアの独自メソッド",
    description:
      "整体だけ、トレーニングだけでは到達できない、真の健康状態へ。VERDE FITでは、身体を整える整体、動ける身体をつくるトレーニング、そして継続する習慣をつくるコーチングを統合。3つの専門性を掛け合わせた独自のメソッドで、一時的な改善ではなく、生涯続く健康的なライフスタイルを実現します。",
    imageUrl: "/reason-02.jpg",
    imageAlt: "横手市VERDE FITで腰痛改善と柔軟性向上を組み合わせたトータルケアの施術",
  },
  {
    _key: "03",
    number: "03",
    title: "完全個別対応の丁寧なサポート",
    description:
      "マンツーマンの完全個別対応であなただけのプログラムを作成。大手ジムのような画一的なメニューではなく、一人ひとりの身体の状態、生活習慣、目標に合わせたオーダーメイドの施術・トレーニングを提供します。キッズスペース完備でお子様連れでも安心してお越しいただけます。",
    imageUrl: "/reason-03.jpg",
    imageAlt: "横手市のパーソナルジムVERDE FITで個別カウンセリングをする様子",
  },
];

function ReasonVisual({
  imageUrl,
  imageAlt,
  align = "center",
}: {
  imageUrl: string | null | undefined;
  imageAlt: string;
  align?: "start" | "center" | "end";
}) {
  return (
    <div
      className={`aspect-square w-full max-w-[340px] mx-auto ${
        align === "start"
          ? "md:justify-self-start md:mx-0"
          : align === "end"
          ? "md:justify-self-end md:mx-0"
          : "md:justify-self-center"
      } overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]`}
    >
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div className="h-full w-full bg-gray-200" />
      )}
    </div>
  );
}

export default function Reasons({ data, sectionBg = "bg-[#e8f3ec]" }: { data?: ReasonsData | null; sectionBg?: string }) {
  const sectionTitle =
    data?.sectionTitle ?? "VERDE FITが選ばれる3つの理由";
  const sectionDescription =
    data?.sectionDescription ??
    "本物の技術と、真摯な想いで、あなたの健康を支えます";
  const reasons =
    data?.reasonList && data.reasonList.length > 0
      ? data.reasonList
      : defaultReasons;

  return (
    <section id="reasons" className={`${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-11 text-center md:mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-[1080px] space-y-6 md:space-y-8">
          {reasons.map((reason, i) => {
            const reverse = i % 2 === 1;
            // null は明示的に「画像なし（プレースホルダー）」、undefined はデフォルト画像にフォールバック
            const imgSrc = reason.imageUrl === undefined ? `/reason-0${i + 1}.jpg` : reason.imageUrl;
            const imgAlt = reason.imageAlt ?? reason.title ?? "理由画像";

            return (
              <FadeIn key={reason._key ?? i} delay={i * 100}>
                <article
                  className={`grid items-center gap-6 md:gap-10 ${
                    reverse
                      ? "md:grid-cols-[minmax(0,1fr)_360px]"
                      : "md:grid-cols-[360px_minmax(0,1fr)]"
                  }`}
                >
                  {!reverse && (
                    <ReasonVisual imageUrl={imgSrc} imageAlt={imgAlt} align="start" />
                  )}

                  <div className={`${reverse ? "order-last md:order-1" : ""} pt-1`}>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-[12px] font-bold text-white">
                        {reason.number ?? String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-sans text-2xl font-bold text-green-700 md:text-[28px]">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-[14px] leading-7 text-gray-700 md:text-[15px] md:leading-8">
                      {reason.description}
                    </p>
                  </div>

                  {reverse && (
                    <div className="order-first md:order-2">
                      <ReasonVisual imageUrl={imgSrc} imageAlt={imgAlt} align="end" />
                    </div>
                  )}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
