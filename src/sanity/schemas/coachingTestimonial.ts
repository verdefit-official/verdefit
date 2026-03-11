import { defineType, defineField } from "sanity";

export const coachingTestimonialSchema = defineType({
  name: "coachingTestimonial",
  title: "コーチング お客様の声",
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
      description: "例: 三日坊主だった私でも習慣が続くようになりました",
    }),
    defineField({
      name: "heading",
      title: "見出し",
      type: "text",
      rows: 2,
      description: "例: これまで何を始めても続かないことが悩みでした",
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
