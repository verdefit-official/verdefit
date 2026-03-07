import { defineType, defineField } from "sanity";

export const testimonialsSchema = defineType({
  name: "testimonials",
  title: "お客様の声",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: お客様の声",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
      description: "例: 実際にVERDE FITをご利用いただいたお客様からのリアルな声をご紹介します。",
    }),
    defineField({
      name: "voiceList",
      title: "お客様の声一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "goal",
              title: "ご利用目的",
              type: "string",
              description: "例: ダイエット・体型改善",
            }),
            defineField({
              name: "demographics",
              title: "属性",
              type: "string",
              description: "例: 30代女性",
            }),
            defineField({
              name: "result",
              title: "結果テキスト",
              type: "text",
              rows: 3,
              description: "例: 3ヶ月で8kg減。食事制限なしでここまで変われると思っていませんでした。",
            }),
            defineField({
              name: "image",
              title: "画像",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "imageAlt",
              title: "画像の代替テキスト",
              type: "string",
              description: "例: 30代女性のお客様",
            }),
          ],
          preview: {
            select: { title: "goal", subtitle: "demographics" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声" }),
  },
});
