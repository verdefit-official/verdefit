import { defineType, defineField } from "sanity";

export const voiceCoachingSchema = defineType({
  name: "voiceCoaching",
  title: "コーチング体験談",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: コーチングを受けたお客様の声",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      rows: 2,
      description: "例: 思考と習慣が変わったリアルな体験談",
    }),
    defineField({
      name: "linkText",
      title: "詳細ページリンクテキスト",
      type: "string",
      description: "例: コーチングの声を見る",
    }),
    defineField({
      name: "voices",
      title: "体験談一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "smallTitle", title: "小見出し", type: "string", description: "例: 三日坊主だった私でも習慣が続くようになりました" }),
            defineField({ name: "heading", title: "見出し", type: "text", rows: 2, description: "例: これまで何を始めても続かないことが悩みでした" }),
            defineField({ name: "text", title: "本文", type: "text", rows: 5, description: "例: これまで運動やダイエットを始めても..." }),
            defineField({ name: "imageUrl", title: "画像URL", type: "string", description: "例: /voice-coaching-01.png" }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: お客様の写真" }),
          ],
          preview: {
            select: { title: "smallTitle" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "コーチング体験談" }),
  },
});
