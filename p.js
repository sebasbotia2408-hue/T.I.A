const idiomaActual = document.getElementById('idioma');
const ListaIdioma = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

const parrafo1= document.getElementById('parrafo-info-1');
const parrafo2= document.getElementById('parrafo-info-2');
const titulo1 = document.getElementById('nombre-info-1');
const titulo2 = document.getElementById('nombre-info-2');
const Contacto = document.getElementById('Contacto');
const titulo_final = document.getElementById('titulo_final');

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
    const quienes = document.getElementById('Quienes');
    const contenido = document.getElementById('Contenido');
    const imagenes = document.getElementById('Imagenes');
    const videos = document.getElementById('Videos');
    const denuncia = document.getElementById('Denuncia');
    const Telefono = document.getElementById('Telefono');
    switch (idioma) {
        case 'latino':
            titulo1.textContent = 'Juan Aguillon';
            parrafo1.textContent = `
                Programador de la pagina y juego
            `;
            titulo2.textContent = 'Shaiel Mendoza';
            parrafo2.textContent = `   
                Diseño de imagenes y word
            `;
            Inicio.textContent = 'Inicio';
            quienes.textContent = 'Quienes somos';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            videos.textContent = 'Videos';
            denuncia.textContent = 'Denuncia';
            Telefono.textContent = 'Teléfono';
            titulo_final.textContent = '© Sebastian Aguillon - Shaiel Mendoza | Trafico Ilegal Animal';
            break;

        case 'usa':
            titulo1.textContent = 'Juan Aguillon';
            parrafo1.textContent = `
                Programmer of the page and game
            `;
            titulo2.textContent = 'Shaiel Mendoza';
            parrafo2.textContent = `
                Image and word design
            `;
            Inicio.textContent = 'Home';
            quienes.textContent = 'About Us';
            contenido.textContent = 'Content';
            imagenes.textContent = 'Images';
            videos.textContent = 'Videos';
            denuncia.textContent = 'Report';
            Telefono.textContent = 'Phone';
            titulo_final.textContent = '© Sebastian Aguillon - Shaiel Mendoza | Illegal Animal Trafficking';

            break;

        default:
            titulo.textContent = 'TRÁFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.textContent = 'Este es un párrafo de información en español.';
                Inicio.textContent = 'Inicio';
                quienes.textContent = 'Quienes somos';
                contenido.textContent = 'Contenido';
                imagenes.textContent = 'Imagenes';
                videos.textContent = 'Videos';
                denuncia.textContent = 'Denuncia';
                Telefono.textContent = 'Teléfono';

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