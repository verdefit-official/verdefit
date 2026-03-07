import { defineType, defineField } from "sanity";

export const concernsSchema = defineType({
  name: "concerns",
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
      description: "例: 多くの方が抱える身体の悩みを、根本から解決します。",
    }),
    defineField({
      name: "concernList",
      title: "お悩み一覧",
      type: "array",
      validation: (Rule) => Rule.max(6),
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
              description: "例: 湿布や整形外科では一時的にしか改善せず、根本から変わらないと感じている方へ。",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "rootCauseTitle",
      title: "根本原因 タイトル",
      type: "string",
      description: "例: これらの悩みの根本原因は？",
    }),
    defineField({
      name: "rootCauseText",
      title: "根本原因 テキスト",
      type: "text",
      rows: 5,
      description: "例: 筋肉のアンバランスや骨格のゆがみが積み重なり、痛みや不調を引き起こしています。表面的なケアだけでは根本は変わりません。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "お悩み" }),
  },
});
