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

    const inicio = document.getElementById('Inicio');
    const quienes = document.getElementById('Quienes');
    const contenido = document.getElementById('Contenido');
    const imagenes = document.getElementById('Imagenes');
    const denuncia = document.getElementById('Denuncia');
    switch (idioma) {
        case 'latino':
            inicio.textContent = 'Inicio';
            quienes.textContent = 'Quienes somos';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            denuncia.textContent = 'Denuncia';

            break;

        case 'usa':
            inicio.textContent = 'Home';
            quienes.textContent = 'About Us';
            contenido.textContent = 'Content';
            imagenes.textContent = 'Images';
            denuncia.textContent = 'Report';

            break;

        default:
            titulo.textContent = 'TRÁFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.textContent = 'Este es un párrafo de información en español.';
            inicio.textContent = 'Inicio';
            quienes.textContent = 'Quienes somos';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            denuncia.textContent = 'Denuncia';

            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switch (navigator.language) {
        case 'es-ES':
            establecerIdioma('latino');
            break;
        case 'en-US':
            establecerIdioma('latino');
            break;
        default:
            establecerIdioma('latino');
            break;
    }

});
