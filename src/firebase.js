// Import des fonctions Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Configuration Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crm-data-4ab4f.firebaseapp.com",
  projectId: "crm-data-4ab4f",
  storageBucket: "crm-data-4ab4f.appspot.com", 
  messagingSenderId: "379403468792",
  appId: "1:379403468792:web:232b5f52a45d24f3e2a00d",
  measurementId: "G-7X625PKH8D"
};

// Initialisation
const app = initializeApp(firebaseConfig);

// Initialisation Firestore
const db = getFirestore(app);

// export Firestore pour l'utiliser dans ton app React
export default db;
