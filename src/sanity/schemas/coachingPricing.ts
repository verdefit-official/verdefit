import { defineType, defineField } from "sanity";

export const coachingPricingSchema = defineType({
  name: "coachingPricing",
  title: "コーチング 料金",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: コーチング 料金",
    }),
    defineField({
      name: "sectionDescription",
      title: "サブタイトル",
      type: "text",
      description: "例: 思考を変え、習慣をデザインする",
    }),
    defineField({
      name: "trialTitle",
      title: "無料体験タイトル",
      type: "string",
      description: "例: 初回無料体験セッション６０分",
    }),

    // 単発
    defineField({
      name: "singlePlans",
      title: "単発プラン",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "badge", title: "バッジ（オンライン/対面）", type: "string", description: "例: オンライン" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥8,000" }),
          ],
          preview: { select: { title: "badge" } },
        },
      ],
    }),

    // 月額
    defineField({
      name: "monthlyPlans",
      title: "月額プラン",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "badge", title: "バッジ（オンライン/対面）", type: "string", description: "例: オンライン" }),
            defineField({ name: "title", title: "プラン名", type: "string", description: "例: 1ヶ月 / 4回" }),
            defineField({ name: "price", title: "料金", type: "string", description: "例: ¥28,000" }),
            defineField({ name: "perSession", title: "1回あたり", type: "string", description: "例: 1回あたり ¥7,000" }),
          ],
          preview: { select: { title: "badge" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "コーチング 料金" }),
  },
});
