import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "サイト設定",
  type: "document",
  fields: [
    defineField({
      name: "bookingUrl",
      title: "予約ボタンURL",
      type: "url",
      description: "予約システムのURL（例: https://example.com/booking）",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "lineUrl", title: "LINE URL", type: "url" }),
    defineField({
      name: "footerDescription",
      title: "フッター説明文",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "copyrightYear",
      title: "コピーライト年",
      type: "string",
      description: "例: 2026",
    }),
    defineField({
      name: "logo",
      title: "ヘッダーロゴ",
      type: "image",
      description: "ヘッダーに表示されるロゴ画像（推奨: 正方形）",
      options: { hotspot: false },
    }),
    defineField({
      name: "favicon",
      title: "ファビコン",
      type: "image",
      description: "ブラウザのタブに表示されるアイコン（推奨: 32×32 または 64×64px の正方形）",
      options: { hotspot: false },
    }),
  ],
  preview: {
    prepare: () => ({ title: "サイト設定" }),
  },
});
