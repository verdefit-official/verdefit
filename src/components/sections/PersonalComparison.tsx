import FadeIn from "@/components/FadeIn";

const rows = [
  { label: "①目的設定の明確さ", verde: "◎数値＋未来像まで明確化", other: "△体重目標のみ" },
  { label: "②途中離脱率への対策", verde: "◎ 定期カウンセリング実施", other: "△ 自主継続任せ" },
  { label: "③年齢に応じた設計", verde: "◎ 30〜50代向け設計", other: "△ 全年齢一律" },
  { label: "④運動初心者対応", verde: "◎ フォーム徹底修正", other: "△ 自己流になりがち" },
  { label: "⑤卒業後の自立設計", verde: "◎ 自走できる知識を習得", other: "×在籍中のみサポート" },
];

export default function PersonalComparison() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              本気で変わりたい人のための選択基準
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              自己流や一般的なジムで結果が出なかったあなたへ
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
