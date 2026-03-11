import { defineType, defineField } from "sanity";

export const coachingFeaturesSchema = defineType({
  name: "coachingFeatures",
  title: "VERDE FITのメソッド",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: VERDE FITの習慣が変わる3つのメソッド",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 思考・行動・環境を整え続く自分をつくる",
    }),
    defineField({
      name: "features",
      title: "メソッド一覧",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "タイトル",
              type: "string",
              description: "例: 科学的習慣化メソッド",
            }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 4,
              description: "例: 脳科学・行動経済学・認知心理学に基づいた、エビデンスのあるアプローチ。",
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "VERDE FITのメソッド" }),
  },
});
