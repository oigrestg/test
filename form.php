<?php
define ('url',"https://api.telegram.org/bot5452726860:AAHH-fAmPN_FkoFgZGnC7XtRzHu0iKf-gmw/");
$name = $_GET['name'];
$message = $_GET['message'];
$chat_id = '1428890804';
$message = urlencode("Name:".$name."\n Message : ".$message);
file_get_contents(url."sendmessage?text=".$message."&chat_id=".$chat_id."&parse_mode=HTML");
?>

