import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [toggles, setToggles] = useState({
    emailUpdates: true,
    notifications: true,
    experimentalUi: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) router.push("/login");
      else setUser(u);
    });
    return () => unsub();
  }, [router]);

  if (!user) return null;

  const toggle = (key) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="page-inner">
      <div className="card-glass">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Personalize your Early App experience</p>

        <div className="section">
          <div className="section-title">Notifications</div>

          <div className="toggle-row">
            <div>
              <div className="toggle-label">Email updates</div>
              <div className="text-muted">Get product and earnings updates</div>
            </div>
            <button
              className={`toggle-pill ${toggles.emailUpdates ? "on" : ""}`}
              onClick={() => toggle("emailUpdates")}
            >
              <span className="toggle-thumb" />
            </button>
          </div>

          <div className="toggle-row">
            <div>
              <div className="toggle-label">Push notifications</div>
              <div className="text-muted">Alerts & new opportunities</div>
            </div>
            <button
              className={`toggle-pill ${toggles.notifications ? "on" : ""}`}
              onClick={() => toggle("notifications")}
            >
              <span className="toggle-thumb" />
            </button>
          </div>

          <div className="toggle-row">
            <div>
              <div className="toggle-label">Experimental UI</div>
              <div className="text-muted">Try unreleased design features</div>
            </div>
            <button
              className={`toggle-pill ${toggles.experimentalUi ? "on" : ""}`}
              onClick={() => toggle("experimentalUi")}
            >
              <span className="toggle-thumb" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
