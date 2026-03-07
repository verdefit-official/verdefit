import { defineType, defineField } from "sanity";

export const personalHeroSchema = defineType({
  name: "personalHero",
  title: "ヒーロー",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "メイン見出し", type: "string", description: "例: 横手市で一生、リバウンドしない身体づくりを始めませんか？" }),
    defineField({ name: "subheading", title: "サブ見出し", type: "text", rows: 2, description: "例: 一時的に痩せるダイエットからの卒業。\n一生モノの身体と習慣を身につけることができる。" }),
    defineField({ name: "description", title: "説明文", type: "text", rows: 4, description: "例: NSCA認定トレーナーが完全個別指導。食事・運動・習慣のすべてをサポートします。" }),
    defineField({ name: "image", title: "ヒーロー画像", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: トレーナーと女性クライアントがトレーニングしている様子" }),
    defineField({ name: "primaryButtonText", title: "予約ボタンテキスト", type: "string", description: "例: 予約はこちら" }),
    defineField({ name: "secondaryButtonText", title: "LINEボタンテキスト", type: "string", description: "例: LINEで相談する" }),
  ],
  preview: { prepare: () => ({ title: "ヒーロー" }) },
});
