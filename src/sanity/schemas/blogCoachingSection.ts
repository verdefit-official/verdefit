import { defineType, defineField } from "sanity";

export const blogCoachingSectionSchema = defineType({
  name: "blogCoachingSection",
  title: "コーチングブログセクション",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 思考と習慣を変えるコーチングブログ",
    }),
    defineField({
      name: "subheading",
      title: "サブ見出し",
      type: "string",
      description: "例: 〜行動習慣・マインドセットのヒント〜",
    }),
    defineField({
      name: "linkText",
      title: "もっと見るボタンテキスト",
      type: "string",
      description: "例: コーチングの記事をもっと見る",
    }),
  ],
  preview: {
    prepare: () => ({ title: "コーチングブログセクション" }),
  },
});
