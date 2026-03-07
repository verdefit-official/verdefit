import { defineConfig } from "sanity";
import { structureTool, type StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

const topPageSections = [
  { name: "topPageSeo", title: "SEO設定" },
  { name: "hero", title: "ヒーロー" },
  { name: "services", title: "サービス" },
  { name: "concerns", title: "お悩み" },
  { name: "reasons", title: "選ばれる理由" },
  { name: "testimonials", title: "お客様の声" },
  { name: "profile", title: "代表プロフィール" },
  { name: "pricing", title: "料金" },
  { name: "faqSection", title: "よくある質問" },
  { name: "cta", title: "CTA" },
];

const chiropracticSections = [
  { name: "chiropracticSeo", title: "SEO設定" },
  { name: "chiropracticHero", title: "ヒーロー" },
  { name: "chiropracticConcerns", title: "お悩み" },
  { name: "chiropracticDisorders", title: "不調の例" },
  { name: "chiropracticReasons", title: "選ばれる理由" },
  { name: "chiropracticProfile", title: "代表プロフィール" },
  { name: "chiropracticPricing", title: "料金案内" },
  { name: "chiropracticFaq", title: "よくある質問" },
  { name: "chiropracticCta", title: "CTA" },
];

const personalSections = [
  { name: "personalSeo", title: "SEO設定" },
  { name: "personalHero", title: "ヒーロー" },
  { name: "personalConcerns", title: "ダイエットが続かない理由" },
  { name: "personalReasons", title: "3つの強み" },
  { name: "personalComparison", title: "比較表" },
  { name: "personalBeforeAfter", title: "before/after" },
  { name: "personalTrainer", title: "トレーナー紹介" },
  { name: "personalPricing", title: "料金プラン・キャンセルポリシー" },
  { name: "personalFlow", title: "体験の流れ" },
  { name: "personalFaq", title: "よくある質問" },
  { name: "personalCta", title: "CTA" },
];

function singleton(S: StructureBuilder, name: string, title: string) {
  return S.listItem()
    .title(title)
    .id(name)
    .child(S.document().schemaType(name).documentId(name));
}

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  title: "VERDE FIT CMS",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id("root")
          .title("コンテンツ管理")
          .items([
            singleton(S, "siteSettings", "サイト設定"),
            singleton(S, "access", "店舗情報・アクセス"),
            S.divider(),
            S.listItem()
              .title("トップページ")
              .id("toppage")
              .child(
                S.list()
                  .id("toppage-list")
                  .title("トップページ")
                  .items(
                    topPageSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    )
                  )
              ),
            S.listItem()
              .title("整体ページ")
              .id("chiropractic")
              .child(
                S.list()
                  .id("chiropractic-list")
                  .title("整体ページ")
                  .items(
                    chiropracticSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    )
                  )
              ),
            S.listItem()
              .title("パーソナルトレーニングページ")
              .id("personal")
              .child(
                S.list()
                  .id("personal-list")
                  .title("パーソナルトレーニングページ")
                  .items(
                    personalSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    )
                  )
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
