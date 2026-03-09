import { defineType, defineField } from "sanity";

export const coachingFaqSchema = defineType({
  name: "coachingFaq",
  title: "よくある質問",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: よくある質問",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
      description: "例: 横手市・秋田でコーチングを受ける前の疑問を解消",
    }),
    defineField({
      name: "items",
      title: "Q&A一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "質問",
              type: "string",
              description: "例: コーチングとはどんなことをするのですか？",
            }),
            defineField({
              name: "answer",
              title: "回答",
              type: "text",
              rows: 5,
            }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "よくある質問" }),
  },
});
