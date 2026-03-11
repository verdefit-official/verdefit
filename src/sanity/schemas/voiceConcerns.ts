import { defineType, defineField } from "sanity";

export const voiceConcernsSchema = defineType({
  name: "voiceConcerns",
  title: "お客様の声 お悩みセクション",
  type: "document",
  fields: [
    defineField({
      name: "concerns",
      title: "お悩みタグ一覧",
      type: "array",
      of: [{ type: "string" }],
      description: "例: 肩こりや腰痛、運動不足、ダイエット失敗 など",
    }),
    defineField({
      name: "subText",
      title: "サブテキスト（上部）",
      type: "text",
      rows: 2,
      description: "例: その悩みを、3つのアプローチで解決しています。",
    }),
    defineField({
      name: "bottomText",
      title: "下部テキスト",
      type: "text",
      rows: 2,
      description: "例: ここでは実際に変化を実感されたお客様の声をご紹介します。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声 お悩みセクション" }),
  },
});
