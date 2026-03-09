import FadeIn from "@/components/FadeIn";

type PlanItem = {
  _key?: string;
  badge?: string | null;
  title?: string | null;
  price?: string | null;
  details?: string[] | null;
};

type CancelPolicySection = {
  _key?: string;
  title?: string | null;
  content?: string | null;
};

type CoachingPricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  trialBadge?: string | null;
  trialTitle?: string | null;
  trialButtonText?: string | null;
  plans?: PlanItem[] | null;
  note?: string | null;
};

type CancelPolicyData = {
  intro?: string | null;
  sections?: CancelPolicySection[] | null;
  closing?: string | null;
};

const defaultPlans: PlanItem[] = [
  {
    _key: "p1",
    badge: "オンライン",
    title: "単発セッション",
    price: "¥8,000",
    details: ["60分 / 1回", "Zoom・Google Meetなど", "秋田・全国対応"],
  },
  {
    _key: "p2",
    badge: "対面",
    title: "単発セッション",
    price: "¥8,800",
    details: ["60分 / 1回", "VERDE FIT店舗", "横手市内"],
  },
  {
    _key: "p3",
    badge: "オンライン",
    title: "月額定期プラン",
    price: "¥28,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥7,000", "習慣化サポート付き"],
  },
  {
    _key: "p4",
    badge: "対面",
    title: "月額定期プラン",
    price: "¥30,000",
    details: ["60分 × 4回 / 1ヶ月", "1回あたり ¥7,500", "横手市内対面サポート"],
  },
];

const defaultCancelPolicySections: CancelPolicySection[] = [
  {
    _key: "cp1",
    title: "■ キャンセル・変更について",
    content:
      "ご予約の変更・キャンセルは、できるだけお早めにご連絡ください。\n・2日前までのご連絡：無料で変更可能\n・前日のキャンセル：ご利用料金の50%\n・当日キャンセル：ご利用料金の100%\n※前日までにご連絡をいただいた場合、1回のみ振替対応が可能です。\n※振替は同月内でのご利用をお願いしております。",
  },
  {
    _key: "cp2",
    title: "■ 無断キャンセルについて",
    content:
      "ご連絡のないキャンセルは「1回分消化」とさせていただきます。\nまた、無断キャンセルや直前のキャンセル・変更が続く場合は、今後のご予約方法やご契約内容の見直しをお願いする場合がございます。",
  },
  {
    _key: "cp3",
    title: "■ 遅刻について",
    content:
      "ご予約時間に遅れてご来店された場合、次のお客様の関係上、セッション時間を短縮させていただくことがございます。\nなお、ご連絡なく10分以上遅れた場合はキャンセル扱いとなる場合がございます。",
  },
  {
    _key: "cp4",
    title: "■ 体調不良・やむを得ない事情の場合",
    content:
      "体調不良や急なご事情の際は、無理をなさらずお早めにご連絡ください。\n医師の診断書の提出など客観的にやむを得ない理由が確認できる場合は、個別に対応させていただきます。\nなお、「悪天候」「気分」「他のご予定」などの理由によるキャンセルは通常のキャンセル規定の対象となります。",
  },
];

export default function CoachingPricing({
  data,
  cancelPolicy,
  bookingUrl,
}: {
  data?: CoachingPricingData | null;
  cancelPolicy?: CancelPolicyData | null;
  bookingUrl?: string;
}) {
  const sectionTitle = data?.sectionTitle ?? "料金プラン";
  const sectionDescription =
    data?.sectionDescription ?? "横手市・秋田で通いやすい、明瞭な料金体系";
  const trialBadge = data?.trialBadge ?? "オンライン・対面";
  const trialTitle = data?.trialTitle ?? "初回無料体験セッション６０分";
  const trialButtonText = data?.trialButtonText ?? "予約はこちら";
  const plans =
    data?.plans && data.plans.length > 0 ? data.plans : defaultPlans;
  const cancelPolicyIntro =
    cancelPolicy?.intro ??
    "VERDE FITでは、お一人おひとりに十分なお時間を確保した完全予約制でご案内しております。\nすべてのお客様に気持ちよくご利用いただくため、下記のルールにご理解とご協力をお願いいたします。";
  const cancelPolicySections =
    cancelPolicy?.sections && cancelPolicy.sections.length > 0
      ? cancelPolicy.sections
      : defaultCancelPolicySections;
  const cancelPolicyClosing =
    cancelPolicy?.closing ??
    "皆さまが安心して通っていただける環境づくりのため、何卒ご理解のほどよろしくお願いいたします。";

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 初回無料体験カード */}
        <FadeIn delay={60}>
          <div className="mb-8 rounded-2xl bg-white px-8 py-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
            <span className="inline-block rounded-full bg-green-600 px-4 py-1.5 text-xs font-semibold text-white">
              {trialBadge}
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#1f2937] md:text-[28px]">
              {trialTitle}
            </h3>
            <a
              href={bookingUrl ?? "#cta"}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-green-600 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              {trialButtonText}
            </a>
          </div>
        </FadeIn>

        {/* プランカード */}
        <div className="grid gap-5 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <FadeIn key={plan._key ?? i} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
                <span className="mb-4 inline-block self-start rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white">
                  {plan.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1f2937]">{plan.title}</h3>
                <p className="mt-3 font-serif text-[44px] font-bold leading-none text-green-700">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-gray-500">（税込）</p>
                <ul className="mt-5 flex-1 space-y-1.5">
                  {(plan.details ?? []).map((d, j) => (
                    <li key={j} className="text-sm text-gray-600">{d}</li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg border-2 border-gray-300 text-sm font-semibold text-gray-400 cursor-default">
                  詳細を見る
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {data?.note && (
          <FadeIn delay={300}>
            <p className="mt-8 text-xs text-gray-500">{data.note}</p>
          </FadeIn>
        )}

        {/* キャンセルポリシー */}
        <FadeIn delay={350}>
          <div className="mt-10 rounded-xl bg-white px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.10)] md:px-10 md:py-10">
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
                <p className="mt-3 whitespace-pre-line text-[13px] leading-7 text-gray-600">
                  {cancelPolicyIntro}
                </p>
              </div>
              <div className="space-y-6">
                {cancelPolicySections.map((s, i) => (
                  <div key={s._key ?? i}>
                    <p className="mb-2 text-center font-bold text-[#1f2937]">{s.title}</p>
                    <p className="whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">
                      {s.content}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="whitespace-pre-line text-[13px] font-medium text-gray-600">
                  {cancelPolicyClosing}
                </p>
                <p className="mt-3 text-[13px] font-bold text-green-700">VERDE FIT</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
