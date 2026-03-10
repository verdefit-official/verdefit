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
  badge?: string | null;
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
  { _key: "k1", name: "60分整体 × 4回", price: "¥34,000", unit: "税込", validity: "1回あたり ¥8,500\n有効期限：2ヶ月" },
  { _key: "k2", name: "60分整体 × 8回", price: "¥61,600", unit: "税込", validity: "1回あたり ¥7,700\n有効期限：4ヶ月", badge: "人気" },
  { _key: "k3", name: "60分整体 × 12回", price: "¥84,000", unit: "税込", validity: "1回あたり ¥7,000\n有効期限：6ヶ月" },
  { _key: "k4", name: "90分整体 × 12回", price: "¥126,000", unit: "税込", validity: "1回あたり ¥10,500\n有効期限：6ヶ月" },
];

function CouponCard({ coupon, i }: { coupon: CouponItem; i: number }) {
  return (
    <div key={coupon._key ?? i} className="relative rounded-xl bg-white px-5 py-8 text-center">
      {coupon.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block rounded-full bg-amber-500 px-3 py-0.5 text-[10px] font-semibold text-white">
          {coupon.badge}
        </span>
      )}
      <p className="text-xs text-gray-500 md:text-sm">{coupon.name}</p>
      <p className="mt-2 font-serif text-2xl font-bold text-green-700 md:text-[32px]">
        {coupon.price}
      </p>
      <p className="mt-1 text-[10px] text-gray-400">（{coupon.unit}）</p>
      <p className="mt-2 whitespace-pre-line text-[11px] text-gray-500">{coupon.validity}</p>
    </div>
  );
}

export default function PriceSeitai({
  data,
  bookingUrl,
}: {
  data?: ChiropracticPricingData | null;
  bookingUrl?: string;
}) {
  const sectionTitle = data?.sectionTitle ?? "整体 料金";
  const sectionDescription = data?.sectionDescription ?? "国家資格保有者による根本改善の整体";
  const courses = data?.courses && data.courses.length > 0 ? data.courses : defaultCourses;
  const options = data?.options && data.options.length > 0 ? data.options : defaultOptions;
  const couponSectionTitle = data?.couponSectionTitle ?? "回数券";
  const coupons = data?.coupons && data.coupons.length > 0 ? data.coupons : defaultCoupons;

  const topCoupons = coupons.slice(0, 3);
  const bottomCoupons = coupons.slice(3);

  return (
    <section id="seitai" className="scroll-mt-24 bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-sm text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 単発料金 */}
        <FadeIn delay={60}>
          <p className="mb-4 text-sm font-semibold text-gray-700">単発料金</p>
          <div className="mb-8 grid grid-cols-3 gap-3 md:gap-4">
            {courses.map((course, i) => (
              <div
                key={course._key ?? i}
                className="rounded-xl bg-white px-5 py-8 text-center"
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
                className="rounded-xl bg-white px-8 py-5 text-center"
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
          <p className="mb-4 text-sm font-semibold text-gray-700">{couponSectionTitle}</p>
        </FadeIn>
        <FadeIn delay={160}>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {topCoupons.map((coupon, i) => (
              <CouponCard key={coupon._key ?? i} coupon={coupon} i={i} />
            ))}
          </div>
          {bottomCoupons.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-3 md:gap-4">
              {bottomCoupons.map((coupon, i) => (
                <div key={coupon._key ?? i} className="w-full max-w-xs">
                  <CouponCard coupon={coupon} i={i + 3} />
                </div>
              ))}
            </div>
          )}
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/seitai"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              整体について詳しく見る →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
