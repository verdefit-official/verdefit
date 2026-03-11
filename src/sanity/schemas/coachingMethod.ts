import { defineType, defineField } from "sanity";

export const coachingMethodSchema = defineType({
  name: "coachingMethod",
  title: "思考の書き換えメソッド",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "セクションタイトル",
      type: "text",
      description: "例: 潜在意識から変える「思考の書き換え」メソッド",
    }),
    defineField({
      name: "sectionDescription",
      title: "セクション説明文",
      type: "text",
      description: "例: 一生モノの習慣を身につける、科学的アプローチ",
    }),
    defineField({
      name: "introText",
      title: "イントロテキスト",
      type: "string",
      description: "例: VERDE FITのコーチングでは、思考→行動→習慣のプロセスを科学的に設計します。",
    }),
    defineField({
      name: "steps",
      title: "3ステップ",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "ステップ番号",
              type: "string",
              description: "例: 01",
            }),
            defineField({
              name: "title",
              title: "タイトル",
              type: "string",
              description: "例: 思考の書き換え",
            }),
            defineField({
              name: "description",
              title: "説明文",
              type: "text",
              rows: 3,
              description: "例: 「私は運動が続かない」という思い込みを、「私は少しずつ変われる」に書き換えます。",
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "successCasesTitle",
      title: "成功事例 タイトル",
      type: "string",
      description: "例: 思考・行動・習慣が変わった実際の変化",
    }),
    defineField({
      name: "successCases",
      title: "成功事例（アイコンはコードで固定）",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "タイトル",
              type: "string",
              description: "例: 運動習慣の定着",
            }),
            defineField({
              name: "thoughtBefore",
              title: "変化前の思考",
              type: "string",
              description: "例: 「運動は苦手」",
            }),
            defineField({
              name: "thoughtAfter",
              title: "変化後の思考",
              type: "string",
              description: "例: 「5分だけならできる」",
            }),
            defineField({
              name: "action",
              title: "行動",
              type: "string",
              description: "例: 毎朝5分のストレッチ",
            }),
            defineField({
              name: "habit",
              title: "習慣",
              type: "string",
              description: "例: 3ヶ月後、週3回のジム通い",
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "思考の書き換えメソッド" }),
  },
});
