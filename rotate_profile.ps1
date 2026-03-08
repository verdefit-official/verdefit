Add-Type -AssemblyName System.Drawing
$src = 'C:\Users\numan\Downloads\profile_temp.jpg'
$dst = 'C:\Users\numan\Desktop\ClaudeCode\verdefit\public\profile.jpg'

$img = [System.Drawing.Image]::FromFile($src)

# EXIFの向き情報を取得して回転補正
$orientationId = 274
try {
    $prop = $img.GetPropertyItem($orientationId)
    $orientation = $prop.Value[0]
} catch {
    $orientation = 1
}

switch ($orientation) {
    2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
    3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
    4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
    5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
    6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
    7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
    8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
}

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
