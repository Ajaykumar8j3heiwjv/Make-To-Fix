import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG9QRLin4Sxvy5_Z-aI_th_yixKhR7Z54",
  authDomain: "login-signup-rr.firebaseapp.com",
  projectId: "login-signup-rr",
  storageBucket: "login-signup-rr.firebasestorage.app",
  messagingSenderId: "200190136919",
  appId: "1:200190136919:web:9ea98832eb2d81bcf10912",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

// Submit button
const signup = document.getElementById("signup");

console.error(signup);


signup.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const username = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check for empty fields
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, username, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User registered: ", user);
      alert("Creating Account...");

      // Redirect to success page
      window.location.href = "success_page.html"; // Redirect here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
