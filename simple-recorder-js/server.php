<?php
header("Content-Type: application/json");
$upload_tmp = $_FILES['audio']['tmp_name'];
$unixtime = time();
$destination = __DIR__ . "/uploads/{$unixtime}.wav";
$result = move_uploaded_file($upload_tmp,$destination);
echo json_encode([
    'status' => $result,
    'data' => [
        'destination' => $destination,
        'size' => $_FILES['audio']['size']
    ]
]);
