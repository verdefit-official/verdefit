import FadeIn from "@/components/FadeIn";

type ComparisonRow = {
  label?: string | null;
  verdeValue?: string | null;
  otherValue?: string | null;
};

type PersonalComparisonData = {
  sectionTitle?: string | null;
  sectionDescription?: string | null;
  rows?: ComparisonRow[] | null;
};

const defaultRows = [
  { label: "①目的設定の明確さ", verdeValue: "◎数値＋未来像まで明確化", otherValue: "△体重目標のみ" },
  { label: "②途中離脱率への対策", verdeValue: "◎ 定期カウンセリング実施", otherValue: "△ 自主継続任せ" },
  { label: "③年齢に応じた設計", verdeValue: "◎ 30〜50代向け設計", otherValue: "△ 全年齢一律" },
  { label: "④運動初心者対応", verdeValue: "◎ フォーム徹底修正", otherValue: "△ 自己流になりがち" },
  { label: "⑤卒業後の自立設計", verdeValue: "◎ 自走できる知識を習得", otherValue: "×在籍中のみサポート" },
];

export default function PersonalComparison({ data }: { data?: PersonalComparisonData | null }) {
  const sectionTitle = data?.sectionTitle ?? "本気で変わりたい人のための選択基準";
  const sectionDescription = data?.sectionDescription ?? "自己流や一般的なジムで結果が出なかったあなたへ";
  const rows =
    data?.rows && data.rows.length > 0
      ? data.rows.map((r) => ({
          label: r.label ?? "",
          verde: r.verdeValue ?? "",
          other: r.otherValue ?? "",
        }))
      : defaultRows.map((r) => ({ label: r.label, verde: r.verdeValue, other: r.otherValue }));

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="whitespace-pre-line font-serif text-4xl font-bold text-[#1f2937] md:text-[48px]">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              {sectionDescription}
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-4 pl-6 pr-4 text-left font-semibold">比較項目</th>
                  <th className="py-4 px-6 text-center font-semibold">VERDE FIT</th>
                  <th className="py-4 px-6 text-center font-semibold">一般ジム</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="py-5 pl-6 pr-4 text-gray-700">{row.label}</td>
                    <td className="py-5 px-6 text-center font-bold text-green-700">{row.verde}</td>
                    <td className="py-5 px-6 text-center text-gray-500">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
