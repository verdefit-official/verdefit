import { defineType, defineField } from "sanity";

export const blogSeitaiSectionSchema = defineType({
  name: "blogSeitaiSection",
  title: "整体ブログ",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 整体師が解説する身体改善ブログ",
    }),
    defineField({
      name: "subheading",
      title: "サブ見出し",
      type: "string",
      description: "例: 〜肩こり・腰痛・姿勢改善のヒント〜",
    }),
    defineField({
      name: "linkText",
      title: "もっと見るボタンテキスト",
      type: "string",
      description: "例: 整体の記事をもっと見る",
    }),
  ],
  preview: {
    prepare: () => ({ title: "整体ブログ" }),
  },
});
