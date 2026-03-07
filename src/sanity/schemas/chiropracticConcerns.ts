import { defineType, defineField } from "sanity";

export const chiropracticConcernsSchema = defineType({
  name: "chiropracticConcerns",
  title: "お悩み",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
      description: "例: こんなお悩みはありませんか？",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
      description: "例: 多くの方が抱える身体の悩みを、根本から解決します。（空白にするとサブテキストは非表示になります）",
    }),
    defineField({
      name: "listImage",
      title: "サイドイメージ",
      type: "image",
      options: { hotspot: true },
      description: "リスト左側に表示する画像",
    }),
    defineField({
      name: "concernList",
      title: "お悩み一覧",
      type: "array",
      validation: (Rule) => Rule.max(8),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: 慢性的な腰痛・肩こりが続いている" }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 3,
              description: "例: 整形外科や湿布では改善せず、根本から変わりたいと感じている。",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "お悩み" }),
  },
});
