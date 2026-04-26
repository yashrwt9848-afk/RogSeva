const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function signup(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email,password)
  .then(()=>alert("Signup Success"))
  .catch(err=>alert(err.message));
}

function login(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
  .then(()=>{
    alert("Login Success");
    window.location.href="index.html";
  })
  .catch(err=>alert(err.message));
}

function saveProfile(){
  let user = auth.currentUser;

  if(!user){
    alert("Login first");
    return;
  }

  db.collection("users").doc(user.uid).set({
    email: user.email,
    lastLogin: new Date()
  });

  alert("Profile Saved");
}