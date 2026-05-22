/* =========================
   MODULE AUDIO SYSTEM
========================= */

const playButtons = document.querySelectorAll(".module-play");

playButtons.forEach((button) => {

    const card = button.closest(".module-card");

    const audio = card.querySelector(".module-audio");

    const icon = button.querySelector(".play-icon");

    button.addEventListener("click", () => {

        // STOP OTHER TRACKS

        document.querySelectorAll(".module-audio")
            .forEach((track) => {

                if (track !== audio) {

                    track.pause();
                    track.currentTime = 0;
                }
            });

        // RESET OTHER BUTTONS

        document.querySelectorAll(".module-play")
            .forEach((btn) => {

                btn.classList.remove("active");

                btn.querySelector(".play-icon").innerHTML = `
                    <path
                        d="M8 5V19L19 12L8 5Z"
                        fill="currentColor"
                    />
                `;
            });

        // PLAY / PAUSE

        if (audio.paused) {

            audio.play();

            button.classList.add("active");

            // PAUSE ICON

            icon.innerHTML = `
                <rect
                    x="7"
                    y="5"
                    width="3"
                    height="14"
                    rx="1"
                    fill="currentColor"
                />

                <rect
                    x="14"
                    y="5"
                    width="3"
                    height="14"
                    rx="1"
                    fill="currentColor"
                />
            `;

        } else {

            audio.pause();

            button.classList.remove("active");

            // PLAY ICON

            icon.innerHTML = `
                <path
                    d="M8 5V19L19 12L8 5Z"
                    fill="currentColor"
                />
            `;
        }
    });
});

