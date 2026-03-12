/**
 * マイグレーションスクリプト: voiceSeitai/voicePersonal/voiceCoachingの古い配列フィールドを削除
 * 使い方: node scripts/migrate-remove-voice-arrays.mjs
 *
 * voiceSeitai.voices / voicePersonal.cards / voiceCoaching.voices フィールドは
 * 個別ドキュメント型（seitaiTestimonial等）への移行に伴い不要になりました。
 * Sanityデータベース上に残った古いフィールドを削除します。
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("❌ .env.local に NEXT_PUBLIC_SANITY_PROJECT_ID と SANITY_API_TOKEN を設定してください");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function run() {
  const targets = [
    { type: "voiceSeitai",    field: "voices" },
    { type: "voicePersonal",  field: "cards"  },
    { type: "voiceCoaching",  field: "voices" },
  ];

  for (const { type, field } of targets) {
    const docs = await client.fetch(`*[_type == $type && defined(${field})]{ _id }`, { type });
    if (docs.length === 0) {
      console.log(`✅ ${type}.${field}: 削除対象なし`);
      continue;
    }
    for (const doc of docs) {
      await client.patch(doc._id).unset([field]).commit();
      console.log(`🗑️  ${type}(${doc._id}).${field} を削除しました`);
    }
  }

  console.log("\n✅ マイグレーション完了");
}

run().catch((err) => {
  console.error("❌ エラー:", err.message);
  process.exit(1);
});
