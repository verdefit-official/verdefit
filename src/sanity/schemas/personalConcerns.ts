import { defineType, defineField } from "sanity";

export const personalConcernsSchema = defineType({
  name: "personalConcerns",
  title: "ダイエットが続かない理由",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: ダイエットをしても続かない、効果が出ない本当の理由" }),
    defineField({
      name: "items",
      title: "項目一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string" }),
            defineField({ name: "description", title: "説明文", type: "text", rows: 5 }),
            defineField({ name: "icon", title: "アイコン画像", type: "image", options: { hotspot: false } }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "ダイエットが続かない理由" }) },
});
