import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERDE FIT | 横手市の整体・パーソナルトレーニング・コーチングサロン",
  description:
    "2026年春、横手市にグランドオープン。整体×パーソナルトレーニング×コーチングで、カラダとココロを根本から整えるトータルケアサロンVERDE FIT。",
  verification: {
    google: "o4sRBvIHpilVfE387qksnwawU7brd8O8uDgQXaxlDN4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
