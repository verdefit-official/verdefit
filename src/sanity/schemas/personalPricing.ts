import { defineType, defineField } from "sanity";

export const personalPricingSchema = defineType({
  name: "personalPricing",
  title: "料金プラン",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: 料金プラン" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: 横手市で通いやすい、明瞭な料金体系" }),
    defineField({
      name: "plans",
      title: "プラン一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "プラン名", type: "string", description: "例: 月4回プラン" }),
            defineField({ name: "foodLabel", title: "食事指導ラベル", type: "string", description: "例: 食事指導なし / 食事指導付き / 都度払い" }),
            defineField({ name: "foodGreen", title: "食事指導ラベルを緑色にする", type: "boolean" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥32,000" }),
            defineField({
              name: "details",
              title: "詳細（複数行）",
              type: "array",
              of: [{ type: "string" }],
              description: "例: 1ヶ月／4回セッション",
            }),
            defineField({ name: "popular", title: "人気No.1バッジを表示する", type: "boolean" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),
    defineField({ name: "note", title: "注意書き", type: "string", description: "例: ※分割払いも承ります。詳しくはお問い合わせください。" }),
    defineField({ name: "cancelPolicyIntro", title: "キャンセルポリシー 前書き", type: "text", rows: 3 }),
    defineField({
      name: "cancelPolicySections",
      title: "キャンセルポリシー セクション",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string" }),
            defineField({ name: "content", title: "内容", type: "text", rows: 5 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({ name: "cancelPolicyClosing", title: "キャンセルポリシー 締めの言葉", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "料金プラン" }) },
});
