import { defineType, defineField } from "sanity";

export const priceCtaSchema = defineType({
  name: "priceCta",
  title: "CTA（行動喚起）",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "string",
      description: "例: あなたに合う方法を、一緒に見つけましょう",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 4,
      description: "例: 「本当に変われるのか不安」\n「自分に合う方法が分からない」\n\nそんな方のために...",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 予約はこちら",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "LINEボタンテキスト",
      type: "string",
      description: "例: LINEで相談する",
    }),
  ],
  preview: {
    prepare: () => ({ title: "CTA（行動喚起）" }),
  },
});
