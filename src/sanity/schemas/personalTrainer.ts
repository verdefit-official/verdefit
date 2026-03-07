import { defineType, defineField } from "sanity";

export const personalTrainerSchema = defineType({
  name: "personalTrainer",
  title: "トレーナー紹介",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: トレーナー紹介" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string" }),
    defineField({ name: "role", title: "役職", type: "string", description: "例: 代表トレーナー" }),
    defineField({ name: "name", title: "名前", type: "string", description: "例: 吉田　宗太郎" }),
    defineField({ name: "image", title: "プロフィール画像", type: "image", options: { hotspot: true } }),
    defineField({ name: "beliefText", title: "想い（本文）", type: "text", rows: 5 }),
    defineField({ name: "quote", title: "引用ボックスのテキスト", type: "text", rows: 3, description: "緑枠の中央のメッセージ" }),
    defineField({ name: "closingText", title: "締めのメッセージ", type: "text", rows: 3 }),
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
