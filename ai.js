function reply(){
    let input = document.getElementById("input").value.toLowerCase();
    let output = document.getElementById("output");

    if(input.includes("fever")){
        output.innerText = "Take paracetamol + rest + hydration";
    }
    else if(input.includes("headache")){
        output.innerText = "Drink water and rest. If severe consult doctor.";
    }
    else{
        output.innerText = "Please consult a doctor for proper advice.";
    }
}