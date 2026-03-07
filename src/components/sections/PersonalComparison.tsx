import FadeIn from "@/components/FadeIn";

const rows = [
  { label: "数値化＋未来像までのサポート", verde: "◎", other: "×" },
  { label: "完全個別プログラム", verde: "◎", other: "△" },
  { label: "30〜50代への対応実績", verde: "◎", other: "△" },
  { label: "運動初心者への丁寧な指導", verde: "◎", other: "△" },
  { label: "オンライン対応可能", verde: "◎", other: "△" },
];

export default function PersonalComparison() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1f2937] md:text-[52px]">
              本気で変わりたい人のための<br />選択肢
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-gray-500 md:text-base">
              一般ジムとVERDE FITの違い
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1f2937] text-white">
                  <th className="py-4 pl-6 pr-4 text-left font-semibold">比較項目</th>
                  <th className="py-4 px-6 text-center font-semibold text-green-300">VERDE FIT</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-300">一般ジム</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 pl-6 pr-4 text-gray-700">{row.label}</td>
                    <td className="py-4 px-6 text-center font-bold text-green-700">{row.verde}</td>
                    <td className="py-4 px-6 text-center font-medium text-gray-400">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-4 text-center text-xs text-gray-400">
            ※VERDE FITのサービス内容に基づく独自比較です
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
