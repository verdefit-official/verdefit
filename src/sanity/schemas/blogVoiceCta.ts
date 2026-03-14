import { defineType, defineField } from "sanity";

export const blogVoiceCtaSchema = defineType({
  name: "blogVoiceCta",
  title: "お客様の声CTA",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "text",
      description: "例: 横手市で身体が変わったリアルな体験談",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 3,
      description: "例: VERDE FITで行っている整体・トレーニング・コーチングは、実際に多くのお客様が変化を実感している方法です。",
    }),
    defineField({
      name: "buttonText",
      title: "ボタンテキスト",
      type: "string",
      description: "例: お客様の声を見る",
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声CTA" }),
  },
});
