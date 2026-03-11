import FadeIn from "@/components/FadeIn";

type FeatureItem = {
  _key?: string;
  title?: string | null;
  description?: string | null;
};

type CoachingFeaturesData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  features?: FeatureItem[] | null;
};

const defaultFeatures: FeatureItem[] = [
  {
    _key: "f1",
    title: "科学的習慣化メソッド",
    description:
      "脳科学・行動経済学・認知心理学に基づいた、エビデンスのあるアプローチ。横手市・秋田で唯一、科学的根拠に基づいた習慣改善プログラムを提供します。感覚や精神論ではなく、再現性の高いメソッドであなたをサポートします。",
  },
  {
    _key: "f2",
    title: "対話による思考アップデート",
    description:
      "コーチとの1対1の対話を通じて、あなたの思考パターンを深掘り。無意識に持っている「できない理由」を見つけ出し、新しい視点を提供します。横手市・秋田で健康サポートに悩む方の思考を根本から変えます。",
  },
  {
    _key: "f3",
    title: "地域密着の伴走サポート",
    description:
      "横手市・秋田県南エリアで、対面・オンライン両方に対応。あなたの生活環境やライフスタイルに合わせた、現実的なサポートを提供します。遠方の大手コーチングにはない、地域に根ざした継続的な伴走が可能です。",
  },
];

// アイコンはコードで固定管理（インデックス順: 科学的, 対話, 地域密着）
const featureIcons = [
  <svg key="science" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" className="h-10 w-10" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="dialog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" className="h-10 w-10" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-3 3v-3z" />
  </svg>,
  <svg key="location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" className="h-10 w-10" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>,
];

export default function CoachingFeatures({ data }: { data?: CoachingFeaturesData | null }) {
  const sectionTitle = data?.sectionTitle ?? "VERDE FITの習慣が変わる\n3つのメソッド";
  const sectionDescription = data?.sectionDescription ?? "思考・行動・環境を整え続く自分をつくる";
  const features =
    data?.features && data.features.length > 0 ? data.features : defaultFeatures;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f._key ?? i} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl bg-[#e8f3ec] p-8">
                <span className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
                  {featureIcons[i]}
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-green-700">{f.title}</h3>
                <p className="text-center text-[14px] leading-8 text-gray-600 md:text-[15px]">{f.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
