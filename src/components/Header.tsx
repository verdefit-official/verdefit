"use client";

import { useMenu } from "@/components/MenuProvider";

const navLinks = [
  { href: "/seitai", label: "整体" },
  { href: "/personal-training", label: "パーソナル" },
  { href: "/coaching", label: "コーチング" },
  { href: "/price", label: "料金" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#blog", label: "ブログ" },
  { href: "#access", label: "アクセス" },
];

type HeaderProps = {
  phone?: string;
  logoUrl?: string;
  bookingUrl?: string;
};

export default function Header({ phone, logoUrl, bookingUrl }: HeaderProps) {
  const { isMenuOpen: isOpen, setIsMenuOpen: setIsOpen } = useMenu();
  const telHref = phone ? `tel:${phone.replace(/-/g, "")}` : "#";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl ?? "/logo.svg"}
              alt="VERDE FIT ロゴ"
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-full"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z"
                />
              </svg>
              電話
            </a>
            <a
              href={bookingUrl ?? "#cta"}
              className="inline-flex items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              予約はこちら
            </a>
          </nav>

          <button
            className="p-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col space-y-3 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z"
                />
              </svg>
              電話
            </a>
            <a
              href={bookingUrl ?? "#cta"}
              className="rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-800"
              onClick={() => setIsOpen(false)}
            >
              予約はこちら
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
