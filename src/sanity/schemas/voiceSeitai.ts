import { defineType, defineField } from "sanity";

export const voiceSeitaiSchema = defineType({
  name: "voiceSeitai",
  title: "お客様の声 整体セクション",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 整体で不調が改善したお客様の体験談",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      rows: 2,
      description: "例: 肩こり・腰痛など慢性的な不調が改善したリアルな声",
    }),
    defineField({
      name: "linkText",
      title: "詳細ページリンクテキスト",
      type: "string",
      description: "例: 整体の詳細ページを見る",
    }),
    defineField({
      name: "voices",
      title: "体験談一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "smallTitle", title: "小見出し", type: "string", description: "例: 長年の肩こりが楽になりました" }),
            defineField({
              name: "tags",
              title: "タグ一覧",
              type: "array",
              of: [{ type: "string" }],
              description: "例: 肩こり、姿勢",
            }),
            defineField({ name: "heading", title: "見出し", type: "text", rows: 2, description: "例: デスクワークで慢性的な肩こりと姿勢の悪さに悩んでいました" }),
            defineField({ name: "text", title: "本文", type: "text", rows: 5, description: "例: デスクワークが多く..." }),
            defineField({ name: "imageUrl", title: "画像URL", type: "string", description: "例: /voice-seitai-01.png" }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: お客様の写真" }),
          ],
          preview: {
            select: { title: "smallTitle" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声 整体セクション" }),
  },
});
