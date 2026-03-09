# VERDE FIT

横手市に2026年春オープン予定の整体・パーソナルトレーニング・コーチングサロン「VERDE FIT」のWebサイトです。

## 技術スタック

- **Next.js 16** (App Router) / React 19 / TypeScript
- **Tailwind CSS 4**
- **Sanity v5** (CMS / コンテンツ管理)
- **Noto Sans JP / Noto Serif JP** (Google Fonts)

## セットアップ

```bash
npm install
```

`.env.local` を作成して環境変数を設定します：

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_SITE_URL=https://verdefit.jp
```

```bash
npm run dev
```

`http://localhost:3000` でサイト、`http://localhost:3000/studio` で管理画面にアクセスできます。

## コンテンツ管理（Sanity Studio）

### 初回セットアップ（コンテンツの一括登録）

```bash
node scripts/seed.mjs
```

ハードコードされたデフォルトコンテンツを Sanity に一括登録します。

### 管理画面の構成

| メニュー | 内容 |
|---|---|
| サイト設定 | ヘッダーロゴ・電話番号・SNSリンク・フッター情報・予約ボタンURL |
| 店舗情報・アクセス | 住所・営業時間・駐車場など（全ページ共通） |
| キャンセルポリシー | 前書き・各セクション・締めの文（全ページ共通） |
| トップページ > SEO設定 | ページタイトル・メタディスクリプション・OGP |
| トップページ > ヒーロー | メインビジュアル・見出し・ボタン |
| トップページ > サービス | 整体・パーソナルトレーニング・コーチング |
| トップページ > お悩み | お悩み6項目・根本原因テキスト |
| トップページ > 選ばれる理由 | 理由3件 |
| トップページ > お客様の声 | 声（追加・削除自由） |
| トップページ > 代表プロフィール | 名前・資格・想い・写真 |
| トップページ > 料金 | 初回体験・料金表 |
| トップページ > よくある質問 | Q&A（追加・削除自由） |
| トップページ > 店舗情報 | 住所・営業時間・駐車場など |
| トップページ > CTA | 最終CTAセクション |
| 整体ページ > SEO設定 | ページタイトル・メタディスクリプション・OGP |
| 整体ページ > ヒーロー | メインビジュアル・見出し・ボタン |
| 整体ページ > お悩み | お悩みリスト・サイドイメージ |
| 整体ページ > 不調の例 | 放置すると起こりやすい不調6項目・根本原因テキスト |
| 整体ページ > 選ばれる理由 | 理由3件 |
| 整体ページ > 代表プロフィール | 経歴・資格・想い・写真 |
| 整体ページ > 料金案内 | 初回カウンセリング整体・料金表 |
| 整体ページ > よくある質問 | Q&A（追加・削除自由） |
| 整体ページ > CTA | 最終CTAセクション |
| パーソナルトレーニングページ > SEO設定 | ページタイトル・メタディスクリプション・OGP |
| パーソナルトレーニングページ > ヒーロー | メインビジュアル・見出し・ボタン |
| パーソナルトレーニングページ > ダイエットが続かない理由 | 理由5項目・アイコン画像 |
| パーソナルトレーニングページ > 3つの強み | 強み3件 |
| パーソナルトレーニングページ > 比較表 | VERDE FIT vs 一般ジム |
| パーソナルトレーニングページ > before/after | カード3件・画像 |
| パーソナルトレーニングページ > トレーナー紹介 | プロフィール・資格・想い・写真 |
| パーソナルトレーニングページ > 料金プラン | プラン一覧（キャンセルポリシーは共通設定から） |
| パーソナルトレーニングページ > 体験の流れ | ステップ4件 |
| パーソナルトレーニングページ > よくある質問 | Q&A（追加・削除自由） |
| パーソナルトレーニングページ > CTA | 最終CTAセクション |
| コーチングページ > SEO設定 | ページタイトル・メタディスクリプション・OGP |
| コーチングページ > ヒーロー | メインビジュアル・見出し・ボタン |
| コーチングページ > 続かない理由 | 箇条書き・根本原因テキスト |
| コーチングページ > 思考の書き換えメソッド | 3ステップ・成功事例3件 |
| コーチングページ > VERDE FITのメソッド | メソッド3件 |
| コーチングページ > お客様の声 | 体験談3件（BEFORE/AFTER） |
| コーチングページ > 料金プラン | 無料体験・プラン一覧（キャンセルポリシーは共通設定から） |
| コーチングページ > よくある質問 | Q&A（追加・削除自由） |
| コーチングページ > CTA | 最終CTAセクション |

## プロジェクト構成

```
src/
├── app/
│   ├── (main)/              # サイト本体（Header / Footer あり）
│   │   ├── layout.tsx       # SEO メタデータ取得
│   │   ├── page.tsx         # トップページ
│   │   ├── seitai/          # 整体ページ（/seitai）
│   │   │   └── page.tsx
│   │   ├── personal-training/ # パーソナルトレーニングページ（/personal-training）
│   │   │   └── page.tsx
│   │   └── coaching/          # コーチングページ（/coaching）
│   │       └── page.tsx
│   ├── studio/              # Sanity Studio（/studio）
│   └── layout.tsx           # ルートレイアウト（フォント・globals.css）
├── components/              # 共通コンポーネント + セクション
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FloatingButtons.tsx
│   ├── FadeIn.tsx
│   └── sections/            # Hero, Services, Concerns, Reasons, SeitaiSymptoms, etc.
└── sanity/
    ├── client.ts            # Sanity クライアント・safeFetch ヘルパー
    ├── env.ts               # 環境変数
    ├── image.ts             # 画像URL生成
    └── schemas/             # 全スキーマ定義
```

## ページ構成

### トップページ（/）

| セクション | 内容 |
|---|---|
| Hero | メインビジュアル + CTA |
| Services | 整体・パーソナルトレーニング・コーチング |
| Concerns | お悩み6項目 + 根本原因 |
| Reasons | 選ばれる3つの理由 |
| Testimonials | お客様の声 |
| Profile | 代表プロフィール |
| Pricing | 料金案内 |
| FAQ | よくあるご質問 |
| Access | 店舗情報・アクセス |
| CTA | 最終CTA |

### 整体ページ（/seitai）

| セクション | 内容 |
|---|---|
| Hero | 整体専用ビジュアル + CTA |
| Concerns | お悩みリスト形式 |
| Disorders | 放置すると起こりやすい不調の例（6項目）・根本原因 |
| Reasons | 選ばれる3つの理由 |
| Profile | 代表プロフィール |
| Pricing | 料金案内 |
| FAQ | よくあるご質問 |
| Access | 店舗情報・アクセス |
| CTA | 最終CTA |

### パーソナルトレーニングページ（/personal-training）

| セクション | 内容 |
|---|---|
| Hero | パーソナル専用ビジュアル + CTA |
| Concerns | ダイエットが続かない5つの理由 |
| Reasons | 3つの強み |
| Comparison | VERDE FIT vs 一般ジム 比較表 |
| BeforeAfter | before/after カード3件 |
| Trainer | トレーナー紹介・資格・想い |
| Pricing | 料金プラン + キャンセルポリシー |
| Flow | 体験トレーニングの流れ（4ステップ） |
| FAQ | よくあるご質問 |
| Access | 店舗情報・アクセス |
| CTA | 最終CTA |

### コーチングページ（/coaching）

| セクション | 内容 |
|---|---|
| Hero | コーチング専用ビジュアル + CTA |
| WhyFail | 続かない理由・根本原因 |
| Method | 思考の書き換え3ステップ・成功事例 |
| Features | VERDE FITのメソッド3件 |
| Testimonials | 習慣が変わったお客様の声 |
| Pricing | 料金プラン + キャンセルポリシー |
| FAQ | よくあるご質問 |
| Access | 店舗情報・アクセス |
| CTA | 最終CTA |
