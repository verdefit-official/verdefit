import { defineType, defineField } from "sanity";

export const voicePersonalSchema = defineType({
  name: "voicePersonal",
  title: "お客様の声 パーソナルセクション",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: パーソナルトレーニングで\n身体が変わった体験談",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      rows: 2,
      description: "例: ダイエット成功・体型改善のリアルな変化",
    }),
    defineField({
      name: "linkText",
      title: "詳細ページリンクテキスト",
      type: "string",
      description: "例: パーソナルジムの詳細ページを見る",
    }),
    defineField({
      name: "cards",
      title: "カード一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "smallTitle", title: "小見出し", type: "string", description: "例: 横手市在住・30代女性" }),
            defineField({ name: "heading", title: "見出し", type: "text", rows: 2, description: "例: 3ヶ月で-8kg達成" }),
            defineField({ name: "text", title: "本文", type: "text", rows: 5, description: "例: 今まで何度もダイエットに失敗していましたが..." }),
            defineField({
              name: "stats",
              title: "結果数値",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "ラベル", type: "string", description: "例: 体重" }),
                    defineField({ name: "value", title: "値", type: "string", description: "例: -8kg" }),
                  ],
                  preview: { select: { title: "label" } },
                },
              ],
            }),
            defineField({ name: "imageUrl", title: "画像URL", type: "string", description: "例: /voice-personal-01.png" }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: ビフォーアフター写真" }),
          ],
          preview: {
            select: { title: "smallTitle" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声 パーソナルセクション" }),
  },
});
