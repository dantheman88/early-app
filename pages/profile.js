import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        setLoading(false);
      } else {
        router.push("/login");
      }
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div style={styles.loading}>
        <p style={{ fontSize: "20px", color: "#8ef" }}>Loading profile...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Profile</h1>

      <div style={styles.card}>
        <p style={styles.label}>Email</p>
        <p style={styles.value}>{user.email}</p>

        <p style={styles.label}>User ID</p>
        <p style={styles.value}>{user.uid}</p>
      </div>

      <button
        style={styles.logoutButton}
        onClick={() => {
          signOut(auth);
          router.push("/login");
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    color: "white",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0f24, #00182e, #002b45)",
  },
  title: {
    fontSize: "34px",
    fontWeight: "900",
    marginBottom: "30px",
    textShadow: "0 0 10px #00c8ff",
  },
  card: {
    margin: "0 auto",
    width: "90%",
    maxWidth: "400px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 0 20px rgba(0, 200, 255, 0.3)",
  },
  label: {
    fontSize: "14px",
    opacity: 0.7,
    marginTop: "10px",
  },
  value: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: "35px",
    padding: "12px 25px",
    background: "#00c8ff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 0 12px #00c8ff",
  },
  loading: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    background: "#000d1a",
  },
};
