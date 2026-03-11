import { defineType, defineField } from "sanity";

export const personalBeforeAfterSchema = defineType({
  name: "personalBeforeAfter",
  title: "before/after",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "text", description: "例: 身体が変わると人生も変わります。" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "text", description: "例: 数字だけでなく、生活が変わった。そんな声が届いています。" }),
    defineField({
      name: "cards",
      title: "カード一覧",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "ラベル", type: "string", description: "例: 代表のbefore/after（30代）在住" }),
            defineField({ name: "result", title: "結果", type: "string", description: "例: −30kg達成" }),
            defineField({ name: "text", title: "本文", type: "text", rows: 5, description: "例: 食事の量を減らすだけでは変わらなかった体型が、正しい方法を知ることで6ヶ月で30kg減を達成しました。" }),
            defineField({ name: "image", title: "画像", type: "image", options: { hotspot: true } }),
            defineField({ name: "imageAlt", title: "画像の代替テキスト", type: "string", description: "例: 代表の施術前後の比較写真" }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "before/after" }) },
});
