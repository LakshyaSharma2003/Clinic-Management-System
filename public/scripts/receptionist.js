// public/scripts/receptionist.js
import { db } from "../firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

const patientForm = document.getElementById('patientForm');
const patientList = document.getElementById('patient-list');
const patientsCollection = collection(db, "patients");

patientForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const patientName = document.getElementById('patientName').value;
    const tokenNumber = Date.now(); // Simple token generation

    await addDoc(patientsCollection, {
        name: patientName,
        token: tokenNumber,
        date: new Date()
    });

    alert('Patient added successfully with token: ' + tokenNumber);
    patientForm.reset();
    fetchPatients();
});

async function fetchPatients() {
    const snapshot = await getDocs(patientsCollection);
    patientList.innerHTML = '';
    snapshot.forEach(doc => {
        const patient = doc.data();
        patientList.innerHTML += `<div class="patient">
            <h3>${patient.name}</h3>
            <p>Token: ${patient.token}</p>
            <p>Date: ${patient.date.toDate().toLocaleString()}</p>
        </div>`;
    });
}

fetchPatients();
