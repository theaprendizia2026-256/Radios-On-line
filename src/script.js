// LISTAS CONFIGURABLES POR CATEGORÍA
const CATEGORIES_STATIONS = {
  0: [ // Música Clásica
    { name: "Radio Klassik Stephansdom, Viena, Austria", frequency: 88.1, stream: "https://radioklassikstephansdom.ice.infomaniak.ch/radioklassikstephansdom.mp3" },
    { name: "Radio Sacred Music, Iowa, EE.UU.", frequency: 88.3, stream: "https://das-edge15-live365-dal02.cdnstream.com/a39922" },
    { name: "Radio Swiss Classic, Basilea, Suiza", frequency: 88.5, stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128" },
    { name: "CapRadio Music, Sacramento CA, EE.UU.", frequency: 88.9, stream: "https://18433.live.streamtheworld.com/KXPRAAC.aac" },
    { name: "Radio Classical Music, Moscú, Rusia", frequency: 89.1, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/38" }, 
    { name: "Classic FM, Londres, Inglaterra", frequency: 89.4, stream: "https://media-ice.musicradio.com/ClassicFMMP3" },
    { name: "0R - Piano Classical, Berlin, Germany", frequency: 89.6, stream: "https://0nlineradio.radioho.st/classical-classical-piano?ref=radio-browser26" },
    { name: "0R - Bach Classical, Renania, Alemania", frequency: 89.8, stream: "https://0nlineradio.radioho.st/0r-bach?ref=radio-browser26" },
    { name: "100 Greatest Classical Music, 	Ontario, Canada", frequency: 90.1, stream: "https://az1.mediacp.eu/listen/100greatestclassicalmusic/radio.mp3" },
    { name: "Classical Radio International, Londres, Inglaterra", frequency: 90.3, stream: "https://ec3.yesstreaming.net:3625/stream" },
    { name: "Pop Classical Music, Moscú, Rusia", frequency: 90.5, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/97" },
    { name: "Classical Calm by King FM, Seattle, EE.UU", frequency: 90.7, stream: "https://classicalking.streamguys1.com/evergreen-aac-128k" },
    { name: "Classical 90.3, Shanghái, China", frequency: 90.9, stream: "https://lhttp.qingting.fm/live/267/64k.mp3" },
    { name: "KUSC Classical FM 91.1, Los Ángeles, EE.UU", frequency: 91.1, stream: "https://23023.live.streamtheworld.com/KUSCMP96_SC" },
    { name: "Splash - Classical, Zaragoza, España", frequency: 91.3, stream: "https://ais-sa2.cdnstream1.com/2208_128.mp3" },
    { name: "Chinese Classical Music, Beijing, China.", frequency: 96.7, stream: "https://radio.chinesemusicworld.com/chinesemusic.mp3" },
    { name: "Radio Ennio Morricone, Moscú, Rusia", frequency: 97.5, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/395" },
    { name: "Radio EBS | Movie Soundtracks, Romania", frequency: 97.9, stream: "https://azura.ebsmedia.ro/listen/movies/movies128.mp3" },
    { name: "Radio Movie Soundtracks Hits, EE.UU.", frequency: 98.1, stream: "https://strm112.1.fm/moviesoundtracks_mobile_mp3" },
  ],
  1: [ // Audiolibros
    { name: "Emisora por configurar", frequency: 90.0, stream: "" }
  ],
  2: [ // Noticias
    { name: "BBC World Service, Londres, Inglaterra", frequency: 98.3, stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
    { name: "RFI Español, Francia", frequency: 98.4, stream: "https://rfienespagnol64k.ice.infomaniak.ch/rfienespagnol-64.mp3" },
    { name: "RNE Radio 5, Galicia, España", frequency: 98.5, stream: "https://rfienespagnol64k.ice.infomaniak.ch/rfienespagnol-64.mp3" },
    { name: "RNE - Radio Nacional de España", frequency: 98.7, stream: "https://dispatcher.rndfnk.com/crtve/rne1/mad/mp3/high" },
    { name: "Radio Cooperativa, Chile", frequency: 98.8, stream: "https://unlimited3-cl.dps.live/cooperativafm/mp3/icecast.audio" },
    { name: "Radio Bio Bio, Chile", frequency: 98.9, stream: "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio" },
    { name: "Radio El Carbón, Lota, Chile", frequency: 99.1, stream: "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio" },
  ],
  3: [ // Podcasts
    { name: "Emisora por configurar", frequency: 100.0, stream: "" }
  ],
  4: [ // Lo-Fi / Ambient
    { name: "Radio SomaFM Groove Salad, SF, EE.UU", frequency: 96.2, stream: "https://ice5.somafm.com/groovesalad-128-mp3" },
    { name: "Radio SomaFM Drone Zone, SF, EE.UU.", frequency: 96.5, stream: "https://ice5.somafm.com/dronezone-128-mp3" },
    { name: "Radio Swiss Jazz, Basilea, Suiza", frequency: 96.9, stream: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
  ],
  5: [ // Miscelánea
    { name: "Radio Always Elvis, Randers, Denmark", frequency: 97.3, stream: "https://radioserver.dk/alwayselvisradio" },
    { name: "Radio Italia anni 60, Milán, Italia", frequency: 97.1, stream: "https://ice12.fluidstream.net/ria60_mi.aac" },
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
