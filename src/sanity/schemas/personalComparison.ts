import { defineType, defineField } from "sanity";

export const personalComparisonSchema = defineType({
  name: "personalComparison",
  title: "比較表",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "text", description: "例: 本気で変わりたい人のための選択基準" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "text", description: "例: 自己流や一般的なジムで結果が出なかったあなたへ" }),
    defineField({
      name: "rows",
      title: "比較行",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "比較項目", type: "string", description: "例: ①目的設定の明確さ" }),
            defineField({ name: "verdeValue", title: "VERDE FIT の値", type: "string", description: "例: ◎数値＋未来像まで明確化" }),
            defineField({ name: "otherValue", title: "一般ジム の値", type: "string", description: "例: △体重目標のみ" }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "比較表" }) },
});
