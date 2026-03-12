import { defineType, defineField } from "sanity";

export const heroSchema = defineType({
  name: "hero",
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
      description: "例: 身体は何歳からでも変えられる。",
    }),
    defineField({
      name: "subheadingLocation",
      title: "サブ見出し",
      type: "string",
      description: "例: 横手市で身体と習慣を整える",
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
      description: "例: VERDE FITのトレーナーと施術の様子",
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
