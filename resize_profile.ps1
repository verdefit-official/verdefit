Add-Type -AssemblyName System.Drawing
$src = 'C:\Users\numan\Downloads\ba1_temp.jpg'
$dst = 'C:\Users\numan\Desktop\ClaudeCode\verdefit\public\images\personal\personal-trainer.jpg'
$img = [System.Drawing.Image]::FromFile($src)
$maxSize = 1200
$w = $img.Width
$h = $img.Height
if ($w -gt $h) { $newW = $maxSize; $newH = [int]($h * $maxSize / $w) } else { $newH = $maxSize; $newW = [int]($w * $maxSize / $h) }
$resized = New-Object System.Drawing.Bitmap($newW, $newH)
$g = [System.Drawing.Graphics]::FromImage($resized)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $newW, $newH)
$g.Dispose()
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)
$resized.Save($dst, $encoder, $params)
$resized.Dispose()
$img.Dispose()
Write-Host "Done: ${newW}x${newH}"
