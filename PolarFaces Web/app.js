const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");

let isPlaying = false;

playBtn.addEventListener("click", () => {

    isPlaying = !isPlaying;

    if (isPlaying) {

        // PAUSE ICON
        playIcon.innerHTML = `
            <rect x="7" y="5" width="3" height="14" rx="1" fill="white"/>
            <rect x="14" y="5" width="3" height="14" rx="1" fill="white"/>
        `;

    } else {

        // PLAY ICON
        playIcon.innerHTML = `
            <path d="M8 5V19L19 12L8 5Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linejoin="round"/>
        `;
    }

});

const waveform = document.getElementById("waveform");

const TOTAL_BARS = 40;

let bars = [];
let wavePosition = TOTAL_BARS;

/* CREATE BARS */

for (let i = 0; i < TOTAL_BARS; i++) {

    const bar = document.createElement("div");

    bar.classList.add("bar");

    waveform.appendChild(bar);

    bars.push(bar);
}



/* WAVE UPDATE */

function updateWave() {

    bars.forEach((bar, index) => {

        const distance = Math.abs(index - wavePosition);

        const height = Math.max(8, 95 - distance * 16);

        const opacity = Math.max(0.15, 1 - distance * 0.12);

        bar.style.height = `${height}px`;

        bar.style.opacity = opacity;
    });

    // MOVE RIGHT -> LEFT

    wavePosition--;

    // RESET

    if (wavePosition < -6) {

        wavePosition = TOTAL_BARS + 6;
    }
}

/* START */

updateWave();

setInterval(updateWave, 60);

