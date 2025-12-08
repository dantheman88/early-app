import "../styles/globals.css";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../lib/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Header from "../components/Header";
import cookie from "cookie";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async u => {
      if (u) {
        try {
          // create user doc if not exists and add referralCode
          const { doc, getDoc, setDoc } = await import('firebase/firestore');
          const { db } = await import('../lib/firebase');
          const ref = doc(db, 'users', u.uid);
          const snap = await getDoc(ref);
          if (!snap.exists()) {
            const code = (u.displayName || u.email || '').replace(/[^a-z0-9]/gi, '').toLowerCase().slice(0,6) + Math.random().toString(36).slice(2,6);
            await setDoc(ref, { email: u.email, displayName: u.displayName || null, referralCode: code, balance: 0, createdAt: new Date().toISOString() });
          }
        } catch (e) {
          console.warn('Could not create user doc:', e.message);
        }

        setUser({ uid: u.uid, email: u.email, name: u.displayName });
      } else {
        setUser(null);
      }
    });
  }, []);

  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error("Sign in failed", e);
    }
  };

  const signOutUser = async () => {
    await signOut(auth);
    document.cookie = cookie.serialize("token", "", { maxAge: -1, path: "/" });
  };

  return (
    <>
      <Header user={user} onSignOut={signOutUser} />
      <main style={{ padding: 20 }}>
        <Component {...pageProps} user={user} signIn={signIn} />
      </main>
    </>
  );
}

export default MyApp;
