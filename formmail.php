<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Unbenanntes Dokument</title>
</head>

<body>

 <?php
 $recipient = "info@bremenspendet.de";
 $fmtResponse= implode("", file("response.htt"));
 $fmtMail= implode("", file("mail.htt"));
 foreach($_POST as $key=> $val) {
 $fmtResponse= str_replace("<$key>", $val, $fmtResponse);
 $fmtMail= str_replace("<$key>", $val, $fmtMail);
 }
 if ($_POST["access"] == "irregeheim") {
 mail($recipient, $_POST["subject"], $fmtMail);
 }
 echo $fmtResponse;
 ?>
 
</body>
</html>



