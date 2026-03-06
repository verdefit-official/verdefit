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

## プロジェクト構成

```
src/
├── app/
│   ├── (main)/              # サイト本体（Header / Footer あり）
│   │   ├── layout.tsx       # SEO メタデータ取得
│   │   ├── page.tsx         # トップページ
│   │   └── chiropractic/    # 整体ページ（/chiropractic）
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

### 整体ページ（/chiropractic）

| セクション | 内容 |
|---|---|
| Hero | 整体専用ビジュアル + CTA |
| Concerns | お悩みリスト形式 |
| SeitaiSymptoms | 放置すると起こりやすい不調の例（6項目） |
| RootCause | なぜ痛みが繰り返すのか |
| Reasons | 選ばれる3つの理由 |
| Profile | 代表プロフィール |
| Pricing | 料金案内 |
| FAQ | よくあるご質問 |
| Access | 店舗情報・アクセス |
| CTA | 最終CTA |
