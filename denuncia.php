<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar las clases de PHPMailer
require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

// Verificar que la solicitud sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Método no permitido.";
    exit;
}

// Recoger datos del formulario
$ubicacion = $_POST['ubicacion'];
$especie = $_POST['especie'];
$descripcion = $_POST['descripcion'];
$anonimo = isset($_POST['anonimo']) ? $_POST['anonimo'] : 'No';

// Construir el mensaje
$mensaje = "Ubicación del hecho: $ubicacion\n";
$mensaje .= "Especie afectada: $especie\n";
$mensaje .= "Descripción del caso:\n$descripcion\n";
$mensaje .= "¿Desea permanecer anónimo?: $anonimo\n";

// Configurar PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'tu_correo@gmail.com'; // Cambia esto
    $mail->Password = 'tu_clave_app';        // Usa una clave de aplicación
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Remitente y destinatarios
    $mail->setFrom('tu_correo@gmail.com', 'Formulario de Denuncia');
    $mail->addAddress('juanaguillon02@gmail.com');
    $mail->addAddress('sabecerca@especie.com');
    $mail->addAddress('denuncias@autoridadambiental.gov.co');

    // Contenido del correo
    $mail->Subject = 'Nueva denuncia de tráfico ilegal de animales';
    $mail->Body = $mensaje;

    // Enviar
    $mail->send();
    echo "<h2>Denuncia enviada correctamente. ¡Gracias por tu compromiso!</h2>";
} catch (Exception $e) {
    echo "<h2>Error al enviar la denuncia: {$mail->ErrorInfo}</h2>";
}
?>

