<?php
$ubicacion = htmlspecialchars($_POST['ubicacion']);
$especie = htmlspecialchars($_POST['especie']);
$descripcion = htmlspecialchars($_POST['descripcion']);
$anonimo = htmlspecialchars($_POST['anonimo']);

$mensaje = "Ubicación del hecho: $ubicacion\n";
$mensaje .= "Especie afectada: $especie\n";
$mensaje .= "Descripción: $descripcion\n";
$mensaje .= "¿Desea permanecer anónimo?: $anonimo\n";

$destino = "juanaguillon02@gmail.com";

$asunto = "Nueva denuncia de tráfico ilegal de fauna";

$headers = "From: formulario@tusitio.com\r\n";
$headers .= "Reply-To: formulario@tusitio.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($destino, $asunto, $mensaje, $headers)) {
  echo "¡Denuncia enviada exitosamente!";
} else {
  echo "Hubo un error al enviar la denuncia.";
}

?>
