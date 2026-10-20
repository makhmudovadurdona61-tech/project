// ─── RM Korean — Firebase sozlamalari ────────────────────────
// GOOGLE BILAN KIRISH UCHUN:
// 1. console.firebase.google.com → yangi loyiha yarating (masalan: learnenglish)
// 2. Build → Authentication → Sign-in method → Google → Enable
// 3. Project Settings (⚙️) → General → "Your apps" → Web app (</>) qo'shing
// 4. Berilgan firebaseConfig ni pastga ko'chiring.
// 5. Authentication → Settings → Authorized domains → saytingiz domeni borligini tekshiring
//    (localhost test uchun avtomatik ruxsat etilgan).
// Config kiritilmasa — sayt DEMO rejimda (localStorage) ishlayveradi.

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBeeR0e9D5bxAJzxv_I8QBFih-5atP0dsk",
  authDomain: "learnenglish-3f6d5.firebaseapp.com",
  projectId: "learnenglish-3f6d5",
  storageBucket: "learnenglish-3f6d5.firebasestorage.app",
  messagingSenderId: "837370374928",
  appId: "1:837370374928:web:b4cbff355ab6327e269395",
  measurementId: "G-Z6W5DYJG8D",
};

const configured =
  firebaseConfig.apiKey &&
  !String(firebaseConfig.apiKey).includes("YOUR_");

let app = null;
let auth = null;
let googleProvider = null;

if (configured) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
}

export { app, auth, googleProvider };
export const isFirebaseReady = configured;

// Google popup orqali kirish → { name, email, photo }
export async function loginWithGoogle() {
  if (!auth || !googleProvider) {
    throw new Error("Firebase sozlanmagan. Avval firebaseConfig ni to'ldiring (src/firebase.js).");
  }
  const res = await signInWithPopup(auth, googleProvider);
  return {
    name: res.user.displayName || "Google User",
    email: res.user.email,
    photo: res.user.photoURL || null,
  };
}

export async function logoutGoogle() {
  if (auth) { try { await signOut(auth); } catch {} }
}

// Firestore ni keyin ulash uchun (hozir localStorage ishlatiladi):
// import { getFirestore } from "firebase/firestore";
// export const db = configured ? getFirestore(app) : null;
export const db = null;
