import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
    });
    return () => unsub();
  }, []);

  const go = (path) => router.push(path);

  return (
    <div className="page-inner">
      <div className="card">
        <h1 className="page-title">
          {user ? "Welcome back 👋" : "Welcome to Early App"}
        </h1>
        <p className="page-subtitle">
          A modern place to get in early on opportunities and ideas.
        </p>

        <div className="section">
          <span className="pill">
            ⚡ Early access • Private preview
          </span>
          <div className="badge-list">
            <span className="badge">Zero noise</span>
            <span className="badge">Curated drops</span>
            <span className="badge">Built for mobile</span>
          </div>
        </div>

        <div className="section">
          <div className="btn-row">
            <button
              className="btn btn-primary"
              onClick={() => go(user ? "/profile" : "/login")}
            >
              {user ? "View your profile" : "Get started"}
            </button>
            <button className="btn btn-secondary" onClick={() => go("/settings")}>
              Personalize app
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-grid section">
        <div className="card-glass">
          <h2 className="section-title">Today&apos;s snapshot</h2>
          <p className="text-muted">
            This will later show your earnings, invites, and streaks. For now,
            it&apos;s a stylish placeholder while we build the core engine.
          </p>
          <div className="divider" />
          <div className="badge-list">
            <span className="badge">Earnings: coming soon</span>
            <span className="badge">Invites: 0 / 5 used</span>
            <span className="badge">Status: Early tester</span>
          </div>
        </div>

        <div className="card-glass">
          <h2 className="section-title">What you get for being early</h2>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              fontSize: "0.86rem",
              color: "#9ca3af",
            }}
          >
            <li>• Priority access to new features</li>
            <li>• Better rewards for your first users</li>
            <li>• Direct line to the builder (you!)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
