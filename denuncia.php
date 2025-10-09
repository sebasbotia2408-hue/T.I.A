<?php
$ubicacion = $_POST['ubicacion'];
$especie = $_POST['especie'];
$descripcion = $_POST['descripcion'];
$anonimo = $_POST['anonimo'];

$mensaje = "Ubicación del hecho: $ubicacion\n";
$mensaje .= "Especie afectada: $especie\n";
$mensaje .= "Descripción del caso:\n$descripcion\n";
$mensaje .= "¿Desea permanecer anónimo?: $anonimo\n";


$asunto = "Nueva denuncia de tráfico ilegal de animales";


$headers = "From: no-reply@denuncias.com\r\n";
$headers .= "Reply-To: no-reply@denuncias.com\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";


$correos = explode(", ", "juanaguillon02@gmail.com, sabecerca@especie.com, denuncias@autoridadambiental.gov.co");


foreach ($correos as $correo) {
    mail(trim($correo), $asunto, $mensaje, $headers);
}

echo "<h2>Denuncia enviada correctamente. ¡Gracias por tu compromiso!</h2>";
?>

