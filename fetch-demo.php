<?php 

$data = [
    ['nama' => 'Ikhwan'],
    ['nama' => 'Fahrul'],
    ['nama' => 'Hafiz'],
    ['nama' => 'Syahmi'],
    ['nama' => 'Afiq'],
];

header('Content-type: application/json');

echo( json_encode( $data ) );