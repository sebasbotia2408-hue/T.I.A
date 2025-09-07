document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('#idiomas .opcion a').forEach(opcion => {
    opcion.addEventListener('click', function(e) {
      e.preventDefault();
      
      // obtener la ruta de la bandera
      const bandera = this.getAttribute('data-bandera');
      
      // cambiar la bandera de arriba
      document.getElementById('bandera-actual').src = bandera;
    });
  });
});
