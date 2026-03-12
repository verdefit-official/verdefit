type Props = {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g. "/voice/seitai"
};

export default function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null;

  const href = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* 前へ */}
      {currentPage > 1 ? (
        <a
          href={href(currentPage - 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-sm text-gray-600 transition-colors hover:border-green-700 hover:text-green-700"
          aria-label="前のページ"
        >
          ‹
        </a>
      ) : (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-300 cursor-default">
          ‹
        </span>
      )}

      {/* ページ番号 */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <a
          key={page}
          href={href(page)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
            page === currentPage
              ? "bg-green-700 text-white"
              : "border border-gray-300 text-gray-600 hover:border-green-700 hover:text-green-700"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </a>
      ))}

      {/* 次へ */}
      {currentPage < totalPages ? (
        <a
          href={href(currentPage + 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-sm text-gray-600 transition-colors hover:border-green-700 hover:text-green-700"
          aria-label="次のページ"
        >
          ›
        </a>
      ) : (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-300 cursor-default">
          ›
        </span>
      )}
    </div>
  );
}
