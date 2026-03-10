import { defineType, defineField } from "sanity";

export const priceHeroSchema = defineType({
  name: "priceHero",
  title: "料金ページ ヒーロー",
  type: "document",
  fields: [
    defineField({
      name: "subtitle",
      title: "サブタイトル",
      type: "string",
      description: "例: ご不明な点などはお気軽にご相談ください。",
    }),
  ],
  preview: { prepare: () => ({ title: "料金ページ ヒーロー" }) },
});
