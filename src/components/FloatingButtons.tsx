"use client";

import { useMenu } from "@/components/MenuProvider";

type FloatingButtonsProps = {
  phone?: string;
  bookingUrl?: string;
};

export default function FloatingButtons({ phone, bookingUrl }: FloatingButtonsProps) {
  const telHref = phone ? `tel:${phone.replace(/-/g, "")}` : "#";
  const { isMenuOpen } = useMenu();

  return (
    <>
      {/* 電話ボタン（右端に縦付き） */}
      <a
        href={telHref}
        aria-label="電話で相談する"
        className={`fixed right-0 top-1/2 z-50 -translate-y-1/2 flex flex-col items-center gap-1 rounded-l-xl border-2 border-green-700 bg-white px-3 py-4 shadow-[-4px_4px_16px_rgba(0,0,0,0.15)] transition-opacity hover:opacity-90 ${isMenuOpen ? "hidden" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 shrink-0 text-green-700"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
        </svg>
        <span
          className="text-[13px] font-bold leading-[1.4] text-green-700"
          style={{ writingMode: "vertical-rl" }}
        >
          お電話でのご相談
        </span>
      </a>

      {/* 予約ボタン（緑サークル） */}
      <a
        href={bookingUrl ?? "#cta"}
        aria-label="体験予約をする"
        className="fixed bottom-6 right-4 z-50 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-green-700 shadow-[0_4px_20px_rgba(45,122,62,0.45)] ring-4 ring-white transition-opacity hover:opacity-90 sm:bottom-8 sm:right-6 sm:h-28 sm:w-28"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-1 h-5 w-5 shrink-0 text-white"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
        <span className="text-center text-[12px] font-bold leading-[1.4] text-white sm:text-[13px]">
          予約は
          <br />
          こちら
        </span>
      </a>
    </>
  );
}
