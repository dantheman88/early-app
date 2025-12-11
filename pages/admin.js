import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ADMIN_EMAIL = "dannymcmullan6@gmail.com"; // Change if needed

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
        setIsAdmin(u.email === ADMIN_EMAIL);
      }
    });
    return () => unsub();
  }, [router]);

  if (!user) return null;

  return (
    <div className="page-inner">
      <div className="card-glass">
        <h1 className="page-title">Admin Console</h1>
        <p className="page-subtitle">
          Private control panel for managing early users and features.
        </p>

        {!isAdmin ? (
          <div className="section">
            <p className="text-muted">
              This account is not marked as admin.
            </p>
          </div>
        ) : (
          <>
            <div className="section">
              <div className="section-title">Quick Stats (placeholder)</div>
              <div className="badge-list">
                <span className="badge">Users: Coming soon</span>
                <span className="badge">Active sessions: Coming soon</span>
                <span className="badge">Revenue: Coming soon</span>
              </div>
            </div>

            <div className="section">
              <div className="section-title">Admin Tools</div>
              <div className="btn-row" style={{ marginTop: "1rem" }}>
                <button className="btn btn-secondary">Pause earnings</button>
                <button className="btn btn-secondary">Broadcast update</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
