import { defineType, defineField } from "sanity";

export const cancelPolicySchema = defineType({
  name: "cancelPolicy",
  title: "キャンセルポリシー",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "前書き",
      type: "text",
      rows: 3,
      description: "「大切なお知らせ」の下に表示される説明文",
    }),
    defineField({
      name: "sections",
      title: "各セクション",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: ■ キャンセル・変更について" }),
            defineField({ name: "content", title: "内容", type: "text", rows: 6 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "closing",
      title: "締めの文",
      type: "string",
      description: "例: 皆さまが安心して通っていただける環境づくりのため、何卒ご理解のほどよろしくお願いいたします。",
    }),
  ],
  preview: { prepare: () => ({ title: "キャンセルポリシー" }) },
});
