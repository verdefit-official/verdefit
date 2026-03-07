import FadeIn from "@/components/FadeIn";

const sections = [
  {
    key: "change",
    title: "■ キャンセル・変更について",
    content: (
      <>
        <p className="text-sm leading-7 text-gray-600">
          ご予約の変更・キャンセルは、できるだけお早めにご連絡ください。
        </p>
        <p className="mt-2 text-sm leading-7 text-gray-600">
          ・2日前までのご連絡：無料で変更可能<br />
          ・前日のキャンセル：ご利用料金の50%<br />
          ・当日キャンセル：ご利用料金の100%
        </p>
        <p className="mt-2 text-xs leading-6 text-gray-500">
          ※前日までにご連絡をいただいた場合、1回のみ振替対応が可能です。<br />
          ※振替は同月内でのご利用をお願いしております。
        </p>
      </>
    ),
  },
  {
    key: "noshow",
    title: "■ 無断キャンセルについて",
    content: (
      <p className="text-sm leading-7 text-gray-600">
        ご連絡のないキャンセルは「1回分消化」とさせていただきます。<br />
        また、無断キャンセルや直前のキャンセル・変更が続く場合は、今後のご予約方法やご契約内容の見直しをお願いする場合がございます。
      </p>
    ),
  },
  {
    key: "late",
    title: "■ 遅刻について",
    content: (
      <p className="text-sm leading-7 text-gray-600">
        ご予約時間に遅れてご来店された場合、次のお客様の関係上、セッション時間を短縮させていただくことがございます。<br />
        なお、ご連絡なく10分以上遅れた場合はキャンセル扱いとなる場合がございます。
      </p>
    ),
  },
  {
    key: "sick",
    title: "■ 体調不良・やむを得ない事情の場合",
    content: (
      <p className="text-sm leading-7 text-gray-600">
        体調不良や急なご事情の際は、無理をなさらずお早めにご連絡ください。<br />
        医師の診断書の提出など客観的にやむを得ない理由が確認できる場合は、個別に対応させていただきます。<br />
        なお、「悪天候」「気分」「他のご予定」などの理由によるキャンセルは通常のキャンセル規定の対象となります。
      </p>
    ),
  },
];

export default function PersonalCancelPolicy() {
  return (
    <section className="bg-[#e8f3ec] pb-20 md:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-10 text-center font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
            キャンセルポリシー
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="rounded-xl border border-green-600 bg-white px-8 py-8 md:px-12 md:py-10">
            {/* ヘッダー */}
            <div className="mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 shrink-0 text-green-700" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4M12 16h.01" />
              </svg>
              <h3 className="font-bold text-[#1f2937]">大切なお知らせ</h3>
            </div>

            {/* イントロ */}
            <p className="mb-8 text-sm leading-7 text-gray-600">
              VERDE FITでは、お一人おひとりに十分なお時間を確保した完全予約制でご案内しております。<br />
              すべてのお客様に気持ちよくご利用いただくため、下記のルールにご理解とご協力をお願いいたします。
            </p>

            {/* 各セクション */}
            <div className="space-y-7">
              {sections.map((s) => (
                <div key={s.key}>
                  <p className="mb-2 font-bold text-[#1f2937]">{s.title}</p>
                  {s.content}
                </div>
              ))}
            </div>

            {/* クロージング */}
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-600">
                皆さまが安心して通っていただける環境づくりのため、何卒ご理解のほどよろしくお願いいたします。
              </p>
              <p className="mt-3 text-sm font-bold text-green-700">VERDE FIT</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
