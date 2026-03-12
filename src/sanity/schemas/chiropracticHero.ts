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
      title: "サブ見出し",
      type: "text",
      rows: 2,
      description: "例: 延べ5,000人以上を施術してきた国家資格者が、横手で痛みの原因から整えます",
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
      description: "例: 施術者が患者の背中を丁寧に施術している様子",
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
