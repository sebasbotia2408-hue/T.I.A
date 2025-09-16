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
    const PreguntaProblema = document.getElementById('PreguntaProblema')
    const Inicio = document.getElementById('Inicio');
    const Contenido = document.getElementById('Contenido');
    const Imagenes = document.getElementById('Imagenes');
    const Videos = document.getElementById('Videos');
    const Denuncia = document.getElementById('Denuncia');
    switch (idioma) {
        case 'latino':
            objetivoGeneral.innerHTML = 'OBJETIVO GENERAL <img src="banderas/boton flecha.svg" alt="Icono boton">';
            objetivosEspecificos.innerHTML = 'OBJETIVOS ESPECIFICOS <img src="banderas/boton flecha.svg" alt="Icono boton">';
            Mision.innerHTML = 'MISION <img src="banderas/boton flecha.svg" alt="Icono boton">';
            Vision.innerHTML = 'VISION <img src="banderas/boton flecha.svg" alt="Icono boton">';
            PreguntaProblema.innerHTML = 'PREGUNTA PROBLEMA <img src="banderas/boton flecha.svg" alt="Icono boton">';
            Inicio.textContent = 'Inicio';
            Contenido.textContent = 'Contenido';
            Imagenes.textContent = 'Imagenes';
            Videos.textContent = 'Videos';
            Denuncia.textContent = 'Denuncia';

            break;

        case 'usa':
            objetivoGeneral.innerHTML = 'GENERAL OBJECTIVE <img src="banderas/boton flecha.svg" alt="Icono boton">';
            objetivosEspecificos.innerHTML = 'SPECIFIC OBJECTIVES <img src="banderas/boton flecha.svg" alt="Icono boton">';
            Mision.innerHTML = 'MISSION <img src="banderas/boton flecha.svg" alt="Icono boton">';
            Vision.innerHTML = 'VISION <img src="banderas/boton flecha.svg" alt="Icono boton">';
            PreguntaProblema.innerHTML = 'QUESTION PROBLEM <img src="banderas/boton flecha.svg" alt="Icono boton">';
            Inicio.textContent = 'Home';
            Contenido.textContent = 'Content';
            Imagenes.textContent = 'Images';
            Videos.textContent = 'Videos';
            Denuncia.textContent = 'Report';

            break;

        default:
            titulo.textContent = 'TRÁFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.textContent = 'Este es un párrafo de información en español.';
            Inicio.textContent = 'Inicio';
            Contenido.textContent = 'Contenido';
            Imagenes.textContent = 'Imagenes';
            Videos.textContent = 'Videos';
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
let imageVisible = null; 

function mostrarImagen(num) {
    const imgActual = document.getElementById("img" + num);

    if (imageVisible === num) {
        imgActual.style.display = "none";
        imageVisible = null;
        return;
    }
    if (imageVisible !== null) {
        document.getElementById("img" + imageVisible).style.display = "none";
    }
    imgActual.style.display = "block";
    imageVisible = num; 
}
