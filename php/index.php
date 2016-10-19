<?php
header("content-type:application/json; charset=utf-8");
// header('Content-Type: application/json; charset=utf-8');
$result = file_get_contents("../json/index1.json");

echo $result;

?>