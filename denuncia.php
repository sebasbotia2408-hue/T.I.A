<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Método no permitido.";
    exit;
}

// Recoger datos del formulario
$ubicacion = $_POST['ubicacion'];
$especie = $_POST['especie'];
$descripcion = $_POST['descripcion'];
$anonimo = $_POST['anonimo'];

// Construir el mensaje
$mensaje = "Ubicación del hecho: $ubicacion\n";
$mensaje .= "Especie afectada: $especie\n";
$mensaje .= "Descripción del caso:\n$descripcion\n";
$mensaje .= "¿Desea permanecer anónimo?: $anonimo\n";

// Asunto del correo
$asunto = "Nueva denuncia de tráfico ilegal de animales";

// Cabeceras del correo
$headers = "From: no-reply@denuncias.com\r\n";
$headers .= "Reply-To: no-reply@denuncias.com\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Lista de correos como array
$correos = explode(", ", "juanaguillon02@gmail.com, sabecerca@especie.com, denuncias@autoridadambiental.gov.co");

// Enviar a cada destinatario
foreach ($correos as $correo) {
    mail(trim($correo), $asunto, $mensaje, $headers);
}

// Confirmación al usuario
echo "<h2>Denuncia enviada correctamente. ¡Gracias por tu compromiso!</h2>";
?>
