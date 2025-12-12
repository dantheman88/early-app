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
