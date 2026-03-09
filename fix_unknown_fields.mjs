const TOKEN = 'skQ2EtZ2wUsiCkxhJK91uKPivzv4DRFqti5DUM06inZkkdsHf68GWrBDpSfTJHI83e59ZkWWaF2PFXX8iVmcSdFZuRrISDijy7qNwgGIo620vEzQ94r13AxybOYFGV3JMAT6Xk2KMsVvaew6kckL7DuO2JQWXSr4nU0JeAVMHv1JiGTfoxoM';
const PROJECT_ID = 'tv6vcu78';
const DATASET = 'production';
const API_VERSION = '2024-01-01';

// スキーマに存在しない不明フィールドを削除
const mutations = {
  mutations: [
    // chiropracticHero の subheadingLocation を削除
    { patch: { id: 'chiropracticHero', unset: ['subheadingLocation'] } },
    // services の seitai アイテムの href を削除
    { patch: { id: 'services', unset: ['serviceList[_key=="seitai"].href'] } },
  ]
};

const res = await fetch(
  `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`,
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mutations),
  }
);

const data = await res.json();
if (data.error) {
  console.error('Error:', JSON.stringify(data.error, null, 2));
} else {
  console.log(`成功: ${data.results.length}件更新`);
}
