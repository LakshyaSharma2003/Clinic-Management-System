// public/scripts/main.js
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.x/firebase-auth.js";

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (email.includes('doctor')) {
                window.location.href = 'doctor.html';
            } else if (email.includes('receptionist')) {
                window.location.href = 'receptionist.html';
            }
        })
        .catch((error) => {
            document.getElementById('error-message').textContent = error.message;
        });
});
