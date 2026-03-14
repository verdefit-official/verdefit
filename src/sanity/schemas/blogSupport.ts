import { defineType, defineField } from "sanity";

export const blogSupportSchema = defineType({
  name: "blogSupport",
  title: "3つのサポート",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクション見出し",
      type: "text",
      description: "例: VERDE FITの3つのサポート",
    }),
    defineField({
      name: "items",
      title: "サポート一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "サービス名", type: "string", description: "例: 整体" }),
            defineField({ name: "desc", title: "説明文", type: "text", rows: 2, description: "例: 国家資格保有者による根本改善の整体施術" }),
            defineField({ name: "buttonText", title: "ボタンテキスト", type: "string", description: "例: 詳しく見る" }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "3つのサポート" }),
  },
});
