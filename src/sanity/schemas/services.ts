import { defineType, defineField } from "sanity";

export const servicesSchema = defineType({
  name: "services",
  title: "サービス",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: VERDE FITのサービス",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 整体・パーソナルトレーニングの2つのアプローチで、あなたの身体を根本から変えます。",
    }),
    defineField({
      name: "serviceList",
      title: "サービス一覧",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: 整体" }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 5,
              description: "例: 国家資格者が骨格・姿勢・筋肉のバランスを整え、慢性的な痛みや不調を根本から改善します。",
            }),
            defineField({
              name: "buttonText",
              title: "ボタンテキスト",
              type: "string",
              description: "例: 詳しく見る",
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
    prepare: () => ({ title: "サービス" }),
  },
});
