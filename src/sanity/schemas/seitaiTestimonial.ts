import { defineType, defineField } from "sanity";

export const seitaiTestimonialSchema = defineType({
  name: "seitaiTestimonial",
  title: "整体 お客様の声",
  type: "document",
  fields: [
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
      description: "新しい順に表示されます",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "smallTitle",
      title: "小見出し",
      type: "string",
      description: "例: 横手市在住・40代女性",
    }),
    defineField({
      name: "tags",
      title: "タグ",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 肩こり、姿勢",
    }),
    defineField({
      name: "heading",
      title: "見出し",
      type: "text",
      rows: 2,
      description: "例: デスクワークで慢性的な肩こりと姿勢の悪さに悩んでいました",
    }),
    defineField({
      name: "text",
      title: "本文",
      type: "text",
      rows: 6,
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
    }),
  ],
  preview: {
    select: { title: "smallTitle", subtitle: "publishedAt" },
  },
  orderings: [
    {
      title: "公開日（新しい順）",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
