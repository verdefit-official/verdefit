import { defineType, defineField } from "sanity";

export const chiropracticProfileSchema = defineType({
  name: "chiropracticProfile",
  title: "代表プロフィール",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: 代表プロフィール" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: あなたの痛みに、本気で向き合います。" }),
    defineField({ name: "role", title: "肩書き", type: "string", description: "例: 代表 / 施術者" }),
    defineField({ name: "name", title: "氏名", type: "string", description: "例: 吉田　宗太郎" }),
    defineField({
      name: "image",
      title: "写真",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "beliefDescription",
      title: "想いの説明",
      type: "text",
      rows: 5,
      description: "例: 私は延べ5,000人以上の施術を通じて、表面的なケアでは限界があることを実感してきました。",
    }),
    defineField({
      name: "highlight",
      title: "ハイライトテキスト（枠内）",
      type: "text",
      rows: 3,
      description: "例: 「痛みのない人生を、すべての人に」",
    }),
    defineField({
      name: "closingText",
      title: "締めのテキスト",
      type: "text",
      rows: 5,
      description: "例: あなたの身体の悩みを根本から解決し、痛みのない毎日を一緒につくりましょう。",
    }),
    defineField({
      name: "history",
      title: "経歴",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 1995.10.16 横手市出身",
    }),
    defineField({
      name: "credentials",
      title: "保有資格",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 柔道整復師（国家資格）",
    }),
  ],
  preview: {
    prepare: () => ({ title: "代表プロフィール" }),
  },
});
