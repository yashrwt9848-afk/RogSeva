function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user=="admin" && pass=="123"){
        alert("Login Success");
    }else{
        alert("Wrong");
    }
}