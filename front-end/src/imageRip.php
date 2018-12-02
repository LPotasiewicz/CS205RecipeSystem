$imageData = file_get_contents($_GET["url"]);
$base64 = base64_encode($imageData);
echo '<div class="data">';
echo $base64;
echo '<div/>';