import { defineType, defineField } from "sanity";

export const profileSchema = defineType({
  name: "profile",
  title: "代表プロフィール",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: 代表プロフィール",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
      description: "例: あなたの身体と人生に、本気で向き合います。",
    }),
    defineField({
      name: "role",
      title: "肩書き",
      type: "string",
      description: "例: 代表 / 施術者",
    }),
    defineField({ name: "name", title: "氏名", type: "string", description: "例: 吉田　宗太郎" }),
    defineField({
      name: "image",
      title: "写真",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAlt",
      title: "写真の代替テキスト",
      type: "string",
      description: "例: 代表の吉田宗太郎",
    }),
    defineField({
      name: "beliefTitle",
      title: "想いのタイトル",
      type: "string",
      description: "例: 「痛みのない人生を、すべての人に」",
    }),
    defineField({
      name: "beliefDescription",
      title: "想いの説明（1段落目）",
      type: "text",
      rows: 5,
      description: "例: 私自身、学生時代から身体のコンプレックスを抱えていました。正しい知識と環境があれば、誰でも変われると信じています。",
    }),
    defineField({
      name: "highlight",
      title: "ハイライトテキスト（枠内）",
      type: "text",
      rows: 3,
      description: "例: 「一時的な変化ではなく、一生続く習慣を。」",
    }),
    defineField({
      name: "closingText",
      title: "締めのテキスト（2段落目）",
      type: "text",
      rows: 5,
      description: "例: あなたの目標を一緒に実現しましょう。横手市で、本気で向き合います。",
    }),
    defineField({
      name: "credentials",
      title: "経歴・資格",
      type: "array",
      of: [{ type: "string" }],
      description: "例: NSCA-CPT（認定パーソナルトレーナー）",
    }),
  ],
  preview: {
    prepare: () => ({ title: "代表プロフィール" }),
  },
});
