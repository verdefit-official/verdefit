import { defineType, defineField } from "sanity";

export const priceTrialSchema = defineType({
  name: "priceTrial",
  title: "初回体験セッション",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "セクションタイトル",
      type: "string",
      description: "例: 初回限定60分体験セッション",
    }),
    defineField({
      name: "duration",
      title: "所要時間",
      type: "string",
      description: "例: 60分",
    }),
    defineField({
      name: "badge",
      title: "バッジ",
      type: "string",
      description: "例: 初回限定",
    }),
    defineField({
      name: "regularPrice",
      title: "通常料金",
      type: "string",
      description: "例: ¥11,000",
    }),
    defineField({
      name: "trialPrice",
      title: "初回料金",
      type: "string",
      description: "例: ¥5,500",
    }),
    defineField({
      name: "detail1",
      title: "内容1",
      type: "string",
      description: "例: カウンセリング20分",
    }),
    defineField({
      name: "detail2",
      title: "内容2",
      type: "string",
      description: "例: 整体・パーソナル40分",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      description: "例: 現在の身体の状態を確認し\nあなたに最適な改善プランをご提案します。",
      rows: 3,
    }),
    defineField({
      name: "buttonText",
      title: "ボタンテキスト",
      type: "string",
      description: "例: 体験予約をする",
    }),
  ],
  preview: { prepare: () => ({ title: "初回体験セッション" }) },
});
