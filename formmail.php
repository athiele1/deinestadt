<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Unbenanntes Dokument</title>
</head>

<body>

<?php
//send_email.php
$email_from = "oertel@uni-bremen.de";   //Absender falls keiner angegeben wurde
$sendermail_antwort = true;      //E-Mail Adresse des Besuchers als Absender. false= Nein ; true = Ja
$name_von_emailfeld = "Email";   //Feld in der die Absenderadresse steht
 
$empfaenger = "oertel@uni-bremen.de"; //Empfänger-Adresse
$mail_cc = ""; //CC-Adresse, diese E-Mail-Adresse bekommt einer weitere Kopie
$betreff = "Neue Kontaktanfrage"; //Betreff der Email
 
$url_ok = "https://www.domain.de/"; //Zielseite, wenn E-Mail erfolgreich versendet wurde
$url_fehler = "https://www.domain.de/"; //Zielseite, wenn E-Mail nicht gesendet werden konnte
 
 
//Diese Felder werden nicht in der Mail stehen
$ignore_fields = array('submit');
 
 
 
 
//Datum, wann die Mail erstellt wurde
$name_tag = array();
$name_tag[0] = "Sonntag";
$name_tag[1] = "Montag";
$name_tag[2] = "Dienstag";
$name_tag[3] = "Mittwoch";
$name_tag[4] = "Donnerstag";
$name_tag[5] = "Freitag";
$name_tag[6] = "Samstag";
$num_tag = date("w");
$tag = $name_tag[$num_tag];
$jahr = date("Y");
$n = date("d");
$monat = date("m");
$time = date("H:i");
 
//Erste Zeile unserer Email
$msg = ":: Gesendet am $tag, den $n.$monat.$jahr - $time Uhr ::\n\n";
 
//Hier werden alle Eingabefelder abgefragt
while (list($name,$value) = each($_POST)) {
   if (in_array($name, $ignore_fields)) {
        continue; //Ignore Felder wird nicht in die Mail eingefügt
   }
   $msg .= "::: $name :::\n$value\n\n";
}
 
 
 
//E-Mail Adresse des Besuchers als Absender
if ($sendermail_antwort and isset($_POST[$name_von_emailfeld]) and filter_var($_POST[$name_von_emailfeld], FILTER_VALIDATE_EMAIL)) {
   $email_from = $_POST[$name_von_emailfeld];
}
 
$header="From: $email_from";
 
if (!empty($mail_cc)) {
   $header .= "\n";
   $header .= "Cc: $mail_cc";
}
 
 
$mail_senden = mail($empfaenger,$betreff,$msg,$header);
 
 
//Weiterleitung, hier konnte jetzt per echo auch Ausgaben stehen
if($mail_senden){
  echo "Mail wurde gesendet!";
  exit();
} else{
  echo "Mail wurde nicht gesendet!";
  exit();
  
}
?>
</body>
</html>



