// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your new Firebase project's configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwl7VYVmxNf_LWtPUqIYFPa12CSigt8M",
  authDomain: "olx-junaid.firebaseapp.com",
  projectId: "olx-junaid",
  storageBucket: "olx-junaid.appspot.com",
  messagingSenderId: "847020557319",
  appId: "1:847020557319:web:6fad4fddc76f14b87c56a2",
  measurementId: "G-5HDS73RK20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const storage = getStorage(app); // Firebase Storage
export const db = getFirestore(app); // Firestore Database
