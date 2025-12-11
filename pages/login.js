import { useState } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // EMAIL LOGIN
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }

    setBusy(false);
  };

  // GOOGLE LOGIN
  const googleLogin = async () => {
    try {
      setBusy(true);
      setError("");

      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      router.push("/");
    } catch (err) {
      setError(err.message);
    }

    setBusy(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>Login</h1>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleEmailLogin} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button} disabled={busy}>
            {busy ? "Loading..." : "Sign In"}
          </button>
        </form>

        <p style={styles.or}>──────── OR ────────</p>

        <button
          type="button"
          onClick={googleLogin}
          style={styles.googleButton}
          disabled={busy}
        >
          Sign In with Google
        </button>

        <p style={styles.linkWrap}>
          Don’t have an account?{" "}
          <a href="/signup" style={styles.link}>Create one</a>
        </p>
      </div>
    </div>
  );
}

//
// 💅 STYLES
//
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "20px"
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "700"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "12px"
  },
  button: {
    padding: "12px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  },
  googleButton: {
    width: "100%",
    padding: "12px",
    background: "#db4437",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  },
  error: {
    color: "red",
    marginBottom: "12px",
    textAlign: "center",
    fontWeight: "bold"
  },
  or: {
    textAlign: "center",
    margin: "10px 0",
    color: "#444"
  },
  linkWrap: {
    textAlign: "center",
    marginTop: "15px"
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "600"
  }
};
