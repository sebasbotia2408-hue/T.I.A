<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Denuncia</title>
    <link rel="icon" href="imagenes/Logo.png" type="image/png">
    <link rel="stylesheet" href="fonts.css">
    <link rel="stylesheet" type="text/css" href="formulario.css">
</head>
<body>
    <div class="translate">
        <a href="#" id="idioma" class="idioma">
            <img src="" alt="Icono idioma">
            <img src="banderas/boton flecha.svg" alt="Icono boton">
        </a>
        <ul id= "idiomas" class="idiomas">
        <li class="opcion">
            <a href="#">
                <img src="banderas/latino.svg" alt="Icono Bandera">
                <span>latino</span>
            </a>
        </li>
        <li class="opcion">
            <a href="#">
                <img src="banderas/usa.svg" alt="Icono Bandera">
                <span>usa</span>
            </a>
        </li>
        </ul>
    </div>
    <header>
        <nav>
            <div class="Rectangulo-menu">
                <ul id="menu" class="menu">
                    <li><img src="imagenes/Logo.jpg" class="logo-img"/></li>
                    <li><a href="index.html"><span class=""><i class="icon icon-home"></i></span><span id="Inicio">Inicio</span></a></li>
                    <li><a href="Quienessomos.html"> <span id="Quienes">Quienes somos</span></a></li>
                    <li>
                        <a> <span class=""><i class="icon icon-image"></i></span> <span id="Contenido">Contenido</span> </a>
                        <ul id="submenu" class="submenu">
                            <li><a href="imagenes.html"> <span class=""><i class="icon icon-images"></i></span> <span id="Imagenes">Imagenes</span> </a></li>
                            <li><a href="Videos.html"> <span class=""><i class="icon icon-play"></i></span> <span id="Videos"> Videos </span> </a></li>
                        </ul>
                    </li>
                    <li><a href="perfiles.html  "><span id="Perfiles">Perfiles</span></a></li>
                </nav>
            </div>
    </header>
<br>
<div class="formulario">
   <h2 class="titulo" id="DenunciaT.I.A"></h2> 
<form action="https://formsubmit.co/juanaguillon2006@gmail.com" method="POST">
  <label for="ubicacion" id="Ubicaciondelhecho"></label>
  <input type="text" id="ubicacion" name="ubicacion" required>
<br>
  <label for="especie" id="Especieafectada(siseconoce)"></label>
  <input type="text" id="especie" name="especie">
<br>
  <label for="descripcion" id="Descripciondelcaso"></label>
  <textarea id="descripcion" name="descripcion" rows="5" required></textarea>
<br>
  <label for="anonimo" id="¿Deseaspermaneceranónimo?"></label>
  <select id="anonimo" name="anonimo">
    <option value="sí">Sí</option>
    <option value="no">No</option>
  </select>
<br>
  <input type="hidden" name="_subject" value="Nueva denuncia de tráfico ilegal de animales">
  <input type="hidden" name="_next" value="https://sebasbotia2408-hue.github.io/Denuncia.html">
  <input type="hidden" name="_cc" value="shaicadena03@gmail.com,juanaguillon02@gmail.com,sabecerca@especie.com,denuncias@autoridadambiental.gov.co">
  <input type="submit" id="enviar" value="Enviar denuncia">
</form>
</div>
<br>
<main>
  <h3 id="Contacto"></h3>
  <p id="LineaFisca"></p>
  <p id="LineaPoliciaNacional"></p>
  <p id="LineadeRes"></p>
</main>
<footer>
    <div class="contenedor-footer"></div>
    <div class="content-foo">
      <h4 id="Telefono"></h4>
      <p>(+57) 310 3052492</p>
      <p>(+57) 302 2591995</p>
  </div>
  <div class="contenedor-footer"></div>
    <div class="content-foo">
      <p> E-mail
        <br>
      <a href="mailto:sebasbotia2408@gmail.com ">sebasbotia2408@gmail.com</a>
      <br>
      <a href="mailto:shaicadena03@gmail.com ">shaicadena03@gmail.com</a>
      </p>
  </div>
  <div class="contenedor-footer"></div>
  </div>
  <h2 class="titulo-final" id="titulo_final">&copy; Sebastian Aguillon, Shaiel Mendoza|Trafico Ilegal Animal </h2>
<script src="denuncia.js"></script>
</body>
</html>
