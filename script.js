// 1. CONFIGURACIÓN: Pon aquí la fecha de cuando empezaron
const fechaInicio = new Date("2024-02-14T00:00:00"); 

function actualizarContador() {
    const ahora = new Date();
    const dif = ahora - fechaInicio;

    const dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    const horas = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((dif % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// 2. Generador de pétalos/corazones
function crearCorazon() {
    const contenedor = document.getElementById("corazones-container");
    const corazon = document.createElement("div");
    
    corazon.classList.add("corazon-caida");
    corazon.innerHTML = "❤"; // Puedes alternar con "🌸"
    
    // Posición aleatoria
    corazon.style.left = Math.random() * 100 + "vw";
    // Tamaño aleatorio
    corazon.style.fontSize = Math.random() * 15 + 10 + "px";
    // Duración de caída aleatoria (entre 3 y 6 segundos)
    const duracion = Math.random() * 3 + 3;
    corazon.style.animationDuration = duracion + "s";
    // Opacidad aleatoria
    corazon.style.opacity = Math.random() * 0.7 + 0.3;

    contenedor.appendChild(corazon);

    // Limpiar el DOM después de que caiga
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// Ejecutar funciones
setInterval(actualizarContador, 1000);
setInterval(crearCorazon, 300); // Crea un corazón cada 300ms
actualizarContador();