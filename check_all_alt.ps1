[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
$token = 'skQ2EtZ2wUsiCkxhJK91uKPivzv4DRFqti5DUM06inZkkdsHf68GWrBDpSfTJHI83e59ZkWWaF2PFXX8iVmcSdFZuRrISDijy7qNwgGIo620vEzQ94r13AxybOYFGV3JMAT6Xk2KMsVvaew6kckL7DuO2JQWXSr4nU0JeAVMHv1JiGTfoxoM'
$query = '*[_type in ["hero","profile"]]{_type,imageAlt}'
$encoded = [Uri]::EscapeDataString($query)
$response = Invoke-RestMethod -Uri "https://tv6vcu78.api.sanity.io/v2024-01-01/data/query/production?query=$encoded" -Headers @{Authorization="Bearer $token"}
$response.result | ForEach-Object { Write-Host "$($_._type): $($_.imageAlt)" }
