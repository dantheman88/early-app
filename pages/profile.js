import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: 40 }}>Loading...</p>;
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  // Auto-generate avatar if Google photo doesn't exist
  const avatar =
    user.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.displayName || user.email
    )}&rounded=true&background=0A84FF&color=fff`;

  return (
    <div style={styles.page}>
      <div className="glow"></div>

      <div className="container fade-in">
        <div className="card" style={styles.card}>
          
          {/* AVATAR */}
          <img src={avatar} alt="avatar" style={styles.avatar} />

          {/* USERNAME */}
          <h1 style={styles.name}>
            {user.displayName || "User"}
          </h1>

          {/* EMAIL */}
          <p style={styles.email}>{user.email}</p>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Your Status</h2>
            <div style={styles.tag}>Early Tester</div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Activity Snapshot</h2>

            <div style={styles.statBox}>
              <p style={styles.statLabel}>Invites Used</p>
              <p style={styles.statValue}>0 / 5</p>
            </div>

            <div style={styles.statBox}>
              <p style={styles.statLabel}>Earnings</p>
              <p style={styles.statValue}>Coming soon</p>
            </div>

            <div style={styles.statBox}>
              <p style={styles.statLabel}>Account Age</p>
              <p style={styles.statValue}>
                {new Date(user.metadata.creationTime).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* SIGN OUT */}
          <button
            className="btn btn-dark"
            style={styles.signOut}
            onClick={() => signOut(auth).then(() => router.push("/"))}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    paddingTop: "40px",
  },

  card: {
    textAlign: "center",
    padding: "30px",
  },

  avatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    marginBottom: "15px",
    border: "3px solid rgba(0,200,255,0.5)",
    boxShadow: "0 0 20px rgba(0,200,255,0.3)",
  },

  name: {
    fontSize: "26px",
    fontWeight: "700",
    color: "white",
  },

  email: {
    marginTop: "4px",
    color: "#b8c4d8",
    marginBottom: "18px",
  },

  section: {
    textAlign: "left",
    marginTop: "25px",
  },

  sectionTitle: {
    fontSize: "20px",
    marginBottom: "8px",
    fontWeight: "600",
  },

  tag: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "12px",
    background: "rgba(0,150,255,0.35)",
    color: "white",
    fontWeight: "600",
  },

  statBox: {
    background: "rgba(255,255,255,0.06)",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  statLabel: {
    fontSize: "14px",
    color: "#c7d2e0",
  },

  statValue: {
    fontSize: "17px",
    fontWeight: "600",
    marginTop: "4px",
  },

  signOut: {
    marginTop: "30px",
  },
};
