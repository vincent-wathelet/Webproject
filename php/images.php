<?php

header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Origin: *');

$dir = __DIR__  .'/../saniefiers/src/assets/content/images/diavoorstelling/';
$names = scandir($dir);
$fotaray;
$itter = 0;
foreach($names as $val)
{
    if($val != '.' && $val != '..'){
    $fotaray[$itter] = $val;
    $itter++;
    }
}

echo  json_encode($fotaray);

?>