import { defineType, defineField } from "sanity";

export const personalReasonsSchema = defineType({
  name: "personalReasons",
  title: "選ばれる理由",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "text", description: "例: だからVERDE FITは結果が違う" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "text", description: "例: 一人では変われなかったあなたへ。本気を形にする3つの支え" }),
    defineField({
      name: "reasons",
      title: "理由一覧",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: 完全個別指導" }),
            defineField({ name: "description", title: "説明文", type: "text", rows: 5, description: "例: お客様一人ひとりの体質・生活習慣・目標に合わせたオーダーメイドのプログラムを提供します。" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "選ばれる理由" }) },
});
