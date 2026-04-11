let lang = localStorage.getItem("lang") || "en";

window.onload = function() {

    fetch("translations.json")
        .then(res => res.json())
        .then(data => {

            // ===== UI TEXT =====
            document.getElementById("title").innerText = data.ui.title[lang];
            document.querySelectorAll("label")[0].innerText = data.ui.body[lang];
            document.querySelectorAll("label")[1].innerText = data.ui.symptom[lang];
            document.querySelectorAll("label")[2].innerText = data.ui.pain[lang];
            document.querySelectorAll("label")[3].innerText = data.ui.duration[lang];
            document.querySelectorAll("label")[4].innerText = data.ui.notes[lang];

            document.querySelector("button[type='submit']").innerText = data.ui.submit[lang];

            // ===== PLACEHOLDERS =====
            document.querySelector("[onclick*='bodyDropdown']").innerText = data.ui.selectBody[lang];
            document.querySelector("[onclick*='symptomDropdown']").innerText = data.ui.selectSymptom[lang];

            // ===== BODY DROPDOWN =====
            let bodyDrop = document.getElementById("bodyDropdown");
            bodyDrop.innerHTML = "";

            Object.keys(data.body).forEach(k => {
                let div = document.createElement("div");
                div.innerText = data.body[k][lang];

                div.onclick = () => {
                    document.querySelector("[onclick*='bodyDropdown']").innerText = div.innerText;
                    document.getElementById("bodyInput").value = data.body[k].en;
                    bodyDrop.style.display = "none";
                };

                bodyDrop.appendChild(div);
            });

            // ===== SYMPTOM =====
            let symDrop = document.getElementById("symptomDropdown");
            symDrop.innerHTML = "";

            Object.keys(data.symptom).forEach(k => {
                let div = document.createElement("div");
                div.innerText = data.symptom[k][lang];

                div.onclick = () => {
                    document.querySelector("[onclick*='symptomDropdown']").innerText = div.innerText;
                    document.getElementById("symptomInput").value = data.symptom[k].en;
                    symDrop.style.display = "none";
                };

                symDrop.appendChild(div);
            });

            // ===== DURATION =====
            let durationSelect = document.getElementById("durationSelect");
            durationSelect.innerHTML = "";

            Object.keys(data.ui.durationOptions).forEach(key => {
                let option = document.createElement("option");

                option.value = key; // English value (for backend)
                option.textContent = data.ui.durationOptions[key][lang];

                durationSelect.appendChild(option);
            });
        });

};



// DROPDOWN
function toggleDropdown(id) {
    let el = document.getElementById(id);
    el.style.display = el.style.display === "block" ? "none" : "block";
}
// ===== VOICE INPUT =====
function startVoice() {

    const btn = document.querySelector(".mic-btn");

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
        alert("Use Chrome browser");
        return;
    }

    const r = new SR();

    btn.classList.add("recording");

    r.lang = lang + "-IN";
    r.start();

    r.onresult = e => {
        document.getElementById("notes").value = e.results[0][0].transcript;
        btn.classList.remove("recording");
    };

    r.onerror = () => {
        btn.classList.remove("recording");
    };
}


// ===== FILE TRANSLATION =====
async function handleFile() {

    let f = document.getElementById("fileInput").files[0];

    if (!f) {
        alert("Upload file first");
        return;
    }

    let text = await f.text();

    translateText(text);
}


// ===== GOOGLE TRANSLATE =====
async function translateText(text) {

    const map = {
        en: "en",
        hi: "hi",
        ta: "ta",
        te: "te",
        bn: "bn",
        kn: "kn",
        kok: "gom"
    };

    let target = map[lang];

    let res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target}&dt=t&q=${encodeURIComponent(text)}`
    );

    let data = await res.json();

    let output = data[0].map(x => x[0]).join("");

    document.getElementById("translatedText").value = output;
}