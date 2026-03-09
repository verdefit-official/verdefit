import { defineType, defineField } from "sanity";

export const coachingCancelPolicySchema = defineType({
  name: "coachingCancelPolicy",
  title: "キャンセルポリシー",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: キャンセルポリシー",
    }),
    defineField({
      name: "intro",
      title: "前書き",
      type: "text",
      rows: 3,
      description: "例: VERDE FITでは、お一人おひとりに十分なお時間を確保した完全予約制でご案内しております。\nすべてのお客様に気持ちよくご利用いただくため、下記のルールにご理解とご協力をお願いいたします。",
    }),
    defineField({
      name: "sections",
      title: "セクション",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "タイトル",
              type: "string",
              description: "例: ■ キャンセル・変更について",
            }),
            defineField({
              name: "content",
              title: "内容",
              type: "text",
              rows: 5,
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "closing",
      title: "締めの言葉",
      type: "string",
      description: "例: 皆さまが安心して通っていただける環境づくりのため、何卒ご理解のほどよろしくお願いいたします。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "キャンセルポリシー" }),
  },
});
