import { defineType, defineField } from "sanity";

export const personalPricingSchema = defineType({
  name: "personalPricing",
  title: "パーソナルトレーニング 料金",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: パーソナルトレーニング 料金",
    }),
    defineField({
      name: "sectionDescription",
      title: "サブタイトル",
      type: "text",
      description: "例: 完全個別指導で理想の身体づくりを実現",
    }),

    // 月額プラン
    defineField({
      name: "monthlyPlans",
      title: "月額プラン（食事指導なし）",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "プラン名", type: "string", description: "例: 月4回プラン" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥32,000" }),
            defineField({ name: "perSession", title: "1回あたり", type: "string", description: "例: 1回あたり ¥8,000" }),
            defineField({ name: "validity", title: "有効期限", type: "string", description: "例: 有効期限：2ヶ月" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),

    // 短期集中プラン
    defineField({
      name: "intensivePlans",
      title: "短期集中プラン",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "プラン名", type: "string", description: "例: 24回ダイエットプラン" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥198,000" }),
            defineField({ name: "popular", title: "人気No.1バッジを表示", type: "boolean" }),
            defineField({
              name: "checkItems",
              title: "内容（チェック項目）",
              type: "array",
              of: [{ type: "string" }],
              description: "例: 60分パーソナルトレーニング24回",
            }),
            defineField({ name: "period", title: "推奨利用期間", type: "string", description: "例: 推奨利用期間：3ヶ月" }),
            defineField({ name: "validityPeriod", title: "有効期限", type: "string", description: "例: 有効期限：初回利用日から6ヶ月" }),
            defineField({ name: "description", title: "説明文", type: "text" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),

    // 単発
    defineField({
      name: "singlePrice",
      title: "単発料金",
      type: "string",
      description: "例: ¥11,000",
    }),
  ],
  preview: { prepare: () => ({ title: "パーソナルトレーニング 料金" }) },
});
