import { defineType, defineField } from "sanity";

export const personalCancelPolicySchema = defineType({
  name: "personalCancelPolicy",
  title: "キャンセルポリシー",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: キャンセルポリシー" }),
    defineField({ name: "intro", title: "イントロ文", type: "text", rows: 3, description: "大切なお知らせの下に表示される説明文" }),
    defineField({
      name: "sections",
      title: "各セクション",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "セクションタイトル", type: "string", description: "例: ■ キャンセル・変更について" }),
            defineField({ name: "content", title: "内容", type: "text", rows: 6 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({ name: "closing", title: "締めの文", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "キャンセルポリシー" }) },
});
