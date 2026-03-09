$token = 'skQ2EtZ2wUsiCkxhJK91uKPivzv4DRFqti5DUM06inZkkdsHf68GWrBDpSfTJHI83e59ZkWWaF2PFXX8iVmcSdFZuRrISDijy7qNwgGIo620vEzQ94r13AxybOYFGV3JMAT6Xk2KMsVvaew6kckL7DuO2JQWXSr4nU0JeAVMHv1JiGTfoxoM'
$body = Get-Content -Path 'C:\Users\numan\Desktop\ClaudeCode\verdefit\update_alt.json' -Raw -Encoding UTF8
$headers = @{
    'Authorization' = "Bearer $token"
    'Content-Type' = 'application/json; charset=utf-8'
}
$response = Invoke-RestMethod -Uri 'https://tv6vcu78.api.sanity.io/v2024-01-01/data/mutate/production' -Method POST -Headers $headers -Body $body
$response | ConvertTo-Json -Depth 5
