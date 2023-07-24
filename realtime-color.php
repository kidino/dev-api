<?php
session_start();

$previousNumber = (isset($_SESSION['previousNumber'])) ? $_SESSION['previousNumber'] : getRandomNumber(1, 10000);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $randomNumber = getRandomNumberWithIncrement($previousNumber);
    $color = ($randomNumber >= $previousNumber) ? '#00ff00' : '#ff0000';
    $_SESSION['previousNumber'] = $randomNumber;
 
    header('Content-Type: application/json');
    echo json_encode(['time' => date('Y-m-d H:i:s'), 'value' => $randomNumber, 'color' => 'color : '.$color]);
}

function getRandomNumber($min, $max) {
    return mt_rand($min, $max);
}

function getRandomNumberWithIncrement($previousNumber) {
    $minIncrement = -floor($previousNumber * 0.4);
    $maxIncrement = floor($previousNumber * 0.4);
    $increment = getRandomNumber($minIncrement, $maxIncrement);
    
    $newNumber = $previousNumber + $increment;
    
    // Ensure the new number is within the range of 1 to 10000
    $newNumber = min(max($newNumber, 1), 10000);
    
    return $newNumber;
}
