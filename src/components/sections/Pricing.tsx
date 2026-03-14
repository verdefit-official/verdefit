import FadeIn from "@/components/FadeIn";
import ResponsiveTitle from "@/components/ResponsiveTitle";

type PricingItem = {
  _key?: string;
  label?: string | null;
  price?: string | null;
};

type PricingColumn = {
  _key?: string;
  title?: string | null;
  items?: PricingItem[] | null;
};

type CancelPolicySection = {
  _key?: string;
  title?: string | null;
  content?: string | null;
};

type PricingData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  trialBadge?: string | null;
  trialTitle?: string | null;
  trialPrice?: string | null;
  trialDetails?: string | null;
  trialDuration?: string | null;
  trialBenefits?: string[] | null;
  pricingColumns?: PricingColumn[] | null;
  pricingNote?: string | null;
};

type CancelPolicyData = {
  intro?: string | null;
  sections?: CancelPolicySection[] | null;
  closing?: string | null;
};

const defaultTrialBenefits = [
  "丁寧なカウンセリングで、あなたの悩みをヒアリング",
  "身体の状態を詳しくチェック",
  "あなたに最適なプランをご提案",
];

const defaultPricingColumns: PricingColumn[] = [
  {
    _key: "seitai",
    title: "整体コース",
    items: [
      { _key: "s1", label: "30分整体", price: "¥4,400" },
      { _key: "s2", label: "60分整体", price: "¥8,800" },
      { _key: "s3", label: "120分整体", price: "¥13,200" },
    ],
  },
  {
    _key: "personal",
    title: "パーソナルトレーニング",
    items: [
      { _key: "p1", label: "24回ダイエットプラン", price: "¥198,000" },
      { _key: "p2", label: "1ヶ月/8回 食事指導なし", price: "¥56,000" },
      { _key: "p3", label: "1ヶ月/4回 食事指導なし", price: "¥32,000" },
    ],
  },
  {
    _key: "coaching",
    title: "コーチング",
    items: [
      { _key: "c1", label: "1ヶ月/4回 オンライン60分", price: "¥28,000" },
      { _key: "c2", label: "1ヶ月/4回 対面60分", price: "¥30,000" },
      { _key: "c3", label: "対面60分", price: "¥8,800" },
    ],
  },
];

const defaultCancelPolicySections: CancelPolicySection[] = [
  { _key: "cp1", title: "■ キャンセル・変更について", content: "ご予約の変更・キャンセルは、できるだけお早めにご連絡ください。\n・2日前までのご連絡：無料で変更可能\n・前日のキャンセル：ご利用料金の50%\n・当日キャンセル：ご利用料金の100%\n※前日までにご連絡をいただいた場合、1回のみ振替対応が可能です。\n※振替は同月内でのご利用をお願いしております。" },
  { _key: "cp2", title: "■ 無断キャンセルについて", content: "ご連絡のないキャンセルは「1回分消化」とさせていただきます。\nまた、無断キャンセルや直前のキャンセル・変更が続く場合は、今後のご予約方法やご契約内容の見直しをお願いする場合がございます。" },
  { _key: "cp3", title: "■ 遅刻について", content: "ご予約時間に遅れてご来店された場合、次のお客様の関係上、セッション時間を短縮させていただくことがございます。\nなお、ご連絡なく10分以上遅れた場合はキャンセル扱いとなる場合がございます。" },
  { _key: "cp4", title: "■ 体調不良・やむを得ない事情の場合", content: "体調不良や急なご事情の際は、無理をなさらずお早めにご連絡ください。\n医師の診断書の提出など客観的にやむを得ない理由が確認できる場合は、個別に対応させていただきます。" },
];

export default function Pricing({ data, cancelPolicy, sectionBg = "bg-white", bookingUrl }: { data?: PricingData | null; cancelPolicy?: CancelPolicyData | null; sectionBg?: string; bookingUrl?: string }) {
  const sectionTitle = data?.sectionTitle ?? "料金案内";
  const sectionDescription =
    data?.sectionDescription ?? "明瞭な料金体系で、安心してご利用いただけます";
  const trialBadge = data?.trialBadge ?? "OPEN記念 特別価格";
  const trialTitle = data?.trialTitle ?? "初回体験コース";
  const trialPrice = data?.trialPrice ?? "¥5,500";
  const trialDetails =
    data?.trialDetails ??
    "カウンセリング20分 + 整体・パーソナル40分";
  const trialDuration = data?.trialDuration ?? "所要時間：60分";
  const trialBenefits =
    data?.trialBenefits && data.trialBenefits.length > 0
      ? data.trialBenefits
      : defaultTrialBenefits;
  const pricingColumns =
    data?.pricingColumns && data.pricingColumns.length > 0
      ? data.pricingColumns
      : defaultPricingColumns;
  const pricingNote =
    data?.pricingNote ?? "※すべて税込価格です。回数券プランもございます。";

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
    <section id="pricing" className={`${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center md:mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              <ResponsiveTitle>{sectionTitle}</ResponsiveTitle>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        {/* 初回体験コース */}
        <FadeIn>
          <div className="mx-auto mb-6 max-w-xl rounded-xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:px-10 md:py-10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-green-700 px-4 py-1 text-[12px] font-semibold text-white md:text-[13px]">
                {trialBadge}
              </span>
              <h3 className="mt-5 font-serif text-[30px] font-bold text-[#1f2937] md:text-[38px]">
                {trialTitle}
              </h3>

              <div className="mt-3 flex items-end justify-center gap-2">
                <span className="font-serif text-5xl font-bold text-green-700 md:text-[60px]">
                  {trialPrice}
                </span>
                <span className="pb-2 text-sm font-medium text-gray-500 md:text-base">
                  (税込)
                </span>
              </div>

              <p className="mt-3 text-base font-semibold text-[#1f2937]">
                {trialDetails}
              </p>
              <p className="mt-1 text-sm text-gray-500">{trialDuration}</p>

              <a
                href={bookingUrl ?? "#cta"}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-green-700 px-10 text-sm font-semibold text-white transition-colors hover:bg-green-800 md:h-12"
              >
                予約はこちら
              </a>

              <ul className="mx-auto mt-6 max-w-[400px] space-y-2 text-left">
                {trialBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-green-700 text-[10px] font-bold text-green-700">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* 通常料金 */}
        <FadeIn delay={100}>
          <div className="mb-6 rounded-xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:px-10 md:py-10">
            <h3 className="mb-6 text-center font-serif text-2xl font-bold text-[#1f2937] md:text-[32px]">
              通常料金
            </h3>

            <div className={`grid grid-cols-1 gap-6 ${pricingColumns.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {pricingColumns.map((col) => (
                <div key={col._key ?? col.title}>
                  <h4 className="mb-3 text-sm font-bold text-green-700 md:text-base">
                    {col.title}
                  </h4>
                  <div className="space-y-2">
                    {col.items?.map((item) => (
                      <div
                        key={item._key ?? item.label}
                        className="flex items-center justify-between border-b border-gray-100 pb-2"
                      >
                        <p className="text-xs text-gray-600 md:text-[13px]">
                          {item.label}
                        </p>
                        <p className="text-sm font-bold text-green-700 md:text-base">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">{pricingNote}</p>

            <div className="mt-6 text-center">
              <a href="/price" className="inline-flex items-center gap-1.5 rounded-md border-2 border-green-700 px-7 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white">
                料金詳細はこちら
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* キャンセルポリシー */}
        <FadeIn delay={150}>
          <div className="rounded-xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:px-10 md:py-10">
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
                {cancelPolicySections.map((section, i) => (
                  <div key={section._key ?? i}>
                    <p className="mb-2 text-center font-bold text-[#1f2937]">{section.title}</p>
                    <p className="whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">
                      {section.content}
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
