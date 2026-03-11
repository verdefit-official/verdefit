import { defineType, defineField } from "sanity";

export const pricingSchema = defineType({
  name: "pricing",
  title: "料金",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 料金案内",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 明瞭な料金体系で、安心してご利用いただけます。",
    }),
    // Trial course
    defineField({
      name: "trialBadge",
      title: "体験コース バッジ",
      type: "string",
      description: "例: OPEN記念 特別価格",
    }),
    defineField({
      name: "trialTitle",
      title: "体験コース タイトル",
      type: "string",
      description: "例: 初回体験コース",
    }),
    defineField({
      name: "trialPrice",
      title: "体験コース 料金",
      type: "string",
      description: "例: ¥5,500",
    }),
    defineField({
      name: "trialDetails",
      title: "体験コース 内容",
      type: "string",
      description: "例: カウンセリング30分 + 整体・パーソナルトレーニング60分",
    }),
    defineField({
      name: "trialDuration",
      title: "体験コース 所要時間",
      type: "string",
      description: "例: 所要時間：90分",
    }),
    defineField({
      name: "trialBenefits",
      title: "体験コース 特典",
      type: "array",
      of: [{ type: "string" }],
      description: "例: カウンセリング無料 / 施術後のアドバイスあり",
    }),
    // Pricing table
    defineField({
      name: "pricingColumns",
      title: "料金表",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "コース名",
              type: "string",
              description: "例: 整体コース",
            }),
            defineField({
              name: "items",
              title: "料金項目",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "メニュー名",
                      type: "string",
                      description: "例: 30分コース",
                    }),
                    defineField({
                      name: "price",
                      title: "価格",
                      type: "string",
                      description: "例: ¥4,400",
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "pricingNote",
      title: "料金表の注記",
      type: "string",
      description: "例: ※すべて税込価格です。回数券プランもございます。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "料金" }),
  },
});
