import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません | VERDE FIT",
  description: "お探しのページは見つかりませんでした。",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#e8f3ec] px-4 text-center">
      <Link href="/" className="mb-10 inline-block">
        <span className="font-serif text-2xl font-bold tracking-widest text-green-700">
          VERDE FIT
        </span>
      </Link>

      <p className="text-6xl font-bold text-green-700 md:text-8xl">404</p>

      <h1 className="mt-4 font-serif text-xl font-bold text-[#1f2937] md:text-2xl">
        ページが見つかりませんでした
      </h1>

      <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
        お探しのページは移動・削除されたか、URLが間違っている可能性があります。
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 w-52 items-center justify-center rounded-lg bg-green-700 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          トップページへ戻る
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-12 w-52 items-center justify-center rounded-lg border-2 border-green-700 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
        >
          ブログを見る
        </Link>
      </div>
    </div>
  );
}
