import { defineType, defineField } from "sanity";

export const chiropracticFaqSchema = defineType({
  name: "chiropracticFaq",
  title: "よくある質問",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: よくある質問" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: ご来店前に気になることはこちらでご確認いただけます。" }),
    defineField({
      name: "items",
      title: "Q&A一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "質問", type: "string", description: "例: 初回はどんな流れですか？" }),
            defineField({ name: "answer", title: "回答", type: "text", rows: 5, description: "例: カウンセリング後にお身体の状態を確認し、施術を行います。所要時間は約60〜90分です。" }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "よくある質問" }),
  },
});
