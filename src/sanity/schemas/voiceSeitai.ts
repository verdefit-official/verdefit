import { defineType, defineField } from "sanity";

export const voiceSeitaiSchema = defineType({
  name: "voiceSeitai",
  title: "整体体験談",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 整体で不調が改善したお客様の体験談",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      rows: 2,
      description: "例: 肩こり・腰痛など慢性的な不調が改善したリアルな声",
    }),
    defineField({
      name: "linkText",
      title: "詳細ページリンクテキスト",
      type: "string",
      description: "例: 整体の詳細ページを見る",
    }),
  ],
  preview: {
    prepare: () => ({ title: "整体体験談" }),
  },
});
