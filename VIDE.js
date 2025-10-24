const idiomaActual = document.getElementById('idioma');
const ListaIdioma = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');



idiomaActual.addEventListener('click',()=>{
    ListaIdioma.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        const idioma = opcion.getElementsByTagName ('span') [0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;

    const Inicio = document.getElementById('Inicio');
    const Contenido = document.getElementById('Contenido');
    const Imagenes = document.getElementById('Imagenes');
    const Denuncia = document.getElementById('Denuncia');
    const Perfiles = document.getElementById('Perfiles');
    const Telefono = document.getElementById('Telefono');
    switch (idioma) {
        case 'latino':
            Inicio.textContent = 'Inicio';
            Contenido.textContent = 'Contenido';
            Imagenes.textContent = 'Imagenes';
            Denuncia.textContent = 'Denuncia';
            Perfiles.textContent = 'Perfiles';
            Telefono.textContent = 'Teléfono';

            break;

        case 'usa':
            Inicio.textContent = 'Home';
            Contenido.textContent = 'Content';
            Imagenes.textContent = 'Images';
            Denuncia.textContent = 'Report';
            Perfiles.textContent = 'Profiles';
            Telefono.textContent = 'Phone';

            break;

        default:
            titulo.textContent = 'TRÁFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.textContent = 'Este es un párrafo de información en español.';
            Inicio.textContent = 'Inicio';
            Contenido.textContent = 'Contenido';
            Imagenes.textContent = 'Imagenes';
            Denuncia.textContent = 'Denuncia';

            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switch (navigator.language) {
        case 'es-ES':
            establecerIdioma('latino');
            break;
        case 'en-US':
            establecerIdioma('usa');
            break;
        default:
            establecerIdioma('latino');
            break;
    }

});
