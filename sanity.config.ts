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

const priceSections = [
  { name: "priceSeo", title: "SEO設定" },
  { name: "priceHero", title: "ヒーロー" },
  { name: "priceTrial", title: "初回評価セッション" },
  { name: "chiropracticPricing", title: "整体 料金" },
  { name: "personalPricing", title: "パーソナルトレーニング 料金" },
  { name: "coachingPricing", title: "コーチング 料金" },
  { name: "pricePremium", title: "トータルケアプレミアムプラン" },
  { name: "priceCta", title: "CTA" },
];

const coachingSections = [
  { name: "coachingSeo", title: "SEO設定" },
  { name: "coachingHero", title: "ヒーロー" },
  { name: "coachingWhyFail", title: "続かない理由" },
  { name: "coachingMethod", title: "思考の書き換えメソッド" },
  { name: "coachingFeatures", title: "VERDE FITのメソッド" },
  { name: "coachingTestimonials", title: "お客様の声" },
  { name: "coachingPricing", title: "料金プラン" },
  { name: "coachingFaq", title: "よくある質問" },
  { name: "coachingCta", title: "CTA" },
];

const blogSections = [
  { name: "blogSeo", title: "SEO設定" },
  { name: "blogHero", title: "ヒーロー" },
  { name: "blogIntro", title: "ブログ紹介" },
  { name: "blogSeitaiSection", title: "整体ブログ" },
  { name: "blogPersonalSection", title: "パーソナルトレーニングブログ" },
  { name: "blogCoachingSection", title: "コーチングブログ" },
  { name: "blogVoiceCta", title: "お客様の声CTA" },
  { name: "blogSupport", title: "3つのサポート" },
  { name: "blogCta", title: "CTA" },
];

const voiceSections = [
  { name: "voiceSeo", title: "SEO設定" },
  { name: "voiceHero", title: "ヒーロー" },
  { name: "voiceConcerns", title: "お悩み" },
  { name: "voiceCategoryNav", title: "カテゴリナビ" },
  { name: "voiceSeitai", title: "整体体験談" },
  { name: "voicePersonal", title: "パーソナル体験談" },
  { name: "voiceCoaching", title: "コーチング体験談" },
  { name: "voiceBeforeAfter", title: "成功事例" },
  { name: "voiceGoogleReviews", title: "Googleクチコミ" },
  { name: "voiceSmallCta", title: "スモールCTA" },
  { name: "voiceCta", title: "CTA" },
];

const personalSections = [
  { name: "personalSeo", title: "SEO設定" },
  { name: "personalHero", title: "ヒーロー" },
  { name: "personalConcerns", title: "ダイエットが続かない理由" },
  { name: "personalReasons", title: "3つの強み" },
  { name: "personalComparison", title: "比較表" },
  { name: "personalBeforeAfter", title: "before/after" },
  { name: "personalTrainer", title: "トレーナー紹介" },
  { name: "personalPricing", title: "料金プラン" },
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
            singleton(S, "cancelPolicy", "キャンセルポリシー"),
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
            S.listItem()
              .title("コーチングページ")
              .id("coaching")
              .child(
                S.list()
                  .id("coaching-list")
                  .title("コーチングページ")
                  .items(
                    coachingSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    )
                  )
              ),
            S.listItem()
              .title("料金ページ")
              .id("price")
              .child(
                S.list()
                  .id("price-list")
                  .title("料金ページ")
                  .items(
                    priceSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    )
                  )
              ),
            S.listItem()
              .title("お客様の声ページ")
              .id("voice")
              .child(
                S.list()
                  .id("voice-list")
                  .title("お客様の声ページ")
                  .items([
                    ...voiceSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    ),
                    S.divider(),
                    S.listItem()
                      .title("整体 お客様の声")
                      .id("seitai-testimonials")
                      .child(
                        S.documentTypeList("seitaiTestimonial")
                          .title("整体 お客様の声")
                          .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                      ),
                    S.listItem()
                      .title("パーソナル お客様の声")
                      .id("personal-testimonials")
                      .child(
                        S.documentTypeList("personalTestimonial")
                          .title("パーソナル お客様の声")
                          .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                      ),
                    S.listItem()
                      .title("コーチング お客様の声")
                      .id("coaching-testimonials")
                      .child(
                        S.documentTypeList("coachingTestimonial")
                          .title("コーチング お客様の声")
                          .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                      ),
                  ])
              ),
            S.listItem()
              .title("ブログページ")
              .id("blog")
              .child(
                S.list()
                  .id("blog-list")
                  .title("ブログページ")
                  .items([
                    ...blogSections.map(({ name, title }) =>
                      singleton(S, name, title)
                    ),
                    S.divider(),
                    S.listItem()
                      .title("ブログ記事")
                      .id("blog-posts")
                      .child(
                        S.documentTypeList("blogPost")
                          .title("ブログ記事")
                          .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                      ),
                  ])
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
