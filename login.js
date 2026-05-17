function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user=="admin" && pass=="123"){
        localStorage.setItem("currentUserEmail", user);
        alert("Login Success");
        window.location.href="index.html";
    }else{
        alert("Wrong credentials");
    }
}