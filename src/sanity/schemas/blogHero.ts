import { defineType, defineField } from "sanity";

export const blogHeroSchema = defineType({
  name: "blogHero",
  title: "ヒーロー",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "text",
      description: "例: 身体を変える知識を\n横手市から発信",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 3,
      description: "例: 整体・パーソナルトレーニング・コーチングの専門家が、健康づくりに役立つ情報をお届けします。",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 無料体験",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "LINEボタンテキスト",
      type: "string",
      description: "例: LINE相談",
    }),
  ],
  preview: {
    prepare: () => ({ title: "ヒーロー" }),
  },
});
