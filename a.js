const idiomaActual = document.getElementById('idioma');
const ListaIdioma = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

const titulo = document.getElementById('titulo-info');
const parrafo= document.getElementById('parrafo-info');
const Telefono = document.getElementById('Telefono');
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
    const quienes = document.getElementById('Quienes');
    const contenido = document.getElementById('Contenido');
    const imagenes = document.getElementById('Imagenes');
    const videos = document.getElementById('Videos');
    const denuncia = document.getElementById('Denuncia');
    const Perfiles = document.getElementById('Perfiles');
    switch (idioma) {
        case 'latino':
            titulo.textContent = 'TRAFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.innerHTML = `
                <p> El tráfico ilegal de animales silvestres es una actividad criminal y una de las más lucrativas del mundo. Esta representa una amenaza grave para la biodiversidad, y consiste en la captura, transporte y comercialización no autorizada de animales silvestres, ya sean vivos o muertos, como sus pieles, colmillos, etc.
                Este comercio mueve millones de dólares anuales y está ubicado como el cuarto negocio más lucrativo, por debajo del narcotráfico, la falsificación y el tráfico de armas.</p>
                <p>En Colombia esta problemática es crítica, ya que es uno de los países más diversos del mundo. Su ubicación estratégica y variedad de ecosistemas lo hacen vulnerable al tráfico de especies silvestres, tanto para consumo interno como exportación ilegal hacia América, Europa y Asia.
                Se calcula que en Colombia se decomisan más de 60.000 animales silvestres por año, y que el 84% de estos son aves, principalmente loros, guacamayas y pericos, además de otras especies como tortugas morrocoy, iguanas y monos tití.
                Las regiones más afectadas son el Amazonas, Orinoquía, el Caribe y el Pacífico. Las causas principales incluyen la pobreza, la falta de educación ambiental, la demanda del mercado negro internacional y el escaso control en zonas rurales y fronterizas.</p>
                <p>A pesar de la legislación colombiana que prohíbe el tráfico ilegal de fauna silvestre (Ley 611 de 2000, Ley 1333 de 2009 y Ley 2111 de 2021), el tráfico continúa siendo un problema persistente.
                Las autoridades encargadas de combatir este problema son la Policía Ambiental, el Ministerio de Ambiente y las Corporaciones Autónomas Regionales (CAR).</p>
                <p>Se han creado campañas educativas, centros de rescate y rehabilitación de animales recuperados, y Colombia participa en acuerdos internacionales como la Convención sobre el Comercio Internacional de Especies Amenazadas (CITES).</p>
            `;
            quienes.textContent = 'Quienes somos';
            contenido.textContent = 'Contenido';
            imagenes.textContent = 'Imagenes';
            videos.textContent = 'Videos';
            denuncia.textContent = 'Denuncia';
            Telefono.textContent = 'Teléfono';
            Perfiles.textContent = 'Perfiles';
            titulo_final.textContent = '© Sebastian Aguillon - Shaiel Mendoza | Trafico Ilegal Animal';
            break;

        case 'usa':
            titulo.textContent = 'ILLEGAL TRAFFICKING OF WILDLIFE';
            parrafo.innerHTML = `
                <p>Illegal wildlife trafficking is a criminal activity and one of the most lucrative in the world.
                It poses a serious threat to biodiversity and involves the unauthorized capture, transport, and commercialization of wild animals—whether alive or dead—including their skins, tusks, and other parts.
                This trade generates millions of dollars annually and ranks as the fourth most profitable illicit business, following drug trafficking, counterfeiting, and arms trafficking.</p>
                <p>In Colombia, this issue is particularly critical, as the country is one of the most biodiverse in the world. Its strategic location and wide variety of ecosystems make it vulnerable to wildlife trafficking, both for domestic consumption and illegal export to continents such as America, Europe, and Asia.
                It is estimated that over 60,000 wild animals are confiscated each year in Colombia, with 84% of them being birds—mainly parrots, macaws, and parakeets—as well as other species like morrocoy turtles, iguanas, and titi monkeys.
                The regions most affected include the Amazon, Orinoquía, the Caribbean, and the Pacific. The main causes of trafficking are poverty, lack of environmental education, high demand in the international black market, and limited enforcement in rural and border areas.</p>
                <p>Despite Colombian legislation prohibiting illegal wildlife trafficking—Law 611 of 2000, Law 1333 of 2009, and Law 2111 of 2021—the problem persists.</p>
                <p>The authorities responsible for combating this issue include the Environmental Police, the Ministry of Environment, and the Regional Autonomous Corporations (CAR).</p>
                <p>Educational campaigns have been launched, rescue and rehabilitation centers for recovered animals have been established, and Colombia also participates in international agreements such as CITES.</p>
            `;
            quienes.textContent = 'About Us';
            contenido.textContent = 'Content';
            imagenes.textContent = 'Images';
            videos.textContent = 'Videos';
            denuncia.textContent = 'Report';
            Telefono.textContent = 'Phone';
            Perfiles.textContent = 'Profiles';
            titulo_final.textContent = '© Sebastian Aguillon - Shaiel Mendoza | Illegal Animal Trafficking';

            break;

        default:
            titulo.textContent = 'TRÁFICO ILEGAL DE FAUNA SILVESTRE';
            parrafo.textContent = 'Este es un párrafo de información en español.';
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


