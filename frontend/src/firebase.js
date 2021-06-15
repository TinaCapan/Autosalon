import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCPSrU61T0uCDm39-0LEYFlW-JTZUbFsNE",
  authDomain: "autosalon-974b9.firebaseapp.com",
  databaseURL: "https://autosalon-974b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autosalon-974b9",
  storageBucket: "autosalon-974b9.appspot.com",
  messagingSenderId: "765399449036",
  appId: "1:765399449036:web:67b9fbd365430a358b7169",
  measurementId: "G-PDCE5S4YHY"
}
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore() 
