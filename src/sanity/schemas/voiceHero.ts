import { defineType, defineField } from "sanity";

export const voiceHeroSchema = defineType({
  name: "voiceHero",
  title: "お客様の声 ヒーロー",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "text",
      description: "例: なりたい理想の自分になれた方の\nリアルな体験談",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 3,
      description: "例: VERDE FITで身体と習慣を整え、理想の自分になれたお客様のリアルな声をご紹介します。",
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
    prepare: () => ({ title: "お客様の声 ヒーロー" }),
  },
});
