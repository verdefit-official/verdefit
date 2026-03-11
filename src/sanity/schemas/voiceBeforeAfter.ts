import { defineType, defineField } from "sanity";

export const voiceBeforeAfterSchema = defineType({
  name: "voiceBeforeAfter",
  title: "成功事例",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 理想の身体を手に入れた成功事例",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      rows: 2,
      description: "例: VERDE FITで理想の身体を手に入れた方々の変化",
    }),
    defineField({
      name: "cases",
      title: "事例一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "ラベル", type: "string", description: "例: 横手市在住・30代女性" }),
            defineField({ name: "result", title: "結果", type: "string", description: "例: −8kg達成" }),
            defineField({ name: "imageUrl", title: "画像URL", type: "string", description: "例: /voice-beforeafter-01.png" }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: 成功事例写真" }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "成功事例" }),
  },
});
