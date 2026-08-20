// LISTAS CONFIGURABLES POR CATEGORÍA
const CATEGORIES_STATIONS = {
  0: [ // Música Clásica
    { name: "Radio Swiss Classic", frequency: 88.1, stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128" },
    { name: "Classic FM", frequency: 89.4, stream: "https://media-ice.musicradio.com/ClassicFMMP3" }
  ],
  1: [ // Audiolibros
    { name: "Emisora por configurar", frequency: 90.0, stream: "" }
  ],
  2: [ // Noticias
    { name: "BBC World Service", frequency: 98.3, stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
    { name: "RFI Español", frequency: 99.1, stream: "https://stream.rfi.fr/rfienespagnol/all/rfienespagnol-64k.mp3" }
  ],
  3: [ // Podcasts
    { name: "Emisora por configurar", frequency: 100.0, stream: "" }
  ],
  4: [ // Lo-Fi / Ambient
    { name: "SomaFM Drone Zone", frequency: 102.5, stream: "https://ice5.somafm.com/dronezone-128-mp3" }
  ],
  5: [ // Miscelánea
    { name: "Emisora por configurar", frequency: 106.0, stream: "" }
  ]
};

let currentCategory = 0;
let stationIndex = 0;
let playing = false;
let degrees = 0;

const freq = document.getElementById("frequency");
const nameEl = document.getElementById("station");
const status = document.getElementById("status");
const audio = document.getElementById("audio");
const power = document.getElementById("power");
const box = document.getElementById("box");
const carousel = document.getElementById("carousel");

function getActiveStations() {
  return CATEGORIES_STATIONS[currentCategory] || CATEGORIES_STATIONS[0];
}

function updateStationDisplay() {
  const stations = getActiveStations();
  if (stationIndex >= stations.length) stationIndex = 0;
  const current = stations[stationIndex];
  freq.textContent = current.frequency.toFixed(1);
  nameEl.textContent = current.name;
}

function stopPlayback() {
  playing = false;
  power.classList.remove("playing");
  audio.pause();
  audio.src = "";
  status.textContent = "";
  status.classList.remove("loading");
}

function startPlayback() {
  const stations = getActiveStations();
  const current = stations[stationIndex];

  if (!current.stream) {
    status.textContent = "Sin señal disponible";
    return;
  }

  playing = true;
  power.classList.add("playing");
  status.textContent = "Conectando…";
  status.classList.add("loading");

  audio.src = current.stream;
  audio.load();
  audio.play().catch(e => {
    if (e.name !== 'AbortError') {
      status.textContent = "Sin señal";
      status.classList.remove("loading");
      stopPlayback();
    }
  });
}

document.getElementById("prev").onclick = () => {
  const stations = getActiveStations();
  stationIndex = (stationIndex - 1 + stations.length) % stations.length;
  updateStationDisplay();
  if (playing) startPlayback();
};

document.getElementById("next").onclick = () => {
  const stations = getActiveStations();
  stationIndex = (stationIndex + 1) % stations.length;
  updateStationDisplay();
  if (playing) startPlayback();
};

power.onclick = () => {
  if (!playing) startPlayback();
  else stopPlayback();
};

audio.onplaying = () => {
  status.textContent = "";
  status.classList.remove("loading");
};

function rotateCarousel(dir) {
  stopPlayback();
  degrees -= dir * 60; // 360deg / 6 = 60deg
  box.style.transform = `rotateY(${degrees}deg)`;

  let normalized = ((degrees / -60) % 6 + 6) % 6;
  currentCategory = Math.round(normalized);
  stationIndex = 0;

  updateStationDisplay();
}

let startX = 0;
carousel.addEventListener('touchstart', (e) => { 
  startX = e.touches[0].clientX; 
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 45) rotateCarousel(1);
  else if (endX - startX > 45) rotateCarousel(-1);
}, { passive: true });

updateStationDisplay();
