type FooterProps = {
  phone?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  lineUrl?: string;
  footerDescription?: string;
  copyrightYear?: string;
  logoUrl?: string;
  postalCode?: string;
  address?: string;
  hours?: string;
  lastEntry?: string;
  closedDays?: string;
};

const footerLinks = [
  { href: "/", label: "TOP" },
  { href: "/seitai", label: "整体" },
  { href: "#personal", label: "パーソナルトレーニング" },
  { href: "#coaching", label: "コーチング" },
  { href: "#pricing", label: "料金" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#blog", label: "ブログ" },
];

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8.8 8.8 0 0 1-8.8 8.8A9 9 0 0 1 8 19.8L3 21l1.3-4.7A8.8 8.8 0 1 1 21 12z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Footer({
  phone,
  instagramUrl,
  facebookUrl,
  lineUrl,
  footerDescription,
  copyrightYear,
  logoUrl,
  postalCode,
  address,
  hours,
  lastEntry,
  closedDays,
}: FooterProps) {
  const telHref = phone ? `tel:${phone.replace(/-/g, "")}` : "#";
  const telDisplay = "お電話でのご相談";
  const year = copyrightYear ?? "2026";
  const description =
    footerDescription ??
    "横手市に誕生する、本格トータルケアサロン。整体・パーソナルトレーニング・コーチングで、あなたの健康を総合サポートします。";
  const footerPostalCode = postalCode ?? "〒013-0061";
  const footerAddress = address ?? "秋田県横手市横手町四ノ口125-1";
  const footerHours = hours ? `営業時間: ${hours}` : "営業時間: 10:00〜21:00";
  const footerLastEntry = lastEntry ?? "最終受付20:30";
  const footerClosedDays = closedDays ? `定休日: ${closedDays}` : "定休日: 不定休";

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr] md:gap-12">
          <div>
            <a href="/" className="mb-5 inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl ?? "/logo.svg"}
                alt="VERDE FIT ロゴ"
                width={36}
                height={36}
                className="h-9 w-9 object-contain rounded-full"
              />
              <span className="font-serif text-[22px] font-semibold leading-none text-[#1f2937]">VERDE FIT</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-600">
              {description}
            </p>

            <div className="mt-5 space-y-1.5 text-sm text-gray-600">
              <p>{footerPostalCode}</p>
              <p>{footerAddress}</p>
              <p>{footerHours}（{footerLastEntry}）</p>
              <p>{footerClosedDays}</p>
            </div>

            <a
              href={telHref}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-700 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              <PhoneIcon />
              {telDisplay}
            </a>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1f2937]">メニュー</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-green-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1f2937]">SNS</h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={instagramUrl ?? "#"}
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors hover:bg-green-100"
              >
                <InstagramIcon />
              </a>
              <a
                href={facebookUrl ?? "#"}
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors hover:bg-green-100"
              >
                <FacebookIcon />
              </a>
              <a
                href={lineUrl ?? "#"}
                aria-label="Line"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors hover:bg-green-100"
              >
                <ChatIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5 text-center text-xs text-gray-400">
        © {year} VERDE FIT All rights reserved.
      </div>
    </footer>
  );
}
