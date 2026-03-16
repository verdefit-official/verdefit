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

    // 初回評価セッションカード
    defineField({
      name: "trialBadge",
      title: "初回限定バッジテキスト",
      type: "string",
      description: "例: 初回限定",
    }),
    defineField({
      name: "trialTitle",
      title: "初回評価セッション タイトル",
      type: "string",
      description: "例: 初回評価セッション60分",
    }),
    defineField({
      name: "trialPrice",
      title: "初回評価セッション 料金",
      type: "string",
      description: "例: ¥5,500",
    }),
    defineField({
      name: "trialDetails",
      title: "初回評価セッション 内容テキスト",
      type: "string",
      description: "例: カウンセリング20分＋トレーニング評価40分",
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
              description: "例: 60分 × 24回＋食事指導",
            }),
            defineField({ name: "period", title: "推奨利用期間", type: "string", description: "例: 推奨期間：3ヶ月" }),
            defineField({ name: "validityPeriod", title: "有効期限", type: "string", description: "例: 有効期限：6ヶ月" }),
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
