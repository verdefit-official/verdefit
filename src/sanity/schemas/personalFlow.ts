import { defineType, defineField } from "sanity";

export const personalFlowSchema = defineType({
  name: "personalFlow",
  title: "体験の流れ",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: 体験トレーニングの流れ" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: お問い合わせから体験、スタートまでの流れをご紹介します" }),
    defineField({
      name: "steps",
      title: "ステップ一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "番号", type: "string", description: "例: 01" }),
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: 問い合わせ" }),
            defineField({ name: "description", title: "説明", type: "text", rows: 2, description: "例: LINE・電話・WEBから\nお気軽にご連絡" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "体験の流れ" }) },
});
