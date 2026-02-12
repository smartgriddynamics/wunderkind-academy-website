// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyBYOXnAQQWQNI9rFu0ZwMjNkMEdJH7SxxA",
  authDomain: "teacher-on-duty-system.firebaseapp.com",
  projectId: "teacher-on-duty-system",
  storageBucket: "teacher-on-duty-system.firebasestorage.app",
  messagingSenderId: "723640168531",
  appId: "1:723640168531:web:a52f5dac1f5502460016a6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
