import { defineType, defineField } from "sanity";

export const personalTrainerSchema = defineType({
  name: "personalTrainer",
  title: "トレーナー紹介",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: トレーナー紹介" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: あなたの目標に、本気で向き合います。" }),
    defineField({ name: "role", title: "役職", type: "string", description: "例: 代表トレーナー" }),
    defineField({ name: "name", title: "名前", type: "string", description: "例: 吉田　宗太郎" }),
    defineField({ name: "image", title: "プロフィール画像", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "プロフィール画像の代替テキスト", type: "string", description: "例: トレーナーの吉田宗太郎" }),
    defineField({ name: "beliefText", title: "想い（本文）", type: "text", rows: 5, description: "例: 私自身も過去に体型コンプレックスを抱えていました。正しい知識と環境があれば、誰でも変われると信じています。" }),
    defineField({ name: "quote", title: "引用ボックスのテキスト", type: "text", rows: 3, description: "緑枠の中央のメッセージ" }),
    defineField({ name: "closingText", title: "締めのメッセージ", type: "text", rows: 3, description: "例: 一緒に、あなたらしい理想の体をつくりましょう。" }),
    defineField({
      name: "credentials",
      title: "保有資格・経歴",
      type: "array",
      of: [{ type: "string" }],
      description: "例: NSCA-CPT（認定パーソナルトレーナー）",
    }),
  ],
  preview: { prepare: () => ({ title: "トレーナー紹介" }) },
});
