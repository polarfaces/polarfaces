/* =========================
   REAL TIME CLOCKS
========================= */

function updateWorldClocks() {

    const nyc = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    const ldn = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    const col = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Bogota",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    document.getElementById("nyc-time").textContent =
        `NYC ${nyc}`;

    document.getElementById("ldn-time").textContent =
        `LDN ${ldn}`;

    document.getElementById("col-time").textContent =
        `COL ${col}`;
}

updateWorldClocks();

setInterval(updateWorldClocks, 1000);

/* =========================
   SIGNAL TERMINAL
========================= */

const signalForm =
    document.getElementById("signalForm");

const signalStatus =
    document.getElementById("signalStatus");

/* DISCORD WEBHOOK */

const WEBHOOK_URL =
    "https://discord.com/api/webhooks/1507163779014721546/vXoJg5qmYms1ci1_RN8fqttBhD0oDyxJLVeHoKNcJqti77Eq-z8vXwNKPjNltFK3ZUsp";

/* SUBMIT */

signalForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const alias =
        document.getElementById("alias").value;

    const type =
        document.getElementById("type").value;

    const message =
        document.getElementById("message").value;

    signalStatus.innerHTML =
        "TRANSMITTING SIGNAL...";

    try {

        await fetch(WEBHOOK_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                content:
                    `
╔══════════════════╗
NEW SIGNAL RECEIVED
╚══════════════════╝

ALIAS:
${alias}

TYPE:
${type}

MESSAGE:
${message}
`
            })
        });

        signalStatus.innerHTML =
            "SIGNAL DELIVERED";

        signalForm.reset();

    } catch (error) {

        signalStatus.innerHTML =
            "TRANSMISSION FAILED";
    }
});