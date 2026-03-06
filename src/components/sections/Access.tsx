import FadeIn from "@/components/FadeIn";

type AccessData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  storeName?: string | null;
  postalCode?: string | null;
  address?: string | null;
  phone?: string | null;
  hours?: string | null;
  lastEntry?: string | null;
  closedDays?: string | null;
  closedDaysNote?: string | null;
  parking?: string | null;
  payment?: string | null;
};

export default function Access({ data, sectionBg = "bg-[#e8f3ec]" }: { data?: AccessData | null; sectionBg?: string }) {
  const sectionTitle = data?.sectionTitle ?? "店舗情報・アクセス";
  const sectionDescription =
    data?.sectionDescription ?? "横手市に、2026年春、OPEN予定です";
  const storeName = data?.storeName ?? "VERDE FIT（ヴェルデフィット）";
  const postalCode = data?.postalCode ?? "〒013-0061";
  const address = data?.address ?? "秋田県横手市横手町四ノ口125-1";
  const phone = data?.phone ?? "現在取得中（OPEN前にご案内します）";
  const hours = data?.hours ?? "10:00〜21:00";
  const lastEntry =
    data?.lastEntry ?? "最終受付 20:30（1時間コースは20:00まで）";
  const closedDays = data?.closedDays ?? "不定休";
  const closedDaysNote = data?.closedDaysNote ?? "※SNS等で事前にお知らせ";
  const parking = data?.parking ?? "専用駐車場あり（無料）";
  const payment = data?.payment ?? "現金 / クレジットカード / 電子マネー";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=ja`;

  return (
    <section id="access" className={`${sectionBg} py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center md:mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-xl">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.08fr] md:gap-12">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold text-green-700 md:text-base">店舗名</p>
              <h3 className="mt-2 font-serif text-[26px] font-bold leading-tight text-[#1f2937] md:text-[36px] whitespace-nowrap">
                {storeName}
              </h3>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.4" />
                      </svg>
                    </span>
                    住所
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">{postalCode}</p>
                  <p className="text-sm leading-7 text-gray-600 md:text-base">{address}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    電話番号
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">{phone}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <circle cx="12" cy="12" r="8.6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.7v4.9l2.8 1.8" />
                      </svg>
                    </span>
                    営業時間
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">{hours}</p>
                  <p className="text-sm leading-7 text-gray-600 md:text-base">{lastEntry}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <rect x="4" y="5" width="16" height="15" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4M16 3v4M4 10h16" />
                      </svg>
                    </span>
                    定休日
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">{closedDays}</p>
                  {closedDaysNote && (
                    <p className="text-sm leading-7 text-gray-600 md:text-base">{closedDaysNote}</p>
                  )}
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M5 15H3V11L5 7H19L21 11V15H19" />
                        <path d="M8 15h8" />
                        <circle cx="6" cy="17" r="2" />
                        <circle cx="18" cy="17" r="2" />
                      </svg>
                    </span>
                    駐車場
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">{parking}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-lg font-bold text-[#1f2937] md:text-xl">
                    <span className="inline-flex h-5 w-5 items-center justify-center text-green-700" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-5 w-5">
                        <rect x="3" y="7" width="18" height="10" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18" />
                      </svg>
                    </span>
                    お支払い方法
                  </p>
                  <p className="mt-1 text-sm leading-7 text-gray-600 md:text-base">{payment}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <iframe
                src={mapEmbedUrl}
                className="block w-full"
                style={{ border: 0, height: "clamp(280px, 50vw, 520px)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VERDE FIT の地図"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
