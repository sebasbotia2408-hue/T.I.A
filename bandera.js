document.querySelectorAll('#idiomas .opcion a').forEach(opcion => {
  opcion.addEventListener('click', function(e) {
    e.preventDefault();
    const bandera = this.getAttribute('data-bandera');
    document.getElementById('bandera-actual').src = bandera;
  });
});


