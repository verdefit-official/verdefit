import FadeIn from "@/components/FadeIn";

const symptomIcons = [
  "/symptom-01.png",
  "/symptom-02.png",
  "/symptom-03.png",
  "/symptom-04.png",
  "/symptom-05.png",
  "/symptom-06.png",
];

type DisorderItem = {
  _key?: string;
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
};

type DisordersData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  items?: DisorderItem[] | null;
};

const defaultItems: DisorderItem[] = [
  {
    _key: "1",
    title: "お尻から足にかけてのしびれ・坐骨神経痛",
    description:
      "骨盤の歪みや筋緊張で神経が圧迫され起こります。骨盤と股関節の動きを整え、神経への負担を軽減することで、しびれや歩行時の痛み改善を目指します。",
  },
  {
    _key: "2",
    title: "慢性的な腰痛・ぎっくり腰（急性腰痛）",
    description:
      "蓄積した負担が限界を超えて炎症を起こした状態。患部に触れずに全身バランスを調整し、痛みの早期改善と再発しにくい身体づくりを行います。",
  },
  {
    _key: "3",
    title: "首こりや頭痛につながるストレートネック",
    description:
      "姿勢不良により首へ負担が集中しています。頸椎と肩甲骨の可動性を整え、血流と神経の働きを改善することで慢性的な不調を軽減します。",
  },
  {
    _key: "4",
    title: "反り腰・姿勢の歪み",
    description:
      "筋力低下や生活習慣により支え方が崩れています。骨格の位置を整え、正しく動ける身体へ導くことで肩こりや腰痛を根本から改善します。",
  },
  {
    _key: "5",
    title: "四十肩・五十肩",
    description:
      "肩関節の動きが制限され炎症が続く状態です。肩だけでなく肩甲骨や胸郭まで調整し、腕が上がる日常動作の回復を目指します。",
  },
  {
    _key: "6",
    title: "膝痛・股関節痛",
    description:
      "体重のかかり方や歩行バランスの崩れが原因です。骨盤と下肢のアライメントを整え、関節への負担を分散させて痛みの改善を図ります。",
  },
];

export default function SeitaiSymptoms({ data }: { data?: DisordersData | null }) {
  const sectionTitle = data?.sectionTitle ?? "放置すると起こりやすい不調の例";
  const sectionDescription = data?.sectionDescription ?? null;
  const items =
    data?.items && data.items.length > 0 ? data.items : defaultItems;

  return (
    <section className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center md:mb-12">
            <h2 className="whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {sectionTitle}
            </h2>
            {sectionDescription && (
              <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-xl">
                {sectionDescription}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item._key ?? i} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-200 bg-white p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.imageUrl ?? symptomIcons[i % symptomIcons.length]} alt="" className="h-full w-full object-contain" aria-hidden="true" />
                </span>
                <h3 className="mb-3 text-[17px] font-bold leading-snug text-[#1f2937] md:text-[18px]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-7 text-gray-600 md:text-[15px]">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
