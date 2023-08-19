<?php

use PHPMailer\PHPMailer\PHPMailer;
 
require 'vendor/autoload.php';

use Dotenv\Dotenv; 
// AÃ±adir Dotenv
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

//$mail = new PHPMailer();


class Email {

    public $email;
    public $nombre;
    public $mensaje;
    
    public function __construct($email, $nombre, $mensaje)
    {
        $this->email = $email;
        $this->nombre = $nombre;
        $this->mensaje = $mensaje;
    }

    public function enviarConfirmacion() {

         // create a new object
         $mail = new PHPMailer();
         $mail->isSMTP();
         $mail->Host = $_ENV['EMAIL_HOST'];
         $mail->SMTPAuth = true;
         $mail->SMTPSecure = 'tls'; //'ssl'; 
         $mail->Port = $_ENV['EMAIL_PORT'];
         $mail->Username = $_ENV['EMAIL_USER'];
         $mail->Password = $_ENV['EMAIL_PASS'];
     
         $mail->setFrom('jdrdev@portafolio.com');
         $mail->addAddress('julianithox1@gmail.com', 'Julian DR');
         $mail->Subject = 'correo de portafolioJDR';

         // Set HTML
         $mail->isHTML(TRUE);
         $mail->CharSet = 'UTF-8';

         $contenido = '<html>';
         $contenido .= "<p><strong>Hola JDRdev </strong> te ha llegado un correo desde el formulario portafolio.</p>";
         $contenido .= '<p>Mensaje: '.$this->mensaje.'</p>';       
         $contenido .= "<p>Enviado por: ".$this->nombre."</p>";
         $contenido .= '</html>';
         $mail->Body = $contenido;         

         //Enviar el mail
         $mail->send();

    }
}


///////////*****enviando mensaje por correo electronico*///////////

$mensaje = "";
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $mensaje = "Mensaje enviado correctamente.";
        $clase = "maquina-escribir";

        $sendemail = new Email($_POST['email'], $_POST['name'].' '.$_POST['lastname'], $_POST['message']);
        $sendemail->enviarConfirmacion();
    }
?>