const STATIONS = [
    { name: "Radio Klassik Stephansdom, Viena, Austria", frequency: 88.1, stream: "https://radioklassikstephansdom.ice.infomaniak.ch/radioklassikstephansdom.mp3" },
    { name: "Radio Sacred Music, Iowa, EE.UU.", frequency: 88.5, stream: "https://das-edge15-live365-dal02.cdnstream.com/a39922" },
    { name: "Radio SomaFM Groove Salad, SF, EE.UU", frequency: 88.7, stream: "https://ice5.somafm.com/groovesalad-128-mp3" },
    { name: "Radio SomaFM Drone Zone, SF, EE.UU.", frequency: 89.9, stream: "https://ice5.somafm.com/dronezone-128-mp3" },
    { name: "Radio Swiss Jazz, Basilea, Suiza", frequency: 91.5, stream: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
    { name: "Radio Italia anni 60, Milán, Italia", frequency: 92.1, stream: "https://ice12.fluidstream.net/ria60_mi.aac" },
    { name: "Radio Swiss Classic, Basilea, Suiza", frequency: 93.3, stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128" },
    { name: "Radio Ennio Morricone, Moscú, Rusia", frequency: 94.7, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/395" },
    { name: "Radio EBS | Movie Soundtracks, Romania", frequency: 94.9, stream: "https://azura.ebsmedia.ro/listen/movies/movies128.mp3" },
    { name: "Radio Hearme Movie Soundtracks, The United Kingdom", frequency: 95.1, stream: "https://radio.hearme.fm:8074/stream" },
    { name: "BBC World Service, Londres, Reino Unido", frequency: 96.3, stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
    { name: "CapRadio Music, Sacramento CA, EE.UU.", frequency: 97.5, stream: "https://18433.live.streamtheworld.com/KXPRAAC.aac" },
    { name: "Chinese Classical Music, Beijing, Republic of China.", frequency: 97.7, stream: "https://radio.chinesemusicworld.com/chinesemusic.mp3" },
    { name: "Radio Classical Music, Moscú, Rusia", frequency: 98.1, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/38" }, 
    { name: "Classic FM, Londres, Reino Unido", frequency: 98.4, stream: "https://media-ice.musicradio.com/ClassicFMMP3" },
    { name: "0R - Piano Classical, Berlin, Germany", frequency: 89.9, stream: "https://0nlineradio.radioho.st/classical-classical-piano?ref=radio-browser26" },
    { name: "0R - Bach Classical, Renania, Alemania", frequency: 99.2, stream: "https://0nlineradio.radioho.st/0r-bach?ref=radio-browser26" },
    { name: "100 Greatest Classical Music, 	Ontario, Canada", frequency: 99.5, stream: "https://az1.mediacp.eu/listen/100greatestclassicalmusic/radio.mp3" },
    
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
    
    if (playing) {
        status.textContent = "Conectando…";
        status.classList.add("loading");
        
        audio.pause();
        audio.src = STATIONS[index].stream; 
        audio.load(); 
        
        audio.play().catch(e => {
            if (e.name !== 'AbortError') {
                status.textContent = "Sin señal";
                status.classList.remove("loading");
                playing = false;
                power.classList.remove("playing");
            }
        });
    }
}

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
        updateUI();
    } else {
        playing = false;
        power.classList.remove("playing");
        audio.pause();
        audio.src = ""; 
        status.textContent = "";
        status.classList.remove("loading");
    }
};

audio.onplaying = () => {
    status.textContent = "";
    status.classList.remove("loading");
};

audio.onerror = () => {
    if (playing && audio.src !== "") {
        status.textContent = "Sin señal";
        status.classList.remove("loading");
        power.classList.remove("playing");
        playing = false;
    }
};

updateUI();
