import { defineType, defineField } from "sanity";

export const personalHeroSchema = defineType({
  name: "personalHero",
  title: "ヒーロー",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "メイン見出し", type: "string", description: "例: もうリバウンドしない身体づくりを横手で。" }),
    defineField({ name: "subheading", title: "サブ見出し", type: "text", rows: 2, description: "例: 横手市で理想の身体を作る完全個別パーソナルトレーニング" }),
    defineField({ name: "image", title: "ヒーロー画像", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: トレーナーと女性クライアントがトレーニングしている様子" }),
    defineField({ name: "primaryButtonText", title: "予約ボタンテキスト", type: "string", description: "例: 予約はこちら" }),
    defineField({ name: "secondaryButtonText", title: "LINEボタンテキスト", type: "string", description: "例: LINEで相談する" }),
  ],
  preview: { prepare: () => ({ title: "ヒーロー" }) },
});
