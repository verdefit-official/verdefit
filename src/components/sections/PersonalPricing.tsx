import FadeIn from "@/components/FadeIn";

const plans = [
  {
    key: "4",
    popular: false,
    name: "4回プラン",
    food: "食事指導なし",
    price: "¥32,000",
    perSession: "1回あたり ¥8,000",
    detail: "60分 × 4回",
    installment: "分割2回払い可",
  },
  {
    key: "8",
    popular: false,
    name: "8回プラン",
    food: "食事指導なし",
    price: "¥56,000",
    perSession: "1回あたり ¥7,000",
    detail: "60分 × 8回",
    installment: "分割4回払い可",
  },
  {
    key: "24",
    popular: true,
    name: "24回パーソナルプラン",
    food: "食事指導あり",
    price: "¥198,000",
    perSession: null,
    detail: "60分 × 24回 ＋ 食事指導",
    installment: "分割6回払い可",
  },
  {
    key: "48",
    popular: false,
    name: "48回ボディメイクプラン",
    food: "食事指導あり",
    price: "¥348,000",
    perSession: null,
    detail: "60分 × 48回 ＋ 食事指導",
    installment: "分割12回払い可",
  },
  {
    key: "single",
    popular: false,
    name: "単発セッション",
    food: "体験利用可",
    price: "¥11,000",
    perSession: null,
    detail: "60分 / 1回",
    installment: null,
  },
];

const cancelPolicy = [
  {
    key: "cp1",
    title: "■ キャンセル・変更について",
    content:
      "ご予約の変更・キャンセルは、できるだけお早めにご連絡ください。\n・2日前までのご連絡：無料で変更可能\n・前日のキャンセル：ご利用料金の50%\n・当日キャンセル：ご利用料金の100%\n※前日までにご連絡をいただいた場合、1回のみ振替対応が可能です。\n※振替は同月内でのご利用をお願いしております。",
  },
  {
    key: "cp2",
    title: "■ 無断キャンセルについて",
    content:
      "ご連絡のないキャンセルは「1回分消化」とさせていただきます。\nまた、無断キャンセルや直前のキャンセル・変更が続く場合は、今後のご予約方法やご契約内容の見直しをお願いする場合がございます。",
  },
  {
    key: "cp3",
    title: "■ 遅刻について",
    content:
      "ご予約時間に遅れてご来店された場合、次のお客様の関係上、セッション時間を短縮させていただくことがございます。\nなお、ご連絡なく10分以上遅れた場合はキャンセル扱いとなる場合がございます。",
  },
  {
    key: "cp4",
    title: "■ 体調不良・やむを得ない事情の場合",
    content:
      "体調不良や急なご事情の際は、無理をなさらずお早めにご連絡ください。\n医師の診断書の提出など客観的にやむを得ない理由が確認できる場合は、個別に対応させていただきます。",
  },
];

export default function PersonalPricing() {
  return (
    <section id="pricing" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              料金プラン
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              明瞭な料金体系で、安心してご利用いただけます
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.key} delay={i * 60}>
              <div className={`relative flex flex-col rounded-xl bg-white px-6 py-7 shadow-[0_8px_24px_rgba(0,0,0,0.07)] ${plan.popular ? "ring-2 ring-green-700" : ""}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-4 py-0.5 text-[12px] font-semibold text-white">
                    人気
                  </span>
                )}
                <p className="text-xs font-semibold text-green-700">{plan.food}</p>
                <h3 className="mt-1.5 font-serif text-lg font-bold text-[#1f2937]">{plan.name}</h3>
                <p className="mt-4 font-serif text-4xl font-bold text-green-700">{plan.price}</p>
                <p className="mt-0.5 text-xs text-gray-400">（税込）</p>
                {plan.perSession && (
                  <p className="mt-2 text-xs font-semibold text-gray-500">{plan.perSession}</p>
                )}
                <p className="mt-2 text-xs text-gray-500">{plan.detail}</p>
                {plan.installment && (
                  <p className="mt-1 text-xs text-gray-400">{plan.installment}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <p className="mt-6 text-center text-xs text-gray-500">
            ※すべて税込価格です。分割払いはクレジットカードをご利用ください。
          </p>
        </FadeIn>

        {/* キャンセルポリシー */}
        <FadeIn delay={150}>
          <div className="mt-12 rounded-xl bg-white px-8 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:px-10 md:py-10">
            <h3 className="mb-6 text-center font-serif text-2xl font-bold text-[#1f2937] md:text-[32px]">
              キャンセルポリシー
            </h3>
            <div className="rounded-lg border border-gray-200 px-6 py-7 text-sm leading-7 text-gray-700 md:px-10 md:py-8">
              <div className="mb-6 text-center">
                <p className="inline-flex items-center gap-2 text-lg font-bold text-[#1f2937]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 text-green-700" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4M12 16h.01" />
                  </svg>
                  大切なお知らせ
                </p>
                <p className="mt-3 text-[13px] leading-7 text-gray-600">
                  VERDE FITでは、お一人おひとりに十分なお時間を確保した完全予約制でご案内しております。
                  <br />すべてのお客様に気持ちよくご利用いただくため、下記のルールにご理解とご協力をお願いいたします。
                </p>
              </div>
              <div className="space-y-6">
                {cancelPolicy.map((section, i) => (
                  <div key={section.key ?? i}>
                    <p className="mb-2 text-center font-bold text-[#1f2937]">{section.title}</p>
                    <p className="whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-[13px] font-bold text-green-700">VERDE FIT</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
