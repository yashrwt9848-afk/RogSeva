let isLoggedIn = false;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
});

function checkPremium(){
  if(!isLoggedIn){
    alert("🔒 Login Required");
    window.location.href="login.html";
  } else {
    window.location.href="premium.html";
  }
}