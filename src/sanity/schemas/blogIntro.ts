import { defineType, defineField } from "sanity";

export const blogIntroSchema = defineType({
  name: "blogIntro",
  title: "ブログ紹介",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "セクション見出し",
      type: "text",
      description: "例: 身体の悩みを解決する健康ブログ",
    }),
    defineField({
      name: "tags",
      title: "お悩みタグ一覧",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 肩こり、腰痛、姿勢、ダイエット、運動不足",
    }),
    defineField({
      name: "descriptions",
      title: "説明文",
      type: "text",
      rows: 6,
      description: "例: 肩こり・腰痛・姿勢・ダイエット・習慣改善など、身体の悩みを解決するヒントをお届けします。\nVERDE FITでは、整体・パーソナルトレーニング・コーチングの3つの視点から身体改善をサポートしています。",
    }),
    defineField({
      name: "latestSectionTitle",
      title: "最新記事セクション見出し",
      type: "string",
      description: "例: 最新記事",
    }),
  ],
  preview: {
    prepare: () => ({ title: "ブログ紹介" }),
  },
});
