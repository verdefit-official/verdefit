import { defineType, defineField } from "sanity";

export const voiceSmallCtaSchema = defineType({
  name: "voiceSmallCta",
  title: "スモールCTA",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "text",
      description: "例: あなたも変化を体験しませんか？",
    }),
    defineField({
      name: "subText",
      title: "サブテキスト",
      type: "text",
      rows: 2,
      description: "例: 1人で悩まず、まずはお気軽にご相談ください",
    }),
    defineField({
      name: "bottomText",
      title: "下部テキスト",
      type: "text",
      rows: 2,
      description: "例: それぞれのアプローチで、あなたの身体をサポートします。",
    }),
  ],
  preview: {
    prepare: () => ({ title: "スモールCTA" }),
  },
});
