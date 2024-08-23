// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIah2fOBrVuzvjJM7N2wlai-qgAD_Ujao",
    authDomain: "login-signup-ec878.firebaseapp.com",
    projectId: "login-signup-ec878",
    storageBucket: "login-signup-ec878.appspot.com",
    messagingSenderId: "56981632307",
    appId: "1:56981632307:web:4d7e6897e828e59128ba46",
    measurementId: "G-SPWCP9P8GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);



// Additional app logic here
const btn1=document.getElementById('btn')

btn1.addEventListener('click',()=>{
    if(btn1){
    const email= document.getElementById('user').value;
    const password= document.getElementById('pass').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    location.replace('welcome.html')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    
}

})
