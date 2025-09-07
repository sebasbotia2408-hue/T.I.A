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

    const objetivoGeneral = document.getElementById('DenunciaT.I.A');
    const objetivosEspecificos = document.getElementById('Ubicaciondelhecho');
    const Mision = document.getElementById('Especieafectada(siseconoce)');
    const Vision = document.getElementById('Descripciondelcaso');
    const PreguntaProblema = document.getElementById('¿Deseaspermaneceranónimo?');
    const inicio = document.getElementById('Inicio');
    const quienes = document.getElementById('Quienes');
    const contenido = document.getElementById('Contenido');
    const imagenes = document.getElementById('Imagenes');
    const videos = document.getElementById('Videos');
    const LineaFisca = document.getElementById('LineaFisca');
    const LineaPoliciaNacional = document.getElementById('LineaPoliciaNacional');
    const LineadeRes = document.getElementById('LineadeRes');
    const Telefono = document.getElementById('Telefono');

    switch (idioma) {
        case 'latino':
            objetivoGeneral.textContent = 'Denuncia T.I.A';
            objetivosEspecificos.textContent = 'Ubicación del hecho';
            Mision.textContent = 'Especie afectada (si se conoce)';
            Vision.textContent = 'Descripción del caso';
            PreguntaProblema.textContent = '¿Deseas permanecer anónimo?';
            inicio.textContent = 'Inicio';
            quienes.textContent = 'Quienes somos';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            videos.textContent = 'Videos';
            Contacto.textContent = 'Contacto';
            LineaFisca.innerHTML = "Línea gratuita de la Fiscalía: 122";
            LineaPoliciaNacional.innerHTML = "Línea de la Policía Nacional: 123";
            LineadeRes.innerHTML = "Unidad Movil de Rescate de Fauna Silvestre: (+57) 317 4276828 o a la linea 195 ";
            Telefono.textContent = "Teléfono:";
            titulo_final.textContent = '© Sebastian Aguillon, Shaiel Mendoza | Trafico Ilegal Animal';
            break;

        case 'usa':
            objetivoGeneral.textContent = 'Report T.I.A';
            objetivosEspecificos.textContent = 'Location of the event:';
            Mision.textContent = 'Affected species (if known):';
            Vision.textContent = 'Description of the case:';
            PreguntaProblema.textContent = 'Do you want to remain anonymous?';
            inicio.textContent = 'Home';
            quienes.textContent = 'About us';
            contenido.textContent = 'Content';
            imagenes.textContent = 'Images';
            videos.textContent = 'Videos';
            Contacto.textContent = 'Contacts';
            LineaFisca.innerHTML = "Free line of the Attorney General's Office: 122";
            LineaPoliciaNacional.innerHTML = "Line of the National Police: 123";
            LineadeRes.innerHTML = "Mobile Wildlife Rescue Unit: (+57) 317 4276828 or line 195 ";
            Telefono.textContent = "Phone:";
            titulo_final.textContent = '© Sebastian Aguillon, Shaiel Mendoza | Illegal Animal Trafficking';
            break;

        default:
            objetivoGeneral.textContent = 'Denuncia T.I.A';
            inicio.textContent = 'Inicio';
            quienes.textContent = 'Quienes somos';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            videos.textContent = 'Videos';
            Contacto.textContent = 'Contactos';
            LineaFisca.innerHTML = "Línea gratuita de la Fiscalía: 122";
            LineaPoliciaNacional.innerHTML = "Línea de la Policía Nacional: 123";
            LineadeRes.innerHTML = "Unidad Movil de Rescate de Fauna Silvestre: (+57) 317 4276828 o a la linea 195 ";
            Telefono.textContent = "Teléfono:";
            titulo_final.textContent = '© Sebastian Aguillon, Shaiel Mendoza | Trafico Ilegal Animal';
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
