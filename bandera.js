<script>
  const banderaActual = document.getElementById("bandera-actual");
  const opciones = document.querySelectorAll("#idiomas a");

  opciones.forEach(opcion => {
    opcion.addEventListener("click", (e) => {
      e.preventDefault();
      const nuevaBandera = opcion.getAttribute("data-bandera");
      banderaActual.src = nuevaBandera;
    });
  });
</script>
