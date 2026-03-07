import { defineType, defineField } from "sanity";

export const ctaSchema = defineType({
  name: "cta",
  title: "CTA",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "string",
      description: "例: まずは気軽にご相談ください",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 4,
      description: "例: 横手市で、あなたの身体の悩みに本気で向き合います。初回カウンセリングは無料です。",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 予約はこちら",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "電話ボタンテキスト",
      type: "string",
      description: "例: お電話でのご相談",
    }),
  ],
  preview: {
    prepare: () => ({ title: "CTA" }),
  },
});
