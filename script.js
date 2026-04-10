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
        durations: [
            { display: "1 Day", value: "1 Day" },
            { display: "3 Days", value: "3 Days" },
            { display: "1 Week", value: "1 Week" }
        ]
    },
    hi: {
        title: "लक्षण दर्ज करें",
        body: "शरीर का भाग",
        symptom: "लक्षण",
        pain: "  दर्दस्तर",
        duration: "अवधि",
        notes: "टिप्पणी",
        submit: "रिपोर्ट बनाएं",
        durations: [
            { display: "1 दिन", value: "1 Day" },
            { display: "3 दिन", value: "3 Days" },
            { display: "1 सप्ताह", value: "1 Week" }
        ]
    },
    ta: {
        title: "அறிகுறிகள் உள்ளிடவும்",
        body: "உடல் பகுதி",
        symptom: "அறிகுறி",
        pain: "வலி நிலை",
        duration: "கால அளவு",
        notes: "குறிப்புகள்",
        submit: "சுருக்கம் உருவாக்கு",
        durations: [
            { display: "1 நாள்", value: "1 Day" },
            { display: "3 நாட்கள்", value: "3 Days" },
            { display: "1 வாரம்", value: "1 Week" }
        ]
    },
    te: {
        title: "లక్షణాలు నమోదు చేయండి",
        body: "శరీర భాగం",
        symptom: "లక్షణం",
        pain: "నొప్పి స్థాయి",
        duration: "వ్యవధి",
        notes: "గమనికలు",
        submit: "రిపోర్ట్ సృష్టించండి",
        durations: [
            { display: "1 రోజు", value: "1 Day" },
            { display: "3 రోజులు", value: "3 Days" },
            { display: "1 వారం", value: "1 Week" }
        ]
    },
    bn: {
        title: "লক্ষণ লিখুন",
        body: "শরীরের অংশ",
        symptom: "লক্ষণ",
        pain: "ব্যথার মাত্রা",
        duration: "সময়কাল",
        notes: "মন্তব্য",
        submit: "রিপোর্ট তৈরি করুন",
        durations: [
            { display: "১ দিন", value: "1 Day" },
            { display: "৩ দিন", value: "3 Days" },
            { display: "১ সপ্তাহ", value: "1 Week" }
        ]
    }
};

window.onload = function() {

    let t = labels[lang];

    // Set labels
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

            let bodySelect = document.getElementById("bodySelect");
            let symptomSelect = document.getElementById("symptomSelect");
            let durationSelect = document.getElementById("durationSelect");

            // 🔥 CLEAR EVERYTHING (removes ghost "दर्द")
            bodySelect.innerHTML = "";
            symptomSelect.innerHTML = "";
            durationSelect.innerHTML = "";

            // BODY
            Object.keys(data.body).forEach(key => {
                let opt = document.createElement("option");
                opt.value = data.body[key].en;
                opt.textContent = data.body[key][lang];
                bodySelect.appendChild(opt);
            });

            // SYMPTOM
            Object.keys(data.symptom).forEach(key => {
                let opt = document.createElement("option");
                opt.value = data.symptom[key].en;
                opt.textContent = data.symptom[key][lang];
                symptomSelect.appendChild(opt);
            });

            // DURATION (UI in local language, value in English)
            t.durations.forEach(d => {
                let opt = document.createElement("option");
                opt.value = d.value;
                opt.textContent = d.display;
                durationSelect.appendChild(opt);
            });

        });

    // 🔥 EXTRA SAFETY: remove stray "दर्द" text if any

};