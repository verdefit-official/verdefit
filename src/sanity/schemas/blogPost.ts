import { defineType, defineField } from "sanity";

export const blogPostSchema = defineType({
  name: "blogPost",
  title: "ブログ記事",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ（URL）",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
    }),
    defineField({
      name: "category",
      title: "カテゴリ",
      type: "string",
      options: {
        list: [
          { title: "整体", value: "seitai" },
          { title: "パーソナルトレーニング", value: "personal-training" },
          { title: "コーチング", value: "coaching" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "タグ",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 肩こり、腰痛、姿勢",
    }),
    defineField({
      name: "excerpt",
      title: "抜粋（一覧表示用）",
      type: "text",
      rows: 3,
      description: "記事カードに表示される短い説明文",
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "text",
      rows: 20,
    }),
    defineField({
      name: "image",
      title: "サムネイル画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAlt",
      title: "画像ALTテキスト",
      type: "string",
    }),
  ],
  orderings: [
    {
      title: "公開日（新しい順）",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      const catLabel =
        subtitle === "seitai"
          ? "整体"
          : subtitle === "personal-training"
            ? "パーソナル"
            : subtitle === "coaching"
              ? "コーチング"
              : subtitle ?? "";
      return { title: title ?? "無題", subtitle: catLabel };
    },
  },
});
