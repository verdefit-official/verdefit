import { defineType, defineField } from "sanity";

export const personalConcernsSchema = defineType({
  name: "personalConcerns",
  title: "ダイエットが続かない理由",
  type: "document",
  fields: [
    defineField({ name: "sectionTitle", title: "セクションタイトル", type: "string", description: "例: ダイエットをしても続かない、効果が出ない本当の理由" }),
    defineField({ name: "sectionDescription", title: "セクション説明文", type: "string", description: "例: 頑張っているのに変わらない…その原因を正しく知ることが、本当の変化への第一歩です" }),
    defineField({
      name: "items",
      title: "項目一覧",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "タイトル", type: "string", description: "例: 自己流ダイエットの限界" }),
            defineField({ name: "description", title: "説明文", type: "text", rows: 5, description: "例: 食事量を減らすだけでは代謝が落ち、かえってリバウンドしやすくなります。自分の身体に合った方法を知ることが大切です。" }),
            defineField({ name: "icon", title: "アイコン画像", type: "image", options: { hotspot: false } }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "ダイエットが続かない理由" }) },
});
