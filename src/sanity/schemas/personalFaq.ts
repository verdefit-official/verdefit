import { defineType, defineField } from "sanity";

export const personalFaqSchema = defineType({
  name: "personalFaq",
  title: "よくある質問",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "text", description: "例: よくある質問" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "text", description: "例: 横手市でのダイエット・ジム選びの疑問を解消" }),
    defineField({
      name: "items",
      title: "Q&A一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "質問", type: "string", description: "例: 運動が苦手でも大丈夫ですか？" }),
            defineField({ name: "answer", title: "回答", type: "text", rows: 5, description: "例: はい、大丈夫です。体力レベルに合わせて無理のないプログラムを作成しますので安心してご参加ください。" }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "よくある質問" }) },
});
