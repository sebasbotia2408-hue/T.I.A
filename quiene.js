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

    const objetivoGeneral = document.getElementById('ObjetivoGeneral');
    const objetivosEspecificos = document.getElementById('ObjetivosEspecificos');
    const Mision = document.getElementById('Mision');
    const Vision = document.getElementById('Vision');
    const inicio = document.getElementById('Inicio');
    const contenido = document.getElementById('Contenido');
    const imagenes = document.getElementById('Imagenes');
    const videos = document.getElementById('Videos');
    const denuncia = document.getElementById('Denuncia');
    switch (idioma) {
        case 'latino':
            objetivoGeneral.textContent = 'OBJETIVO GENERAL';
            objetivosEspecificos.textContent = 'OBJETIVOS ESPECIFICOS';
            Mision.textContent = 'MISION';
            Vision.textContent = 'VISION';
            PreguntaProblema.textContent = 'PREGUNTA PROBLEMA';
            inicio.textContent = 'Inicio';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            videos.textContent = 'Videos';
            denuncia.textContent = 'Denuncia';

            break;

        case 'usa':
            objetivoGeneral.textContent = 'GENERAL OBJECTIVE';
            objetivosEspecificos.textContent = 'SPECIFIC OBJECTIVES';
            Mision.textContent = 'MISSION';
            Vision.textContent = 'VISION';
            PreguntaProblema.textContent = 'QUESTION PROBLEM';
            inicio.textContent = 'Home';
            contenido.textContent = 'Content';
            imagenes.textContent = 'Images';
            videos.textContent = 'Videos';
            denuncia.textContent = 'Report';

            break;

        default:
            titulo.textContent = 'TRÁFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.textContent = 'Este es un párrafo de información en español.';
            inicio.textContent = 'Inicio';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            videos.textContent = 'Videos';
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
            establecerIdioma('usa');
            break;
        default:
            establecerIdioma('latino');
            break;
    }

});
