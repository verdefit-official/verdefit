import { defineType, defineField } from "sanity";

export const coachingWhyFailSchema = defineType({
  name: "coachingWhyFail",
  title: "続かない理由セクション",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 「意志が弱い」は間違い。運動・ダイエットが続かない本当の理由",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 横手市・秋田で健康づくりや習慣改善に取り組む多くの方が、こんな経験をされています。",
    }),
    defineField({
      name: "bullets",
      title: "当てはまる項目（箇条書き）",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 「今日は疲れたから明日にしよう」と先延ばしにしてしまう",
    }),
    defineField({
      name: "rootCauseTitle",
      title: "根本原因 タイトル",
      type: "string",
      description: "例: 実は、これは意志の問題ではありません",
    }),
    defineField({
      name: "rootCauseText",
      title: "根本原因 説明文",
      type: "text",
      rows: 4,
      description: "例: 脳は「現状維持」を好む仕組みになっています。新しい行動を始めようとすると、脳が自動的にブレーキをかけ、元の習慣に戻そうとするのです。",
    }),
    defineField({
      name: "bottomBoxText",
      title: "下部ボックス テキスト",
      type: "text",
      rows: 2,
      description: "例: VERDE FITのコーチングでは、横手市・秋田で習慣改善に悩む方々に、認知科学に基づいた「続く仕組み」をお伝えします。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "続かない理由セクション" }),
  },
});
