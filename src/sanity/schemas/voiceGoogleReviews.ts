import { defineType, defineField } from "sanity";

export const voiceGoogleReviewsSchema = defineType({
  name: "voiceGoogleReviews",
  title: "Googleクチコミ",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: Google口コミでも\n高評価をいただいています",
    }),
    defineField({
      name: "reviews",
      title: "クチコミ一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "お名前", type: "string", description: "例: 横手市在住・Mさん" }),
            defineField({ name: "text", title: "クチコミ本文", type: "text", rows: 4, description: "例: 丁寧なカウンセリングで..." }),
          ],
          preview: {
            select: { title: "name" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Googleクチコミ" }),
  },
});
