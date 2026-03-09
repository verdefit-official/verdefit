import { defineType, defineField } from "sanity";

export const coachingCtaSchema = defineType({
  name: "coachingCta",
  title: "CTA（行動喚起）",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "string",
      description: "例: 習慣が変われば人生も変わります",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 4,
      description: "例: 「続けたいのに続かない」その原因は意志の弱さではありません。\n思考と習慣の仕組みを整えることで、行動は自然と続くようになります。\nまずは無料相談で、あなたの理想の未来と習慣づくりについて一緒に考えてみませんか。",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 無料相談を予約する",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "LINEボタンテキスト",
      type: "string",
      description: "例: LINEで相談する",
    }),
  ],
  preview: {
    prepare: () => ({ title: "CTA（行動喚起）" }),
  },
});
