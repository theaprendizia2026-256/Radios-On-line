// LISTAS CONFIGURABLES POR CATEGORÍA
const CATEGORIES_STATIONS = {
  0: [ // Música Clásica
    { name: "Radio Klassik Stephansdom, Viena, Austria", frequency: 88.1, stream: "https://radioklassikstephansdom.ice.infomaniak.ch/radioklassikstephansdom.mp3" },
    { name: "Radio Sacred Music, Iowa, EE.UU.", frequency: 88.3, stream: "https://das-edge15-live365-dal02.cdnstream.com/a39922" },
    { name: "Radio Swiss Classic, Basilea, Suiza", frequency: 88.5, stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128" },
    { name: "CapRadio Music, Sacramento CA, EE.UU.", frequency: 88.9, stream: "https://18433.live.streamtheworld.com/KXPRAAC.aac" },
    { name: "Radio Classical Music, Moscú, Rusia", frequency: 89.1, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/38" }, 
    { name: "Classic FM, Londres, England", frequency: 89.4, stream: "https://media-ice.musicradio.com/ClassicFMMP3" },
    { name: "0R - Piano Classical, Berlin, Germany", frequency: 89.6, stream: "https://0nlineradio.radioho.st/classical-classical-piano?ref=radio-browser26" },
    { name: "0R - Bach Classical, Renania, Alemania", frequency: 89.8, stream: "https://0nlineradio.radioho.st/0r-bach?ref=radio-browser26" },
    { name: "100 Greatest Classical Music, 	Ontario, Canada", frequency: 90.1, stream: "https://az1.mediacp.eu/listen/100greatestclassicalmusic/radio.mp3" },
    { name: "Classical International, Londres, England", frequency: 90.3, stream: "https://ec3.yesstreaming.net:3625/stream" },
    { name: "Pop Classical Music, Moscú, Rusia", frequency: 90.5, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/97" },
    { name: "Classical Calm by King FM, Seattle, EE.UU", frequency: 90.7, stream: "https://classicalking.streamguys1.com/evergreen-aac-128k" },
    { name: "Classical 90.3, Shanghái, China", frequency: 90.9, stream: "https://lhttp.qingting.fm/live/267/64k.mp3" },
    { name: "KUSC Classical FM 91.1, Los Ángeles, EE.UU", frequency: 91.1, stream: "https://23023.live.streamtheworld.com/KUSCMP96_SC" },
    { name: "Splash - Classical, Zaragoza, España", frequency: 91.3, stream: "https://ais-sa2.cdnstream1.com/2208_128.mp3" },
    { name: "Chinese Classical Music, Beijing, China.", frequency: 96.7, stream: "https://radio.chinesemusicworld.com/chinesemusic.mp3" },
    { name: "Radio Ennio Morricone, Moscú, Rusia", frequency: 97.5, stream: "https://srv01.gpmradio.ru:8443/stream/pro/aac/64/395" },
    { name: "Radio EBS | Movie Soundtracks, Rumania", frequency: 97.9, stream: "https://azura.ebsmedia.ro/listen/movies/movies128.mp3" },
  ],
  1: [ // Audiolibros
    { name: "El inamible - Baldomero Lillo", frequency: "Cuento", stream: "./audios/inamible.mp3"},
    { name: "El hombre de la rosa - Manuel Rojas", frequency: "Cuento", stream: "./audios/elhombre.mp3"},
    { name: "El Colocolo - Manuel Rojas", frequency: "Cuento", stream: "./audios/el_colocolo.mp3"},
    { name: "La ajorca de Oro - Gustavo Adolfo Bécquer", frequency: "Leyenda", stream: "./audios/ajorca.mp3"},
    { name: "La miel silvestre - Horacio Quiroga", frequency: "Cuento", stream: "./audios/mielsilvestre.mp3"},
    { name: "El hombre de la rosa - Manuel Rojas", frequency: "RadioTeatro", stream: "./audios/elhombre(teatro).mp3"},
  ],
  2: [ // Noticias
    { name: "Radio Cooperativa, Chile", frequency: 98.8, stream: "https://unlimited3-cl.dps.live/cooperativafm/mp3/icecast.audio" },
    { name: "Radio Bio Bio, Chile", frequency: 98.9, stream: "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio" },
    { name: "Radio El Conquistador, Chile", frequency: 98.6, stream: "https://stream10.usastreams.com/9314/stream/" },
    { name: "RFI Español, Francia", frequency: 98.4, stream: "https://rfienespagnol64k.ice.infomaniak.ch/rfienespagnol-64.mp3" },
    { name: "RNE - Radio Nacional de España", frequency: 98.5, stream: "https://dispatcher.rndfnk.com/crtve/rne5/lcg/mp3/high" },
    { name: "Radio Sputnik, Moscow, Rusia", frequency: 98.7, stream: "https://icecast-rian.cdnvideo.ru/voicerus" },
    { name: "BBC World Service, Londres, Inglaterra", frequency: 98.3, stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
  ],
  3: [ // Podcasts
    { name: "RNE Radio 3, España", frequency: 96.9, stream: "https://rtvelivestream.rtve.es/rtvesec/rne/rne_r3_main.m3u8" },
  ],
  4: [ // Lo-Fi / Ambient
    { name: "Radio SomaFM Groove Salad, SF, EE.UU", frequency: 96.0, stream: "https://ice5.somafm.com/groovesalad-128-mp3" },
    { name: "Radio SomaFM Drone Zone, SF, EE.UU.", frequency: 96.1, stream: "https://ice5.somafm.com/dronezone-128-mp3" },
    { name: "Radio Movie Soundtracks Hits, EE.UU.", frequency: 98.1, stream: "https://strm112.1.fm/moviesoundtracks_mobile_mp3" },
    { name: "Radio Swiss Jazz, Basilea, Suiza", frequency: 96.3, stream: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
    { name: "Adroit Jazz Underground, New York, EEUU", frequency: 96.5, stream: "https://icecast.walmradio.com:8443/jazz_opus" },
    { name: "Bossa Jazz, Brasilea, Brasil", frequency: 96.6, stream: "https://centova5.transmissaodigital.com:20104/live" }, 
    { name: "Sunset Chillout Lounge, New York, EEUU", frequency: 96.7, stream: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
    { name: "Music for sleep, Berlin, Germany", frequency: 96.8, stream: "https://0nlineradio.radioho.st/classical-classical-music-for-sleep?ref=radio-browser26" },
  ],
  5: [ // Miscelánea
    { name: "Radio Always Elvis, Randers, Denmark", frequency: 97.3, stream: "https://radioserver.dk/alwayselvisradio" },
    { name: "Radio Italia anni 60, Milán, Italia", frequency: 97.1, stream: "https://ice12.fluidstream.net/ria60_mi.aac" },
    { name: "Radio Addictive 50s, Toronto, Canada", frequency: 97.2, stream: "https://quincy.torontocast.com:2945/stream" },
    { name: "Radio Oldies And Rock N Roll, EEUU", frequency: 97.5, stream: "https://listen.radioking.com/radio/382444/stream/433642" },
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
  
  // Si la frecuencia es un número le aplica .toFixed(1), si es texto ("MP3") lo muestra tal cual
  freq.textContent = typeof current.frequency === 'number' ? current.frequency.toFixed(1) : current.frequency;
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
let isDragging = false;

// 1. TÁCTIL (Celular)
carousel.addEventListener('touchstart', (e) => { 
  startX = e.touches[0].clientX; 
}, { passive: true });

carousel.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 45) rotateCarousel(1);
  else if (endX - startX > 45) rotateCarousel(-1);
}, { passive: true });

// 2. ARRASTRE CON MOUSE (Web / Drag)
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  carousel.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  carousel.style.cursor = 'grab';
  
  let endX = e.clientX;
  if (startX - endX > 45) rotateCarousel(1);
  else if (endX - startX > 45) rotateCarousel(-1);
});

// 3. RUEDA DEL MOUSE (Web / Scroll Wheel & Trackpad)
carousel.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0 || e.deltaX > 0) {
    rotateCarousel(1);
  } else if (e.deltaY < 0 || e.deltaX < 0) {
    rotateCarousel(-1);
  }
}, { passive: false });

updateStationDisplay();
