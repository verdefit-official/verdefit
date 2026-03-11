import { defineType, defineField } from "sanity";

export const voiceCtaSchema = defineType({
  name: "voiceCta",
  title: "お客様の声 CTA（行動喚起）",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "見出し",
      type: "string",
      description: "例: VERDE FITで自分を変えたい方へ",
    }),
    defineField({
      name: "description",
      title: "説明文",
      type: "text",
      rows: 4,
      description: "例: まずはお気軽にご相談ください。\nあなたの目標達成までの道のりを、一緒に考えましょう。",
    }),
    defineField({
      name: "primaryButtonText",
      title: "予約ボタンテキスト",
      type: "string",
      description: "例: 無料体験を予約する",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "LINEボタンテキスト",
      type: "string",
      description: "例: LINEで相談する",
    }),
  ],
  preview: {
    prepare: () => ({ title: "お客様の声 CTA（行動喚起）" }),
  },
});
