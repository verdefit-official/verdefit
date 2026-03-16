import { defineType, defineField } from "sanity";

export const chiropracticPricingSchema = defineType({
  name: "chiropracticPricing",
  title: "整体 料金",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 整体 料金",
    }),
    defineField({
      name: "sectionDescription",
      title: "サブタイトル",
      type: "text",
      description: "例: 国家資格保有者による根本改善の整体",
    }),

    // 初回限定カード
    defineField({
      name: "trialBadge",
      title: "初回限定バッジテキスト",
      type: "string",
      description: "例: 初回限定",
    }),
    defineField({
      name: "trialTitle",
      title: "初回限定タイトル",
      type: "string",
      description: "例: 初回カウンセリング整体",
    }),
    defineField({
      name: "trialPrice",
      title: "初回限定料金",
      type: "string",
      description: "例: ¥5,500",
    }),
    defineField({
      name: "trialDetails",
      title: "初回限定 内容テキスト",
      type: "string",
      description: "例: カウンセリング20分+整体40分",
    }),

    // 単発料金
    defineField({
      name: "courses",
      title: "単発料金",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "コース名", type: "string", description: "例: 30分整体" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥4,400" }),
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
    defineField({
      name: "couponSectionTitle",
      title: "回数券 セクションタイトル",
      type: "string",
      description: "例: 回数券",
    }),
    defineField({
      name: "coupons",
      title: "回数券",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "コース名", type: "string", description: "例: 60分整体 × 4回" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥34,000" }),
            defineField({ name: "unit", title: "単位", type: "string", description: "例: 税込" }),
            defineField({ name: "validity", title: "有効期限テキスト", type: "string", description: "例: 1回あたり ¥8,500\n有効期限：2ヶ月" }),
            defineField({ name: "badge", title: "バッジ（任意）", type: "string", description: "例: 人気（空欄でバッジなし）" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "整体 料金" }),
  },
});
