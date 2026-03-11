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
  ],
  preview: {
    prepare: () => ({ title: "コーチング体験談" }),
  },
});
