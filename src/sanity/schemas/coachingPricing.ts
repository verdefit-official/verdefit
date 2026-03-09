import { defineType, defineField } from "sanity";

export const coachingPricingSchema = defineType({
  name: "coachingPricing",
  title: "料金プラン",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: 料金プラン",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
      description: "例: 横手市・秋田で通いやすい、明瞭な料金体系",
    }),
    defineField({
      name: "trialBadge",
      title: "無料体験 バッジ",
      type: "string",
      description: "例: オンライン・対面",
    }),
    defineField({
      name: "trialTitle",
      title: "無料体験 タイトル",
      type: "string",
      description: "例: 初回無料体験セッション６０分",
    }),
    defineField({
      name: "trialButtonText",
      title: "無料体験 ボタンテキスト",
      type: "string",
      description: "例: 予約はこちら",
    }),
    defineField({
      name: "plans",
      title: "プラン一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "badge",
              title: "バッジ",
              type: "string",
              description: "例: オンライン / 対面",
            }),
            defineField({
              name: "title",
              title: "プラン名",
              type: "string",
              description: "例: 単発セッション",
            }),
            defineField({
              name: "price",
              title: "料金",
              type: "string",
              description: "例: ¥8,000",
            }),
            defineField({
              name: "details",
              title: "詳細",
              type: "array",
              of: [{ type: "string" }],
              description: "例: 60分 / 1回",
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "note",
      title: "注意書き",
      type: "string",
      description: "例: ※分割払いも承ります。詳しくはお問い合わせください。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "料金プラン" }),
  },
});
