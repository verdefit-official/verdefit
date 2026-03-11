import { defineType, defineField } from "sanity";

export const reasonsSchema = defineType({
  name: "reasons",
  title: "選ばれる理由",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: VERDE FITが選ばれる理由",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 横手市で多くの方に選ばれ続ける、3つの理由をご紹介します。",
    }),
    defineField({
      name: "reasonList",
      title: "理由一覧",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "番号",
              type: "string",
              description: "例: 01",
            }),
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: 国家資格者による根本改善" }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 5,
              description: "例: 柔道整復師の国家資格を持つ施術者が、姿勢・骨格・筋肉のバランスを整え、再発しにくい身体をつくります。",
            }),
            defineField({
              name: "image",
              title: "画像",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "imageAlt",
              title: "画像の代替テキスト",
              type: "string",
              description: "例: 施術者が患者の背中を施術している様子",
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
    prepare: () => ({ title: "選ばれる理由" }),
  },
});
