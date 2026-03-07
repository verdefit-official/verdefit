import { defineType, defineField } from "sanity";

export const personalBeforeAfterSchema = defineType({
  name: "personalBeforeAfter",
  title: "before/after",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: 身体が変わると人生も変わります。" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string" }),
    defineField({
      name: "cards",
      title: "カード一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "ラベル", type: "string", description: "例: 代表のbefore/after（30代）在住" }),
            defineField({ name: "result", title: "結果", type: "string", description: "例: −30kg達成" }),
            defineField({ name: "text", title: "本文", type: "text", rows: 5 }),
            defineField({ name: "image", title: "画像", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "before/after" }) },
});
