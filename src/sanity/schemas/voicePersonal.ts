import { defineType, defineField } from "sanity";

export const voicePersonalSchema = defineType({
  name: "voicePersonal",
  title: "パーソナル体験談",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: パーソナルトレーニングで\n身体が変わった体験談",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      rows: 2,
      description: "例: ダイエット成功・体型改善のリアルな変化",
    }),
    defineField({
      name: "linkText",
      title: "詳細ページリンクテキスト",
      type: "string",
      description: "例: パーソナルジムの詳細ページを見る",
    }),
  ],
  preview: {
    prepare: () => ({ title: "パーソナル体験談" }),
  },
});
