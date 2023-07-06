<?php

use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
//$mail = new PHPMailer();


class Email {

    public $email;
    public $nombre;
    public $token;
    
    public function __construct($email, $nombre, $token)
    {
        $this->email = $email;
        $this->nombre = $nombre;
        $this->token = $token;
    }

    public function enviarConfirmacion() {

         // create a new object
         $mail = new PHPMailer();
         $mail->isSMTP();
         $mail->Host = 'smtp.mailtrap.io';
         $mail->SMTPAuth = true;
         $mail->Port = 2525;
         $mail->Username = "16acf5de9a6d51";
         $mail->Password = "5920be5576bd6b";
     
         $mail->setFrom('jdrweb@portafolio.com');
         $mail->addAddress($this->email, $this->nombre);
         $mail->Subject = 'Confirma tu Cuenta';

         // Set HTML
         $mail->isHTML(TRUE);
         $mail->CharSet = 'UTF-8';

         $contenido = '<html>';
         $contenido .= "<p><strong>Hola " . $this->nombre .  "</strong> te ha llegado un correo desde el formulario portafolio.</p>";
         $contenido .= '<p>Presiona aquÃ­: <a href="http://devwebcamp_inicio.test/confirmar-cuenta?token=' . $this->token . '">Confirmar Cuenta</a>';       
         $contenido .= "<p>Si tu no creaste esta cuenta; puedes ignorar el mensaje</p>";
         $contenido .= '</html>';
         $mail->Body = $contenido;          //. $_ENV['HOST'] . se remplaza por http://devwebcamp_inicio.test

         //Enviar el mail
         $mail->send();

    }
}

$mensaje = "";
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $mensaje = "Mensaje enviado correctamente.";
        $clase = "maquina-escribir";


        $sendemail = new Email('jdr@portafolio.com', 'julian', '55456565');
        $sendemail->enviarConfirmacion();
    }
?>