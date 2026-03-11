import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type PlanItem = {
  name?: string | null;
  foodLabel?: string | null;
  foodGreen?: boolean | null;
  price?: string | null;
  details?: string[] | null;
  popular?: boolean | null;
};

type CancelPolicySection = {
  _key?: string;
  title?: string | null;
  content?: string | null;
};

type PersonalPricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  plans?: PlanItem[] | null;
  note?: string | null;
};

type CancelPolicyData = {
  intro?: string | null;
  sections?: CancelPolicySection[] | null;
  closing?: string | null;
};

const defaultPlans: PlanItem[] = [
  { name: "月4回プラン", foodLabel: "食事指導なし", foodGreen: false, price: "¥32,000", details: ["1ヶ月／4回セッション", "1回あたり ¥8,000", "有効期限：2ヶ月"], popular: false },
  { name: "月8回プラン", foodLabel: "食事指導なし", foodGreen: false, price: "¥56,000", details: ["1ヶ月／8回セッション", "1回あたり ¥7,000", "有効期限：4ヶ月"], popular: false },
  { name: "24回ダイエットプラン", foodLabel: "食事指導付き", foodGreen: true, price: "¥198,000", details: ["60分 × 24回＋食事指導", "推奨期間：3ヶ月", "有効期限：6ヶ月"], popular: true },
  { name: "48回ボディメイクプラン", foodLabel: "食事指導付き", foodGreen: true, price: "¥348,000", details: ["60分 × 48回＋食事指導", "推奨期間：6ヶ月", "有効期限：12ヶ月"], popular: false },
  { name: "単発セッション", foodLabel: "都度払い", foodGreen: false, price: "¥11,000", details: ["60分 / 1回", "メンテナンス・お試しに", "予約制"], popular: false },
];

function PlanCard({ plan, delay = 0, pricePageUrl }: { plan: Required<PlanItem>; delay?: number; pricePageUrl: string }) {
  return (
    <FadeIn delay={delay}>
      <div className={`relative flex h-full flex-col rounded-xl bg-white px-7 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-center ${plan.popular ? "ring-2 ring-green-600" : ""}`}>
        {plan.popular && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-[12px] font-bold text-white">
            人気 No.1
          </span>
        )}

        <h3 className="font-serif text-xl font-bold text-[#1f2937]">{plan.name}</h3>
        <p className={`mt-1 text-xs font-semibold ${plan.foodGreen ? "text-green-700" : "text-gray-400"}`}>
          {plan.foodLabel}
        </p>

        <p className="mt-5 font-serif text-[40px] font-bold leading-none text-green-700">
          {plan.price}
        </p>
        <p className="mt-1 text-xs text-gray-400">（税込）</p>

        <div className="my-5 space-y-1">
          {(plan.details ?? []).map((d, i) => (
            <p key={i} className="text-xs text-gray-500">{d}</p>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={pricePageUrl}
            className="inline-flex w-full items-center justify-center rounded-md border-2 border-green-700 px-6 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
          >
            詳細を見る
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

const defaultCancelPolicySections: CancelPolicySection[] = [
  { _key: "cp1", title: "■ キャンセル・変更について", content: "ご予約の変更・キャンセルは、できるだけお早めにご連絡ください。\n・2日前までのご連絡：無料で変更可能\n・前日のキャンセル：ご利用料金の50%\n・当日キャンセル：ご利用料金の100%\n※前日までにご連絡をいただいた場合、1回のみ振替対応が可能です。\n※振替は同月内でのご利用をお願いしております。" },
  { _key: "cp2", title: "■ 無断キャンセルについて", content: "ご連絡のないキャンセルは「1回分消化」とさせていただきます。\nまた、無断キャンセルや直前のキャンセル・変更が続く場合は、今後のご予約方法やご契約内容の見直しをお願いする場合がございます。" },
  { _key: "cp3", title: "■ 遅刻について", content: "ご予約時間に遅れてご来店された場合、次のお客様の関係上、セッション時間を短縮させていただくことがございます。\nなお、ご連絡なく10分以上遅れた場合はキャンセル扱いとなる場合がございます。" },
  { _key: "cp4", title: "■ 体調不良・やむを得ない事情の場合", content: "体調不良や急なご事情の際は、無理をなさらずお早めにご連絡ください。\n医師の診断書の提出など客観的にやむを得ない理由が確認できる場合は、個別に対応させていただきます。\nなお、「悪天候」「気分」「他のご予定」などの理由によるキャンセルは通常のキャンセル規定の対象となります。" },
];

export default function PersonalPricing({ data, cancelPolicy, pricePageUrl = "/price#personal" }: { data?: PersonalPricingData | null; cancelPolicy?: CancelPolicyData | null; pricePageUrl?: string }) {
  const sectionTitle = data?.sectionTitle ?? "料金プラン";
  const sectionDescription = data?.sectionDescription ?? "横手市で通いやすい、明瞭な料金体系";
  const note = data?.note ?? "※分割払いも承ります。詳しくはお問い合わせください。";

  const cancelPolicyIntro = cancelPolicy?.intro ?? "VERDE FITでは、お一人おひとりに十分なお時間を確保した完全予約制でご案内しております。\nすべてのお客様に気持ちよくご利用いただくため、下記のルールにご理解とご協力をお願いいたします。";
  const cancelPolicySections = cancelPolicy?.sections && cancelPolicy.sections.length > 0 ? cancelPolicy.sections : defaultCancelPolicySections;
  const cancelPolicyClosing = cancelPolicy?.closing ?? "皆さまが安心して通っていただける環境づくりのため、何卒ご理解のほどよろしくお願いいたします。";

  const rawPlans =
    data?.plans && data.plans.length > 0 ? data.plans : defaultPlans;

  const plans = rawPlans.map((p, i) => ({
    name: p.name ?? defaultPlans[i]?.name ?? "",
    foodLabel: p.foodLabel ?? defaultPlans[i]?.foodLabel ?? "",
    foodGreen: p.foodGreen ?? defaultPlans[i]?.foodGreen ?? false,
    price: p.price ?? defaultPlans[i]?.price ?? "",
    details: p.details ?? defaultPlans[i]?.details ?? [],
    popular: p.popular ?? defaultPlans[i]?.popular ?? false,
  }));

  const topPlans = plans.slice(0, 3);
  const bottomPlans = plans.slice(3);

  return (
    <section id="pricing" className="bg-[#e8f3ec] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 上段3列 */}
        <div className="grid gap-5 sm:grid-cols-3">
          {topPlans.map((plan, i) => (
            <PlanCard key={i} plan={plan} delay={i * 60} pricePageUrl={pricePageUrl} />
          ))}
        </div>

        {/* 下段2列（中央寄せ） */}
        {bottomPlans.length > 0 && (
          <div className="mx-auto mt-5 grid max-w-[680px] gap-5 sm:grid-cols-2">
            {bottomPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} delay={i * 60 + 180} pricePageUrl={pricePageUrl} />
            ))}
          </div>
        )}

        <FadeIn delay={300}>
          <p className="mt-8 text-xs text-gray-500">{note}</p>
        </FadeIn>

        {/* キャンセルポリシー */}
        <FadeIn delay={350}>
          <div className="mt-10 rounded-xl bg-white px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:px-10 md:py-10">
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
                <p className="mt-3 whitespace-pre-line text-[13px] leading-7 text-gray-600">{cancelPolicyIntro}</p>
              </div>
              <div className="space-y-6">
                {cancelPolicySections.map((s, i) => (
                  <div key={s._key ?? i}>
                    <p className="mb-2 text-center font-bold text-[#1f2937]">{s.title}</p>
                    <p className="whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">{s.content}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="whitespace-pre-line text-[13px] font-medium text-gray-600">{cancelPolicyClosing}</p>
                <p className="mt-3 text-[13px] font-bold text-green-700">VERDE FIT</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
