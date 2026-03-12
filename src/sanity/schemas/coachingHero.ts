import { defineType, defineField } from "sanity";

export const coachingHeroSchema = defineType({
  name: "coachingHero",
  title: "ヒーロー",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "バッジテキスト",
      type: "string",
      description: "例: COMPASS認定プロコーチ",
    }),
    defineField({
      name: "heading",
      title: "メイン見出し",
      type: "string",
      description: "例: 横手市・秋田で、挫折しない自分へ。",
    }),
    defineField({
      name: "subheading",
      title: "サブ見出し",
      type: "text",
      rows: 2,
      description: "例: 思考と習慣を整え、「続かない」を卒業する本格コーチング",
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
      description: "例: コーチとクライアントがコーチングセッションを行っている様子",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 無料相談はこちら",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "LINEボタンテキスト",
      type: "string",
      description: "例: LINEで相談する",
    }),
  ],
  preview: {
    prepare: () => ({ title: "ヒーロー" }),
  },
});
