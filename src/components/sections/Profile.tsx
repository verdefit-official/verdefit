import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type ProfileData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  role?: string | null;
  name?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  beliefDescription?: string | null;
  highlight?: string | null;
  closingText?: string | null;
  history?: string[] | null;
  credentials?: string[] | null;
};

const defaultHistory = [
  "1995.10.16 横手市出身",
  "平成26年3月 横手清陵高校卒業",
  "平成29年3月 盛岡医療福祉専門学校 柔道整復師学科 卒業",
  "秋田市の整骨院に10年間勤務",
  "令和8年4月 VERDE FIT 開業",
];

const defaultCredentials = [
  "柔道整復師 国家資格取得",
  "NSCA-CPT（認定パーソナルトレーナー）",
  "COMPASS認定プロコーチ",
  "整体・トレーニング指導歴 10年",
  "延べ施術人数 5,000人以上",
];

export default function Profile({ data, sectionBg = "bg-[#e8f3ec]" }: { data?: ProfileData | null; sectionBg?: string }) {
  const sectionTitle = data?.sectionTitle ?? "代表プロフィール";
  const sectionDescription =
    data?.sectionDescription ?? "なりたい理想の自分へとあなたを導きます";
  const role = data?.role ?? "代表 / 施術者";
  const name = data?.name ?? "吉田 宗太郎";
  const imageUrl = data?.imageUrl ?? "/profile.jpg";
  const imageAlt = data?.imageAlt ?? "横手市の整体師・パーソナルトレーナー 吉田宗太郎の施術風景";
  const beliefDescription =
    data?.beliefDescription ??
    "子どもの頃から体型にコンプレックスがあり、自分に自信を持てずに過ごしてきました。学生時代は柔道に打ち込みましたが、怪我が多く思うように練習ができず、身体と向き合うことの難しさを何度も感じました。このままの自分ではいたくないという思いからボディメイクに取り組み、過去最高体重95kgから65kgまでのダイエットに成功しました。";
  const highlight =
    data?.highlight ??
    "この経験から身体が変わると気持ちや行動も変わり、日常の見え方まで明るくなることを実感しました。";
  const closingText =
    data?.closingText ??
    "整体で体を整え、トレーニングで体を鍛え、コーチングで継続する習慣を身につける。この3つが揃って初めて、なりたい理想の自分と出会うことができます。私が生まれ育った横手市でお客様一人ひとりと真摯に向き合い理想の未来へと一緒に伴走していきます。";
  const history =
    data?.history && data.history.length > 0 ? data.history : defaultHistory;
  const credentials =
    data?.credentials && data.credentials.length > 0
      ? data.credentials
      : defaultCredentials;

  return (
    <section id="profile" className={`${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <FadeIn>
            <div
              className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
              style={{ aspectRatio: "4/5" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <p className="text-sm font-semibold text-green-700 md:text-base">{role}</p>
              <h3 className="mt-2 whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
                {name}
              </h3>
              <span className="mt-4 block h-1 w-16 bg-green-700" />

              <div className="mt-8">
                <p className="text-xl font-bold text-green-700 md:text-2xl">想い</p>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-gray-700 md:text-[16px] md:leading-9">
                  <p>{beliefDescription}</p>

                  <div className="rounded-xl border-2 border-green-700 bg-white px-6 py-5 text-center text-[15px] font-bold leading-8 text-green-800 md:text-[16px]">
                    {highlight}
                  </div>

                  <p>{closingText}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-green-700 md:text-2xl">経歴</h4>
                <ul className="mt-4 space-y-2 text-[15px] leading-8 text-gray-700 md:text-[16px]">
                  {history.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-green-700 md:text-2xl">保有資格</h4>
                <ul className="mt-4 space-y-2.5">
                  {credentials.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] font-medium text-gray-700 md:text-[16px]"
                    >
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-green-700 text-[11px] font-bold text-green-700">
                        ✓
                      </span>
                      <span>{c}</span>
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
