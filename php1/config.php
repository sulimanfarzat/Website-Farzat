<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'farzat');
define('DB_PASSWORD', 'California@81');
define('DB_DATABASE', 'FarzatDB');
$con = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
$db = mysqli_select_db('FarzatDB', $con);
?>