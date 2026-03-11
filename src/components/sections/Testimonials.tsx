import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type VoiceItem = {
  _key?: string;
  goal?: string | null;
  demographics?: string | null;
  result?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
};

type TestimonialsData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  voiceList?: VoiceItem[] | null;
};

const defaultVoices: VoiceItem[] = [
  {
    _key: "v1",
    goal: "健康維持増進とボディメイク目的",
    demographics: "30代女性",
    result: "4ヶ月のトレーニングでウエストと\n下半身が引き締まり、\n姿勢と日ごろの効果を実感",
    imageUrl: "/testimonial-01.png",
  },
  {
    _key: "v2",
    goal: "ダイエット目的",
    demographics: "30代女性",
    result: "6ヶ月で10kg減量\nトレーニングも無理なく継続中",
    imageUrl: "/testimonial-02.png",
  },
  {
    _key: "v3",
    goal: "ダイエット目的",
    demographics: "60代女性",
    result: "3ヶ月で10kg減量\n週3回のトレーニングと食事管理で継続中",
    imageUrl: "/testimonial-03.png",
  },
  {
    _key: "v4",
    goal: "ボディメイク目的",
    demographics: "50代女性",
    result: "フォーム修正で効果が向上し\n見た目にも変化を実感",
    imageUrl: "/testimonial-04.png",
  },
  {
    _key: "v5",
    goal: "右肩を上げると肩が痛む",
    demographics: "60代女性",
    result: "原因にアプローチし\n短時間で効果を実感",
    imageUrl: "/testimonial-05.png",
  },
  {
    _key: "v6",
    goal: "O脚で膝が痛い",
    demographics: "40代女性",
    result: "長年痛めていた痛み\n1回でここまで改善",
    imageUrl: "/testimonial-06.png",
  },
];

export default function Testimonials({ data }: { data?: TestimonialsData | null }) {
  const sectionTitle = data?.sectionTitle ?? "お客様の声";
  const sectionDescription =
    data?.sectionDescription ?? "実際に改善を実感されたお客様の声をご紹介します";
  const voices =
    data?.voiceList && data.voiceList.length > 0
      ? data.voiceList
      : defaultVoices;

  return (
    <section id="testimonials" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-4 text-sm text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {voices.map((v, i) => (
            <FadeIn key={v._key ?? i} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="bg-[#e8f2ec] px-5 py-4 text-center">
                  <p className="text-[15px] font-bold text-[#1f2937]">{v.goal}</p>
                  <p className="mt-1 text-sm text-gray-500">{v.demographics}</p>
                </div>

                <div className="flex flex-col items-center px-6 pt-5 pb-2">
                  <p className="mb-1 text-[11px] text-gray-400">※写真はイメージです</p>
                  <p className="mb-4 text-[12px] text-gray-500">定期的な利用者で生まれる実感</p>

                  <div className="h-36 w-36 overflow-hidden rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.imageUrl ?? "/testimonial-01.png"}
                      alt={v.imageAlt ?? v.demographics ?? "お客様"}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center px-5 py-5 text-center">
                  <p className="text-[15px] font-bold leading-7 text-[#1f2937] whitespace-pre-line">
                    {v.result}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/voice"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-green-700 px-8 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
          >
            お客様の声一覧へ
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
