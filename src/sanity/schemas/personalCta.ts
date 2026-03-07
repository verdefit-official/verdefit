import { defineType, defineField } from "sanity";

export const personalCtaSchema = defineType({
  name: "personalCta",
  title: "CTA",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "見出し", type: "string", description: "例: いつか変わりたいを今日から始めませんか？" }),
    defineField({ name: "subheading", title: "サブ見出し", type: "string", description: "例: 無料カウンセリング実施中" }),
    defineField({ name: "description", title: "説明文", type: "text", rows: 5, description: "例: 横手市で、理想の身体と一生続く習慣を。まずは無料カウンセリングからお気軽にどうぞ。" }),
    defineField({ name: "primaryButtonText", title: "予約ボタンテキスト", type: "string", description: "例: 予約はこちら" }),
    defineField({ name: "secondaryButtonText", title: "LINEボタンテキスト", type: "string", description: "例: LINEで相談する" }),
  ],
  preview: { prepare: () => ({ title: "CTA" }) },
});
