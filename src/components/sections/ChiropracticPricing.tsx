import FadeIn from "@/components/FadeIn";

type CourseItem = {
  _key?: string;
  name?: string | null;
  price?: string | null;
  description?: string | null;
};

type CouponItem = {
  _key?: string;
  name?: string | null;
  price?: string | null;
  unit?: string | null;
  validity?: string | null;
};

type OptionItem = {
  _key?: string;
  name?: string | null;
  price?: string | null;
};

type ChiropracticPricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  trialBadge?: string | null;
  trialTitle?: string | null;
  trialPrice?: string | null;
  trialDetails?: string | null;
  courses?: CourseItem[] | null;
  options?: OptionItem[] | null;
  couponSectionTitle?: string | null;
  coupons?: CouponItem[] | null;
};

const defaultOptions: OptionItem[] = [
  { _key: "o1", name: "骨盤矯正", price: "¥1,500" },
];

const defaultCourses: CourseItem[] = [
  { _key: "c1", name: "30分整体", price: "¥4,400", description: "整体 / 30分コース" },
  { _key: "c2", name: "60分整体", price: "¥8,800", description: "整体 / 60分コース" },
  { _key: "c3", name: "90分整体", price: "¥13,200", description: "整体 / 120分コース" },
];

const defaultCoupons: CouponItem[] = [
  { _key: "k1", name: "60分整体×4回", price: "¥34,000", unit: "税込", validity: "有効期限2か月" },
  { _key: "k2", name: "60分整体×8回", price: "¥61,600", unit: "税込 / 月", validity: "有効期限4か月" },
  { _key: "k3", name: "60分整体×12回", price: "¥84,000", unit: "税込", validity: "有効期限6か月" },
  { _key: "k4", name: "90分整体×12回", price: "¥126,000", unit: "税込 / 月", validity: "有効期限6か月" },
];

export default function ChiropracticPricing({
  data,
  sectionBg = "bg-[#e8f3ec]",
}: {
  data?: ChiropracticPricingData | null;
  sectionBg?: string;
}) {
  const sectionTitle = data?.sectionTitle ?? "料金案内";
  const sectionDescription = data?.sectionDescription ?? "明瞭な料金体系で、安心してご利用いただけます";
  const trialBadge = data?.trialBadge ?? "初回限定";
  const trialTitle = data?.trialTitle ?? "初回カウンセリング整体";
  const trialPrice = data?.trialPrice ?? "¥5,500";
  const trialDetails = data?.trialDetails ?? "カウンセリング30分+整体30分/60分";
  const courses = data?.courses && data.courses.length > 0 ? data.courses : defaultCourses;
  const options = data?.options && data.options.length > 0 ? data.options : defaultOptions;
  const couponSectionTitle = data?.couponSectionTitle ?? "回数券";
  const coupons = data?.coupons && data.coupons.length > 0 ? data.coupons : defaultCoupons;

  return (
    <section id="pricing" className={`${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <FadeIn>
          <div className="mb-10 text-center md:mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 初回限定カード */}
        <FadeIn>
          <div className="mx-auto mb-8 max-w-sm rounded-xl bg-white px-8 py-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <span className="inline-block rounded-full bg-green-700 px-4 py-1 text-[12px] font-semibold text-white">
              {trialBadge}
            </span>
            <h3 className="mt-4 text-base font-bold text-[#1f2937] md:text-lg">{trialTitle}</h3>
            <p className="mt-3 font-serif text-5xl font-bold text-green-700">{trialPrice}</p>
            <p className="mt-1 text-xs text-gray-400">（税込）</p>
            <p className="mt-3 text-sm text-gray-600">{trialDetails}</p>
          </div>
        </FadeIn>

        {/* 通常コース 3列 */}
        <FadeIn delay={80}>
          <div className="mb-8 grid grid-cols-3 gap-3 md:gap-4">
            {courses.map((course, i) => (
              <div
                key={course._key ?? i}
                className="rounded-xl bg-white px-3 py-6 text-center shadow-sm md:px-5"
              >
                <p className="text-xs text-gray-500 md:text-sm">{course.name}</p>
                <p className="mt-2 font-serif text-2xl font-bold text-green-700 md:text-[32px]">
                  {course.price}
                </p>
                <p className="mt-1 text-[10px] text-gray-400 md:text-[11px]">（税込）</p>
                <p className="mt-2 text-[11px] text-gray-500 md:text-xs">{course.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* オプションカード */}
        <FadeIn delay={120}>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {options.map((option, i) => (
              <div
                key={option._key ?? i}
                className="w-full max-w-xs rounded-xl bg-white px-6 py-6 text-center shadow-sm"
              >
                <p className="text-xs text-gray-400">オプション</p>
                <p className="mt-1 text-base font-bold text-[#1f2937]">{option.name}</p>
                <p className="mt-3 font-serif text-4xl font-bold text-green-700">{option.price}</p>
                <p className="mt-1 text-[11px] text-gray-400">（税込）</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 回数券タイトル */}
        <FadeIn delay={150}>
          <div className="mb-6 text-center">
            <h3 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
              {couponSectionTitle}
            </h3>
          </div>
        </FadeIn>

        {/* 回数券 2×2グリッド */}
        <FadeIn delay={180}>
          <div className="mb-10 grid grid-cols-2 gap-3 md:gap-4">
            {coupons.map((coupon, i) => (
              <div
                key={coupon._key ?? i}
                className="rounded-xl bg-white px-4 py-6 text-center shadow-sm md:px-6"
              >
                <p className="text-xs text-gray-500 md:text-sm">{coupon.name}</p>
                <p className="mt-2 font-serif text-2xl font-bold text-green-700 md:text-[32px]">
                  {coupon.price}
                </p>
                <p className="mt-1 text-[10px] text-gray-400 md:text-[11px]">（{coupon.unit}）</p>
                <p className="mt-2 text-[11px] text-gray-500 md:text-xs">{coupon.validity}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 料金詳細ボタン（未作成のためグレー表示） */}
        <FadeIn delay={200}>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-md border-2 border-gray-300 px-7 py-2.5 text-sm font-semibold text-gray-400 cursor-default">
              料金詳細はこちら
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
