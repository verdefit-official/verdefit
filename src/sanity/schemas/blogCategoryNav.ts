import { defineType, defineField } from "sanity";

export const blogCategoryNavSchema = defineType({
  name: "blogCategoryNav",
  title: "カテゴリーナビ",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: カテゴリから記事を探す",
    }),
    defineField({
      name: "items",
      title: "カテゴリー一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "ラベル", type: "string", description: "例: 整体ブログ" }),
            defineField({ name: "desc", title: "説明文", type: "text", rows: 4, description: "例: 肩こり・腰痛・姿勢改善など..." }),
            defineField({ name: "btnLabel", title: "ボタンテキスト", type: "string", description: "例: 整体の記事を見る" }),
            defineField({ name: "image", title: "画像", type: "image", options: { hotspot: true } }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string" }),
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
