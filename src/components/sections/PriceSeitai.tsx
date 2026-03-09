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
  courses?: CourseItem[] | null;
  options?: OptionItem[] | null;
  couponSectionTitle?: string | null;
  coupons?: CouponItem[] | null;
};

const defaultCourses: CourseItem[] = [
  { _key: "c1", name: "30分整体", price: "¥4,400" },
  { _key: "c2", name: "60分整体", price: "¥8,800" },
  { _key: "c3", name: "90分整体", price: "¥13,200" },
];

const defaultOptions: OptionItem[] = [
  { _key: "o1", name: "骨盤矯正", price: "¥1,500" },
];

const defaultCoupons: CouponItem[] = [
  { _key: "k1", name: "60分整体 × 4回", price: "¥34,000", unit: "税込", validity: "1回あたり ¥8,500 ／ 通常より2回分お得" },
  { _key: "k2", name: "60分整体 × 8回", price: "¥61,600", unit: "税込", validity: "1回あたり ¥7,700 ／ 通常より4回分お得" },
  { _key: "k3", name: "60分整体 × 12回", price: "¥84,000", unit: "税込", validity: "1回あたり ¥7,000 ／ 通常より6回分お得" },
  { _key: "k4", name: "90分整体 × 12回", price: "¥126,000", unit: "税込", validity: "1回あたり ¥10,500 ／ 通常より6回分お得" },
];

export default function PriceSeitai({
  data,
  bookingUrl,
}: {
  data?: ChiropracticPricingData | null;
  bookingUrl?: string;
}) {
  const sectionTitle = data?.sectionTitle ?? "整体 料金";
  const sectionDescription = data?.sectionDescription ?? "明瞭な料金体系で、安心してご利用いただけます";
  const courses = data?.courses && data.courses.length > 0 ? data.courses : defaultCourses;
  const options = data?.options && data.options.length > 0 ? data.options : defaultOptions;
  const couponSectionTitle = data?.couponSectionTitle ?? "回数券";
  const coupons = data?.coupons && data.coupons.length > 0 ? data.coupons : defaultCoupons;

  return (
    <section id="seitai" className="scroll-mt-24 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 単発料金 */}
        <FadeIn delay={60}>
          <p className="mb-4 text-center text-sm font-semibold text-gray-500">単発料金</p>
          <div className="mb-8 grid grid-cols-3 gap-3 md:gap-4">
            {courses.map((course, i) => (
              <div
                key={course._key ?? i}
                className="rounded-xl bg-[#e8f3ec] px-3 py-6 text-center"
              >
                <p className="text-xs text-gray-500 md:text-sm">{course.name}</p>
                <p className="mt-2 font-serif text-2xl font-bold text-green-700 md:text-[32px]">
                  {course.price}
                </p>
                <p className="mt-1 text-[10px] text-gray-400">（税込）</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* オプション */}
        <FadeIn delay={100}>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {options.map((option, i) => (
              <div
                key={option._key ?? i}
                className="rounded-xl bg-[#e8f3ec] px-8 py-5 text-center"
              >
                <p className="text-xs text-gray-400">オプション</p>
                <p className="mt-1 text-base font-bold text-[#1f2937]">{option.name}</p>
                <p className="mt-2 font-serif text-3xl font-bold text-green-700">+{option.price}</p>
                <p className="mt-1 text-[11px] text-gray-400">（税込）</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 回数券 */}
        <FadeIn delay={140}>
          <div className="mb-6 text-center">
            <h3 className="font-serif text-3xl font-bold text-[#1f2937] md:text-[40px]">
              {couponSectionTitle}
            </h3>
          </div>
        </FadeIn>
        <FadeIn delay={160}>
          <div className="mb-10 grid grid-cols-2 gap-3 md:gap-4">
            {coupons.map((coupon, i) => (
              <div
                key={coupon._key ?? i}
                className="rounded-xl bg-[#e8f3ec] px-4 py-6 text-center"
              >
                <p className="text-xs text-gray-500 md:text-sm">{coupon.name}</p>
                <p className="mt-2 font-serif text-2xl font-bold text-green-700 md:text-[32px]">
                  {coupon.price}
                </p>
                <p className="mt-1 text-[10px] text-gray-400">（{coupon.unit}）</p>
                <p className="mt-2 text-[11px] text-gray-500">{coupon.validity}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="text-center">
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              整体の予約をする
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
