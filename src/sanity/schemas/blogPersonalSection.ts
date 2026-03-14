import { defineType, defineField } from "sanity";

export const blogPersonalSectionSchema = defineType({
  name: "blogPersonalSection",
  title: "パーソナルトレーニングブログセクション",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: パーソナルトレーナーが解説するトレーニングブログ",
    }),
    defineField({
      name: "subheading",
      title: "サブ見出し",
      type: "string",
      description: "例: 〜ダイエット・筋力アップのヒント〜",
    }),
    defineField({
      name: "linkText",
      title: "もっと見るボタンテキスト",
      type: "string",
      description: "例: パーソナルトレーニングの記事をもっと見る",
    }),
  ],
  preview: {
    prepare: () => ({ title: "パーソナルトレーニングブログセクション" }),
  },
});
