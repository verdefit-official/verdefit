import { defineType, defineField } from "sanity";

export const pricePremiumSchema = defineType({
  name: "pricePremium",
  title: "トータルケアプレミアムプラン",
  type: "document",
  fields: [
    defineField({
      name: "planTitle",
      title: "プランタイトル",
      type: "string",
      description: "例: VERDE FIT式ボディメイクコーチング",
    }),
    defineField({
      name: "programLabel",
      title: "プログラムラベル",
      type: "string",
      description: "例: 6か月プログラム",
    }),
    defineField({
      name: "price",
      title: "料金",
      type: "string",
      description: "例: ¥ 498,000",
    }),
    defineField({
      name: "monthlyLimit",
      title: "月利用上限",
      type: "string",
      description: "例: 月8回まで利用可能",
    }),
    defineField({
      name: "checkItems",
      title: "内容（チェック項目）",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 整体（60分）",
    }),
    defineField({
      name: "flexNote",
      title: "注記",
      type: "string",
      description: "例: ※組み合わせ自由",
    }),
    defineField({
      name: "supports",
      title: "追加サポート項目",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 食事サポート",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 6,
      description: "例: VERDE FITでは、３つのアプローチであなたの理想を叶えます。",
    }),
  ],
  preview: { prepare: () => ({ title: "トータルケアプレミアムプラン" }) },
});
