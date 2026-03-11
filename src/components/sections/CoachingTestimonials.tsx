import FadeIn from "@/components/FadeIn";

type TestimonialItem = {
  _key?: string;
  name?: string | null;
  demographics?: string | null;
  before?: string | null;
  after?: string | null;
  text?: string | null;
};

type CoachingTestimonialsData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  testimonials?: TestimonialItem[] | null;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    _key: "t1",
    name: "M.Kさん",
    demographics: "30代女性・横手市在住",
    before: "ダイエットが続かず自信喪失",
    after: "3ヶ月で運動習慣が定着",
    text: "何度もダイエットに失敗していましたが、コーチングで「なぜ続かないのか」の本質が分かりました。横手市で地域に寄り添ったサポートが受けられるのも魅力でした。",
  },
  {
    _key: "t2",
    name: "T.Sさん",
    demographics: "40代男性・秋田市在住",
    before: "仕事のストレスで不規則な生活",
    after: "2ヶ月で睡眠・食事が改善",
    text: "忙しくて健康を後回しにしていましたが、小さな行動から始めるアプローチで無理なく習慣が変わりました。秋田でオンラインにも対応していて助かりました。",
  },
  {
    _key: "t3",
    name: "Y.Nさん",
    demographics: "50代女性・横手市在住",
    before: "更年期で体調不良が続く",
    after: "4ヶ月で心身ともに安定",
    text: "年齢のせいだと諦めていましたが、思考を変えることで行動が変わり、体調が改善しました。横手市で親身になってくれるコーチに出会えて感謝しています。",
  },
];

function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8 text-green-600" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function CoachingTestimonials({ data }: { data?: CoachingTestimonialsData | null }) {
  const sectionTitle = data?.sectionTitle ?? "習慣が変わったお客様の声";
  const sectionDescription =
    data?.sectionDescription ?? "横手市・秋田エリアで思考と習慣が変わった体験談";
  const testimonials =
    data?.testimonials && data.testimonials.length > 0
      ? data.testimonials
      : defaultTestimonials;

  return (
    <section id="testimonials" className="bg-[#e8f3ec] py-20 md:py-24">
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
          {testimonials.map((t, i) => (
            <FadeIn key={t._key ?? i} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                {/* グリーンヘッダー */}
                <div className="flex items-center gap-4 bg-green-500 px-6 py-6">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
                    <PersonIcon />
                  </span>
                  <div>
                    <p className="text-base font-bold text-white">{t.name}</p>
                    <p className="mt-0.5 text-sm text-green-100">{t.demographics}</p>
                  </div>
                </div>

                {/* BEFORE / AFTER + テキスト */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <div className="mb-5 space-y-2">
                    <p className="flex items-center gap-2 text-sm">
                      <span className="inline-block rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-500">BEFORE</span>
                      <span className="text-gray-700">{t.before}</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <span className="inline-block rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">AFTER</span>
                      <span className="text-gray-700">{t.after}</span>
                    </p>
                  </div>
                  <p className="text-[14px] leading-8 text-gray-600 md:text-[15px]">{t.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
