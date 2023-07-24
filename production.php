<?php 

$data = [
    ['Ayam',1000],
    ['Itik',1300],
    ['Kambing',2000],
    ['Lembu',450],
    ['Puyuh',120]
];

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

echo json_encode($data);