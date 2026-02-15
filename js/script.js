const STATIONS = [
    { name: "Klassik Stephansdom", frequency: 88.1, stream: "https://radioklassikstephansdom.ice.infomaniak.ch/radioklassikstephansdom.mp3" },
    { name: "Radio Clásica", frequency: 88.5, stream: "https://live.musopen.org:8085/streamvbr0" },
    { name: "SomaFM Groove Salad", frequency: 88.7, stream: "https://ice5.somafm.com/groovesalad-128-mp3" },
    { name: "Barok Clásica", frequency: 89.5, stream: "https://streams.greenhost.nl:8006/barok" },
    { name: "SomaFM Drone Zone", frequency: 89.9, stream: "https://ice5.somafm.com/dronezone-128-mp3" },
    { name: "Radio Swiss Jazz", frequency: 91.5, stream: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
    { name: "Italia Anni 60", frequency: 92.1, stream: "https://ice12.fluidstream.net/ria60_mi.aac" },
    { name: "Radio Swiss Classic", frequency: 93.3, stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128" },
    { name: "Ennio Morricone Radio", frequency: 94.7, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/395" },
    { name: "BBC World Service", frequency: 96.3, stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" }
];
let index = 0;
let playing = false;

const freq = document.getElementById("frequency");
const nameEl = document.getElementById("station");
const status = document.getElementById("status");
const audio = document.getElementById("audio");
const power = document.getElementById("power");

function updateUI() {
    freq.textContent = STATIONS[index].frequency.toFixed(1);
    nameEl.textContent = STATIONS[index].name;
    
    // Si está encendida, cambiamos el link y reproducimos
    if (playing) {
        status.textContent = "Conectando…";
        audio.src = STATIONS[index].stream; 
        audio.load(); // Fuerza al navegador a reconocer el nuevo link
        audio.play().catch(e => {
            status.textContent = "Error de conexión";
            playing = false;
        });
    }
}

// Controladores de eventos
document.getElementById("prev").onclick = () => {
    index = (index - 1 + STATIONS.length) % STATIONS.length;
    updateUI();
};

document.getElementById("next").onclick = () => {
    index = (index + 1) % STATIONS.length;
    updateUI();
};

power.onclick = () => {
    if (!playing) {
        playing = true;
        power.classList.add("playing");
        status.textContent = "Conectando…";
        
        // Asignamos el link justo antes de tocar
        audio.src = STATIONS[index].stream;
        audio.load();
        
        audio.play()
            .then(() => status.textContent = "♫ Reproduciendo")
            .catch(() => {
                status.textContent = "Error de conexión";
                playing = false;
                power.classList.remove("playing");
            });
    } else {
        playing = false;
        power.classList.remove("playing");
        audio.pause();
        audio.src = ""; // Liberamos la memoria de la RAM al apagar
        status.textContent = "";
    }
};

// Manejo de errores de audio (Lo que faltaba)
audio.onerror = () => {
    if (playing) {
        status.textContent = "Estación fuera de línea";
        power.classList.remove("playing");
        playing = false;
    }
};

// Inicialización
updateUI();
