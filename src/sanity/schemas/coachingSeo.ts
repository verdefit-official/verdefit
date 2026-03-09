import { defineType, defineField } from "sanity";

export const coachingSeoSchema = defineType({
  name: "coachingSeo",
  title: "SEO設定",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "ページタイトル",
      type: "string",
      description: "例: 横手市・秋田のコーチング｜思考と習慣を変える本格プログラム VERDE FIT",
    }),
    defineField({
      name: "metaDescription",
      title: "メタディスクリプション",
      type: "text",
      rows: 3,
      description: "例: 横手市・秋田でコーチングをお探しの方へ。VERDE FITはCOMPASS認定プロコーチによる認知科学アプローチで、ダイエット・運動・健康習慣の継続をサポート。",
    }),
    defineField({
      name: "keywords",
      title: "キーワード",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 横手市 コーチング",
    }),
    defineField({
      name: "ogTitle",
      title: "OGタイトル",
      type: "string",
    }),
    defineField({
      name: "ogDescription",
      title: "OG説明文",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: "SEO設定" }),
  },
});
