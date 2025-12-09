import '../styles/globals.css';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, u => {
      setUser(u ? { uid: u.uid, email: u.email } : null);
    });
  }, []);

  const signOutUser = async () => {
    try { await signOut(auth); } catch(e) {}
  };

  return (
    <>
      <Header user={user} onSignOut={signOutUser} />
      <main style={{ padding: 20 }}>
        <Component {...pageProps} user={user} />
      </main>
    </>
  );
}
