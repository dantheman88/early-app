import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return () => unsub();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const goHome = () => router.push("/");

  return (
    <header className="app-header">
      <div className="app-header-inner">
        <button onClick={goHome} className="app-logo btn-ghost" type="button">
          <span className="app-logo-pill" />
          <div>
            <div className="app-header-title">Early App</div>
            <div className="app-header-sub">earn earlier · smarter</div>
          </div>
        </button>

        <div className="app-header-right">
          {user ? (
            <>
              <div className="app-header-user">{user.email}</div>
              <button className="btn btn-secondary" onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="btn btn-secondary"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
