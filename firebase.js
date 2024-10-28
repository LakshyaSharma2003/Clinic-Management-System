// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_OWJd63Mv1EY4UFokr_ffjb4RbHkEDN8",
  authDomain: "clinic-management-system-24bde.firebaseapp.com",
  projectId: "clinic-management-system-24bde",
  storageBucket: "clinic-management-system-24bde.appspot.com",
  messagingSenderId: "705929892371",
  appId: "1:705929892371:web:7e95ccfa6124f1d56b65e6",
  measurementId: "G-S7VTLEBZK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);