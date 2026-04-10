let lang = localStorage.getItem("lang") || "en";

const labels = {
    en: {
        title: "Enter Symptoms",
        body: "Body Part",
        symptom: "Symptom",
        pain: "Pain Level",
        duration: "Duration",
        notes: "Notes",
        submit: "Generate Summary",
        durations: [{ d: "1 Day", v: "1 Day" }, { d: "3 Days", v: "3 Days" }, { d: "1 Week", v: "1 Week" }]
    },
    hi: {
        title: "लक्षण दर्ज करें",
        body: "शरीर का भाग",
        symptom: "लक्षण",
        pain: "दर्द स्तर",
        duration: "अवधि",
        notes: "टिप्पणी",
        submit: "रिपोर्ट बनाएं",
        durations: [{ d: "1 दिन", v: "1 Day" }, { d: "3 दिन", v: "3 Days" }, { d: "1 सप्ताह", v: "1 Week" }]
    },
    ta: {
        title: "அறிகுறிகள் உள்ளிடவும்",
        body: "உடல் பகுதி",
        symptom: "அறிகுறி",
        pain: "வலி நிலை",
        duration: "கால அளவு",
        notes: "குறிப்புகள்",
        submit: "சுருக்கம் உருவாக்கு",
        durations: [{ d: "1 நாள்", v: "1 Day" }, { d: "3 நாட்கள்", v: "3 Days" }, { d: "1 வாரம்", v: "1 Week" }]
    },
    te: {
        title: "లక్షణాలు నమోదు చేయండి",
        body: "శరీర భాగం",
        symptom: "లక్షణం",
        pain: "నొప్పి స్థాయి",
        duration: "వ్యవధి",
        notes: "గమనికలు",
        submit: "రిపోర్ట్ సృష్టించండి",
        durations: [{ d: "1 రోజు", v: "1 Day" }, { d: "3 రోజులు", v: "3 Days" }, { d: "1 వారం", v: "1 Week" }]
    },
    bn: {
        title: "লক্ষণ লিখুন",
        body: "শরীরের অংশ",
        symptom: "লক্ষণ",
        pain: "ব্যথার মাত্রা",
        duration: "সময়কাল",
        notes: "মন্তব্য",
        submit: "রিপোর্ট তৈরি করুন",
        durations: [{ d: "১ দিন", v: "1 Day" }, { d: "৩ দিন", v: "3 Days" }, { d: "১ সপ্তাহ", v: "1 Week" }]
    },
    kn: {
        title: "ಲಕ್ಷಣಗಳನ್ನು ನಮೂದಿಸಿ",
        body: "ದೇಹದ ಭಾಗ",
        symptom: "ಲಕ್ಷಣ",
        pain: "ನೋವು ಮಟ್ಟ",
        duration: "ಅವಧಿ",
        notes: "ಟಿಪ್ಪಣಿ",
        submit: "ವರದಿ ರಚಿಸಿ",
        durations: [{ d: "1 ದಿನ", v: "1 Day" }, { d: "3 ದಿನ", v: "3 Days" }, { d: "1 ವಾರ", v: "1 Week" }]
    },
    kok: {
        title: "लक्षण भरात",
        body: "शरीर भाग",
        symptom: "लक्षण",
        pain: "दुखपातळी",
        duration: "कालावधी",
        notes: "टिप्पणी",
        submit: "अहवाल तयार कर",
        durations: [{ d: "1 दिस", v: "1 Day" }, { d: "3 दिस", v: "3 Days" }, { d: "1 आठवडो", v: "1 Week" }]
    }
};

window.onload = function() {

    let t = labels[lang];

    document.getElementById("title").innerText = t.title;
    document.getElementById("label-body").innerText = t.body;
    document.getElementById("label-symptom").innerText = t.symptom;
    document.getElementById("label-pain").innerText = t.pain;
    document.getElementById("label-duration").innerText = t.duration;
    document.getElementById("label-notes").innerText = t.notes;
    document.getElementById("submit-btn").innerText = t.submit;

    fetch("translations.json")
        .then(res => res.json())
        .then(data => {
            let b = document.getElementById("bodySelect");
            let s = document.getElementById("symptomSelect");
            let d = document.getElementById("durationSelect");

            b.innerHTML = "";
            s.innerHTML = "";
            d.innerHTML = "";

            Object.keys(data.body).forEach(k => {
                let o = document.createElement("option");
                o.value = data.body[k].en;
                o.textContent = data.body[k][lang];
                b.appendChild(o);
            });

            Object.keys(data.symptom).forEach(k => {
                let o = document.createElement("option");
                o.value = data.symptom[k].en;
                o.textContent = data.symptom[k][lang];
                s.appendChild(o);
            });

            t.durations.forEach(x => {
                let o = document.createElement("option");
                o.value = x.v;
                o.textContent = x.d;
                d.appendChild(o);
            });
        });
};

/* Voice */
function startVoice() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("Use Chrome"); return; }
    const r = new SR();

    if (lang === "hi") r.lang = "hi-IN";
    else if (lang === "ta") r.lang = "ta-IN";
    else if (lang === "te") r.lang = "te-IN";
    else if (lang === "bn") r.lang = "bn-IN";
    else if (lang === "kn") r.lang = "kn-IN";
    else if (lang === "kok") r.lang = "gom-IN";
    else r.lang = "en-IN";

    r.start();
    r.onresult = e => { document.getElementById("notes").value = e.results[0][0].transcript; }
}

/* File + Translate */
async function handleFile() {
    const f = document.getElementById("fileInput").files[0];
    if (!f) { alert("Upload file"); return; }
    let text = await f.text();
    translateText(text);
}

async function translateText(text) {
    const map = { en: "en", hi: "hi", ta: "ta", te: "te", bn: "bn", kn: "kn", kok: "gom" };
    let target = map[lang];

    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target}&dt=t&q=${encodeURIComponent(text)}`);
    const data = await res.json();
    let out = data[0].map(x => x[0]).join("");

    document.getElementById("translatedText").value = out;
}