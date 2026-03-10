import FadeIn from "@/components/FadeIn";

// 内部リンクはコードで固定管理（インデックス順: 整体, パーソナル, コーチング）
const STATIC_HREFS: (string | undefined)[] = ["/seitai", "/personal-training", "/coaching"];

type ServiceItem = {
  _key?: string;
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

type ServicesData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  serviceList?: ServiceItem[] | null;
};

const defaultServices: ServiceItem[] = [
  {
    _key: "seitai",
    title: "整体",
    description:
      "厚生労働省認可の国家資格保有者があなたにあった最適な施術を提供。肩こり・腰痛・姿勢の歪みなど、痛みの原因を徹底的に分析し根本改善を目指します。10年の実績で培った確かな技術で痛みのない日常を取り戻しましょう。横手市でプロフェッショナルな整体をあなたに。",
    buttonText: "整体の詳細を見る",
    imageUrl: "/service-seitai.png",
    imageAlt: "横手市で腰痛・骨盤矯正を行う整体施術の様子",
  },
  {
    _key: "personal",
    title: "パーソナルトレーニング",
    description:
      "NSCA-CPT資格保有トレーナーによる完全個別指導。運動が苦手な方でも安心して始められる、あなた専用のプログラムを作成します。食事指導も含めた総合的なサポートで、理想の身体づくりを実現。横手市で本格的なパーソナルトレーニングを。",
    buttonText: "パーソナルの詳細を見る",
    imageUrl: "/service-personal.png",
    imageAlt: "横手市のパーソナルジムVERDE FITでのマンツーマン指導",
  },
  {
    _key: "coaching",
    title: "コーチング",
    description:
      "認定コーチによる習慣形成サポート。「続かない」を「続く」に変えるメンタルケア。目標達成に向けた思考パターンの改善と行動習慣の確立で、長期的な健康維持を実現します。横手市で、あなたの人生を変える習慣づくりを始めませんか。",
    buttonText: "コーチングの詳細を見る",
    imageUrl: "/service-coaching.png",
    imageAlt: "横手市のジムVERDE FITでの習慣化コーチングセッション",
  },
];

export default function Services({ data }: { data?: ServicesData | null }) {
  const sectionTitle =
    data?.sectionTitle ??
    "なりたい理想の自分になるために\n最適なサポートをご提案します";
  const sectionDescription =
    data?.sectionDescription ??
    "VERDE FIT では、3つの専門サービスを通じて、目標達成を支援。";
  const services =
    data?.serviceList && data.serviceList.length > 0
      ? data.serviceList
      : defaultServices;

  return (
    <section id="services" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px] whitespace-pre-line">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const href = STATIC_HREFS[i];
            return (
              <FadeIn key={service._key ?? i} delay={i * 120}>
                <article className="flex h-full flex-col bg-white shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
                  <div className="h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.imageUrl ?? "/service-seitai.png"}
                      alt={service.imageAlt ?? service.title ?? "サービス画像"}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-7 pb-8 pt-7">
                    <h3 className="whitespace-nowrap font-serif text-[22px] font-bold leading-tight tracking-tight text-green-700 lg:text-[24px]">
                      {service.title}
                    </h3>
                    <span className="mb-5 mt-3 h-1 w-16 bg-green-700" />

                    <p className="mb-7 flex-1 text-[15px] leading-8 text-gray-700">
                      {service.description}
                    </p>

                    {href ? (
                      <a
                        href={href}
                        className="inline-flex h-12 items-center justify-center rounded-md border-2 px-6 text-sm font-semibold transition-colors border-green-700 text-green-700 hover:bg-green-50"
                      >
                        {service.buttonText ?? "詳細を見る"} →
                      </a>
                    ) : (
                      <span className="inline-flex h-12 items-center justify-center rounded-md border-2 px-6 text-sm font-semibold border-gray-300 text-gray-400 cursor-default">
                        {service.buttonText ?? "詳細を見る"} →
                      </span>
                    )}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
