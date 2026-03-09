import { defineType, defineField } from "sanity";

export const priceSeoSchema = defineType({
  name: "priceSeo",
  title: "料金ページ SEO",
  type: "document",
  fields: [
    defineField({ name: "pageTitle", title: "ページタイトル", type: "string" }),
    defineField({ name: "metaDescription", title: "メタディスクリプション", type: "text", rows: 3 }),
    defineField({ name: "keywords", title: "キーワード", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "ogTitle", title: "OGタイトル", type: "string" }),
    defineField({ name: "ogDescription", title: "OG説明文", type: "text", rows: 3 }),
  ],
  preview: {
    prepare: () => ({ title: "料金ページ SEO" }),
  },
});
