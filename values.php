<?php

$con = mysql_connect("localhost","root","password");

if (!$con) {
die('Could not connect: ' . mysql_error());
}

mysql_select_db("ATAG", $con);

$result = mysql_query("SELECT * FROM `Report`") or die ("Error");

while($row = mysql_fetch_array($result)) {
echo $row['timestamp'] . "/" . $row['roomTemperature']. "/" ;
}

mysql_close($con);
?>
