function checkSymptom(){
    let input = document.getElementById("symptoms").value.toLowerCase();
    let result = document.getElementById("result");

    // multiple checks
    if(input.includes("fever") && input.includes("cough")){
        result.innerHTML = "🤒 Possible: Flu / Viral Infection <br> 💊 Advice: Rest + fluids + paracetamol";
    }
    else if(input.includes("headache") && input.includes("nausea")){
        result.innerHTML = "🤕 Possible: Migraine <br> 💊 Advice: Rest in dark room + hydration";
    }
    else if(input.includes("cough") && input.includes("cold")){
        result.innerHTML = "😷 Possible: Common Cold <br> 💊 Advice: Warm fluids + rest";
    }
    else if(input.includes("fever")){
        result.innerHTML = "🤒 Fever detected <br> 💊 Advice: Rest + fluids";
    }
    else if(input.includes("headache") || input.includes("sir dard")){
        result.innerHTML = "🤕 Headache <br> 💊 Advice: Rest + hydration";
    }
    else if(input.includes("cough")){
        result.innerHTML = "😷 Cough <br> 💊 Advice: Warm water + steam";
    }
    else{
        result.innerHTML = "⚠️ No clear match <br> 👉 Please consult a doctor";
    }
}