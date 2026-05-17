function reply(){
    let input = document.getElementById("input").value;

    if(input.includes("fever")){
        output.innerText = "Take rest and drink water";
    }else{
        output.innerText = "Consult doctor";
    }
}