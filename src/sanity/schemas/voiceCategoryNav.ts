import { defineType, defineField } from "sanity";

export const voiceCategoryNavSchema = defineType({
  name: "voiceCategoryNav",
  title: "カテゴリーナビ",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: あなたと同じ悩みの体験談を探す",
    }),
    defineField({
      name: "items",
      title: "カテゴリー一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "ラベル", type: "string", description: "例: 整体のお客様の声" }),
            defineField({ name: "desc", title: "説明文", type: "text", rows: 4, description: "例: 肩こり・腰痛・姿勢の乱れなど..." }),
            defineField({ name: "btnLabel", title: "ボタンテキスト", type: "string", description: "例: 整体の声を見る" }),
            defineField({ name: "imageUrl", title: "画像URL", type: "string", description: "例: /voice-seitai.png" }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: 整体のカテゴリー画像" }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "カテゴリーナビ" }),
  },
});
