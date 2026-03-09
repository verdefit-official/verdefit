$token = 'skQ2EtZ2wUsiCkxhJK91uKPivzv4DRFqti5DUM06inZkkdsHf68GWrBDpSfTJHI83e59ZkWWaF2PFXX8iVmcSdFZuRrISDijy7qNwgGIo620vEzQ94r13AxybOYFGV3JMAT6Xk2KMsVvaew6kckL7DuO2JQWXSr4nU0JeAVMHv1JiGTfoxoM'
$query = '*[_type == "chiropracticReasons"][0]{reasonList[]{_key,imageAlt}}'
$encoded = [Uri]::EscapeDataString($query)
$response = Invoke-RestMethod -Uri "https://tv6vcu78.api.sanity.io/v2024-01-01/data/query/production?query=$encoded" -Headers @{Authorization="Bearer $token"}
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$response.result | ConvertTo-Json -Depth 5
