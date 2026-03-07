import { defineType, defineField } from "sanity";

export const personalSeoSchema = defineType({
  name: "personalSeo",
  title: "SEO設定",
  type: "document",
  fields: [
    defineField({ name: "pageTitle", title: "ページタイトル", type: "string", description: "例: パーソナルトレーニング｜VERDE FIT" }),
    defineField({ name: "metaDescription", title: "メタディスクリプション", type: "text", rows: 3, description: "検索結果に表示される説明文（120〜160文字推奨）" }),
    defineField({ name: "keywords", title: "キーワード", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "ogTitle", title: "OGP タイトル", type: "string" }),
    defineField({ name: "ogDescription", title: "OGP 説明文", type: "text", rows: 2 }),
    defineField({ name: "ogImage", title: "OGP 画像", type: "image", options: { hotspot: true }, description: "SNSシェア時のサムネイル（推奨: 1200×630px）" }),
  ],
  preview: { prepare: () => ({ title: "SEO設定" }) },
});
