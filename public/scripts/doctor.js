// public/scripts/doctor.js
import { db } from "../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";

const patientList = document.getElementById('patient-list');
const patientsCollection = collection(db, "patients");

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
