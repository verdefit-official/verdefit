import { defineType, defineField } from "sanity";

export const chiropracticHeroSchema = defineType({
  name: "chiropracticHero",
  title: "ヒーロー",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "バッジテキスト",
      type: "string",
      description: "例: 2026年春 GRAND OPEN",
    }),
    defineField({
      name: "heading",
      title: "メイン見出し",
      type: "string",
      description: "例: 将来の身体に不安を感じている方へ",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 5,
      description: "例: 延べ5,000人以上を治療してきた国家資格者が横手市であなたの痛みを根本から整えます。",
    }),
    defineField({
      name: "image",
      title: "ヒーロー画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAlt",
      title: "画像の代替テキスト",
      type: "string",
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
    prepare: () => ({ title: "ヒーロー" }),
  },
});
