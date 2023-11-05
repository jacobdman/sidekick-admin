import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQujDKKCavRDkMwq8aQabWSd-rf4Yt8k",
  authDomain: "sidekick-8df83.firebaseapp.com",
  projectId: "sidekick-8df83",
  storageBucket: "sidekick-8df83.appspot.com",
  messagingSenderId: "1075680576009",
  appId: "1:1075680576009:web:08b7d5fdae0cd2c8c86ed8",
  measurementId: "G-RF4923HBSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
