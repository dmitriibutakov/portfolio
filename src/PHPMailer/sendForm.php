<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php':

//body
$mail = new PHPMailer(true);
$mail->CharSet='UTF-8';
$mail->setLanguage('eng', phpmailer/language);
$mail->IsHTML(true);

$mail->addAddress('sportyounde@gmail.com');
$mail->subject = "contact me";

$body = '<h1>data for contacts</h1>';
if(trim(!empty($_POST['email']))){
   $body.='<p><strong>Email:</strong>'.$_POST['email'] '</p>';
}
if(trim(!empty($_POST['number']))){
   $body.='<p><strong>Number:</strong>'.$_POST['number'] '</p>';
}
if(trim(!empty($_POST['text']))){
   $body.='<p><strong>Addons:</strong>'.$_POST['text'] '</p>';
}

//sending
$mail->Body = $body;
if (!mail->send()) {
$message = "Error";
} else {
$message = "data was send";
}

$response = ["message" => $message];
header("Content-type: application/json");
echo json_encode($response);