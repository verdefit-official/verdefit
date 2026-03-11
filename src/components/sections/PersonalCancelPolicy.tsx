import FadeIn from "@/components/FadeIn";

type PolicySection = {
  title?: string | null;
  content?: string | null;
};

type PersonalCancelPolicyData = {
  sectionTitle?: string | null;
  intro?: string | null;
  sections?: PolicySection[] | null;
  closing?: string | null;
};

const defaultSections = [
  {
    title: "■ キャンセル・変更について",
    content: "ご予約の変更・キャンセルは、できるだけお早めにご連絡ください。\n・2日前までのご連絡：無料で変更可能\n・前日のキャンセル：ご利用料金の50%\n・当日キャンセル：ご利用料金の100%\n※前日までにご連絡をいただいた場合、1回のみ振替対応が可能です。\n※振替は同月内でのご利用をお願いしております。",
  },
  {
    title: "■ 無断キャンセルについて",
    content: "ご連絡のないキャンセルは「1回分消化」とさせていただきます。\nまた、無断キャンセルや直前のキャンセル・変更が続く場合は、今後のご予約方法やご契約内容の見直しをお願いする場合がございます。",
  },
  {
    title: "■ 遅刻について",
    content: "ご予約時間に遅れてご来店された場合、次のお客様の関係上、セッション時間を短縮させていただくことがございます。\nなお、ご連絡なく10分以上遅れた場合はキャンセル扱いとなる場合がございます。",
  },
  {
    title: "■ 体調不良・やむを得ない事情の場合",
    content: "体調不良や急なご事情の際は、無理をなさらずお早めにご連絡ください。\n医師の診断書の提出など客観的にやむを得ない理由が確認できる場合は、個別に対応させていただきます。\nなお、「悪天候」「気分」「他のご予定」などの理由によるキャンセルは通常のキャンセル規定の対象となります。",
  },
];

export default function PersonalCancelPolicy({ data, sectionBg = "bg-[#e8f3ec]" }: { data?: PersonalCancelPolicyData | null; sectionBg?: string }) {
  const sectionTitle = data?.sectionTitle ?? "キャンセルポリシー";
  const intro = data?.intro ?? "VERDE FITでは、お一人おひとりに十分なお時間を確保した完全予約制でご案内しております。\nすべてのお客様に気持ちよくご利用いただくため、下記のルールにご理解とご協力をお願いいたします。";
  const sections =
    data?.sections && data.sections.length > 0
      ? data.sections.map((s) => ({ title: s.title ?? "", content: s.content ?? "" }))
      : defaultSections;
  const closing = data?.closing ?? "皆さまが安心して通っていただける環境づくりのため、何卒ご理解のほどよろしくお願いいたします。";

  return (
    <section className={`${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-10 text-center font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
            {sectionTitle}
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="rounded-xl bg-white px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:px-10 md:py-10">
            <div className="rounded-lg border border-gray-200 px-6 py-7 text-sm leading-7 text-gray-700 md:px-10 md:py-8">
              {/* ヘッダー */}
              <div className="mb-6 text-center">
                <p className="inline-flex items-center gap-2 text-lg font-bold text-[#1f2937]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 text-green-700" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4M12 16h.01" />
                  </svg>
                  大切なお知らせ
                </p>
                <p className="mt-3 whitespace-pre-line text-[13px] leading-7 text-gray-600">
                  {intro}
                </p>
              </div>

              {/* 各セクション */}
              <div className="space-y-6">
                {sections.map((s, i) => (
                  <div key={i}>
                    <p className="mb-2 text-center font-bold text-[#1f2937]">{s.title}</p>
                    <p className="whitespace-pre-line text-center text-[13px] leading-7 text-gray-600">
                      {s.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* クロージング */}
              <div className="mt-8 text-center">
                <p className="whitespace-pre-line text-[13px] font-medium text-gray-600">
                  {closing}
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
