import { defineType, defineField } from "sanity";

export const blogSeoSchema = defineType({
  name: "blogSeo",
  title: "SEO設定",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "ページタイトル",
      type: "string",
      description: "ブラウザのタブに表示されるタイトル",
    }),
    defineField({
      name: "metaDescription",
      title: "メタディスクリプション",
      type: "text",
      rows: 3,
      description: "検索結果に表示される説明文（120〜160文字推奨）",
    }),
    defineField({
      name: "keywords",
      title: "キーワード",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ogTitle",
      title: "OGP タイトル",
      type: "string",
      description: "SNSシェア時のタイトル（空欄の場合はページタイトルを使用）",
    }),
    defineField({
      name: "ogDescription",
      title: "OGP 説明文",
      type: "text",
      rows: 2,
      description: "SNSシェア時の説明文（空欄の場合はメタディスクリプションを使用）",
    }),
    defineField({
      name: "ogImage",
      title: "OGP 画像",
      type: "image",
      options: { hotspot: true },
      description: "SNSシェア時のサムネイル（推奨: 1200×630px）",
    }),
  ],
  preview: {
    prepare: () => ({ title: "SEO設定" }),
  },
});
