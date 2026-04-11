const STATIONS = [
    { name: "Radio Klassik Stephansdom, Viena, Austria", frequency: 88.1, stream: "https://radioklassikstephansdom.ice.infomaniak.ch/radioklassikstephansdom.mp3" },
    { name: "Radio Sacred Music, Iowa, EE.UU.", frequency: 88.3, stream: "https://das-edge15-live365-dal02.cdnstream.com/a39922" },
    { name: "Radio Swiss Classic, Basilea, Suiza", frequency: 88.5, stream: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128" },
    { name: "CapRadio Music, Sacramento CA, EE.UU.", frequency: 88.9, stream: "https://18433.live.streamtheworld.com/KXPRAAC.aac" },
    { name: "Radio Classical Music, Moscú, Rusia", frequency: 89.1, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/38" }, 
    { name: "Classic FM, Londres, Reino Unido", frequency: 89.4, stream: "https://media-ice.musicradio.com/ClassicFMMP3" },
    { name: "0R - Piano Classical, Berlin, Germany", frequency: 89.6, stream: "https://0nlineradio.radioho.st/classical-classical-piano?ref=radio-browser26" },
    { name: "0R - Bach Classical, Renania, Alemania", frequency: 89.8, stream: "https://0nlineradio.radioho.st/0r-bach?ref=radio-browser26" },
    { name: "100 Greatest Classical Music, 	Ontario, Canada", frequency: 90.1, stream: "https://az1.mediacp.eu/listen/100greatestclassicalmusic/radio.mp3" },
    { name: "Classical Radio International, Londres, Reino Unido", frequency: 90.3, stream: "https://ec3.yesstreaming.net:3625/stream" },
    { name: "Pop Classical Music, Moscú, Rusia", frequency: 90.5, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/97" },
    { name: "Classical Calm by King FM, Seattle, Estados Unidos", frequency: 90.7, stream: "https://classicalking.streamguys1.com/evergreen-aac-128k" },
    { name: "Classical 90.3, Shanghái, China", frequency: 90.9, stream: "https://lhttp.qingting.fm/live/267/64k.mp3" },
    { name: "KUSC Classical FM 91.1, Los Ángeles, Estados Unidos", frequency: 91.1, stream: "https://23023.live.streamtheworld.com/KUSCMP96_SC" },
    { name: "Splash - Classical, Zaragoza, España", frequency: 91.3, stream: "https://ais-sa2.cdnstream1.com/2208_128.mp3" },
    { name: "Radio SomaFM Groove Salad, SF, EE.UU", frequency: 96.2, stream: "https://ice5.somafm.com/groovesalad-128-mp3" },
    { name: "Radio SomaFM Drone Zone, SF, EE.UU.", frequency: 96.5, stream: "https://ice5.somafm.com/dronezone-128-mp3" },
    { name: "Chinese Classical Music, Beijing, Republic of China.", frequency: 96.7, stream: "https://radio.chinesemusicworld.com/chinesemusic.mp3" },
    { name: "Radio Swiss Jazz, Basilea, Suiza", frequency: 96.9, stream: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
    { name: "Radio Italia anni 60, Milán, Italia", frequency: 97.1, stream: "https://ice12.fluidstream.net/ria60_mi.aac" },
    { name: "Radio Always Elvis, Randers, Denmark", frequency: 97.3, stream: "https://radioserver.dk/alwayselvisradio" },
    { name: "Radio Ennio Morricone, Moscú, Rusia", frequency: 97.5, stream: "https://pub0202.101.ru:8443/stream/pro/aac/64/395" },
    { name: "Radio EBS | Movie Soundtracks, Romania", frequency: 97.9, stream: "https://azura.ebsmedia.ro/listen/movies/movies128.mp3" },
    { name: "Radio Movie Soundtracks Hits, EE.UU.", frequency: 98.1, stream: "https://strm112.1.fm/moviesoundtracks_mobile_mp3" },
    { name: "BBC World Service, Londres, Reino Unido", frequency: 98.3, stream: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
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
