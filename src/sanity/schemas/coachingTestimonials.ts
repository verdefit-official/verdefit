import { defineType, defineField } from "sanity";

export const coachingTestimonialsSchema = defineType({
  name: "coachingTestimonials",
  title: "お客様の声",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 習慣が変わったお客様の声",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 横手市・秋田エリアで思考と習慣が変わった体験談",
    }),
    defineField({
      name: "testimonials",
      title: "体験談一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "お名前",
              type: "string",
              description: "例: M.Kさん",
            }),
            defineField({
              name: "demographics",
              title: "属性",
              type: "string",
              description: "例: 30代女性・横手市在住",
            }),
            defineField({
              name: "before",
              title: "BEFORE（来店前の状態）",
              type: "string",
              description: "例: ダイエットが続かず自信喪失",
            }),
            defineField({
              name: "after",
              title: "AFTER（来店後の変化）",
              type: "string",
              description: "例: 3ヶ月で運動習慣が定着",
            }),
            defineField({
              name: "text",
              title: "体験談",
              type: "text",
              rows: 4,
              description: "例: 何度もダイエットに失敗していましたが、コーチングで「なぜ続かないのか」の本質が分かりました。",
            }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声" }),
  },
});
