import { defineType, defineField } from "sanity";

export const accessSchema = defineType({
  name: "access",
  title: "店舗情報",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "string",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "string",
    }),
    defineField({ name: "storeName", title: "店舗名", type: "string" }),
    defineField({
      name: "postalCode",
      title: "郵便番号",
      type: "string",
      description: "例: 〒013-0061",
    }),
    defineField({ name: "address", title: "住所", type: "string" }),
    defineField({ name: "phone", title: "電話番号", type: "string" }),
    defineField({
      name: "hours",
      title: "営業時間",
      type: "string",
      description: "例: 10:00〜21:00",
    }),
    defineField({
      name: "lastEntry",
      title: "最終受付",
      type: "string",
      description: "例: 最終受付 20:30（1時間コースは20:00まで）",
    }),
    defineField({
      name: "closedDays",
      title: "定休日",
      type: "string",
      description: "例: 不定休",
    }),
    defineField({
      name: "closedDaysNote",
      title: "定休日の注記",
      type: "string",
      description: "例: ※SNS等で事前にお知らせ",
    }),
    defineField({
      name: "parking",
      title: "駐車場",
      type: "string",
      description: "例: 専用駐車場あり（無料）",
    }),
    defineField({
      name: "payment",
      title: "お支払い方法",
      type: "string",
      description: "例: 現金 / クレジットカード / 電子マネー",
    }),
  ],
  preview: {
    prepare: () => ({ title: "店舗情報" }),
  },
});
