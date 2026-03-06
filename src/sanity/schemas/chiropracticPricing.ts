import { defineType, defineField } from "sanity";

export const chiropracticPricingSchema = defineType({
  name: "chiropracticPricing",
  title: "料金案内",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: 料金案内" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: 明瞭な料金体系で、安心してご利用いただけます" }),

    // 初回限定
    defineField({ name: "trialBadge", title: "初回限定 バッジ", type: "string", description: "例: 初回限定" }),
    defineField({ name: "trialTitle", title: "初回限定 タイトル", type: "string", description: "例: 初回カウンセリング整体" }),
    defineField({ name: "trialPrice", title: "初回限定 料金", type: "string", description: "例: ¥5,500" }),
    defineField({ name: "trialDetails", title: "初回限定 内容", type: "string", description: "例: カウンセリング30分+整体30分/60分" }),

    // 通常コース
    defineField({
      name: "courses",
      title: "通常コース",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "コース名", type: "string", description: "例: 30分整体" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥4,400" }),
            defineField({ name: "description", title: "説明", type: "string", description: "例: 整体 / 30分コース" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),

    // オプション
    defineField({
      name: "options",
      title: "オプション",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "名称", type: "string", description: "例: 骨盤矯正" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥1,500" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),

    // 回数券
    defineField({ name: "couponSectionTitle", title: "回数券 セクションタイトル", type: "string", description: "例: 回数券" }),
    defineField({
      name: "coupons",
      title: "回数券",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "コース名", type: "string", description: "例: 60分整体×4回" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥34,000" }),
            defineField({ name: "unit", title: "単位", type: "string", description: "例: 税込　または　税込 / 月" }),
            defineField({ name: "validity", title: "有効期限", type: "string", description: "例: 有効期限2か月" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "料金案内" }),
  },
});
