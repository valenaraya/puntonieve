<?php
header('content-type: text/txt; charset=utf-8');

$nombre = '';
$apellido = '';
$direccion = '';

if($_REQUEST[email] == '1'){
    $nombre = 'Daniel';
    $apellido = 'Jimenez';
    $direccion = 'Sagitario 50';
}
if($_REQUEST[email] == '2'){
    $nombre ='Laura';
    $apellido = 'Lopez';
    $direccion = 'Margaritas 82';
}
if($_REQUEST[email == '3']){
    $nombre = 'Alberto';
    $apellido = 'Lainez';
    $direccion = 'Naranjas 46';
}

echo "{
    \"nombre\":\"$nombre\",
    \"apellido\":\"$apellido\",
    \"direccion\":\"$direccion\
};
?>
