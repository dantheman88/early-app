import { useState } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase:", "").trim());
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase:", "").trim());
    }
  };

  return (
    <div style={styles.page}>
      <div className="glow"></div>

      <div style={styles.card} className="card fade-in">
        <h1 style={styles.title}>Login</h1>
        <p style={styles.subtitle}>Welcome back</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showToggle}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button className="btn btn-primary">Sign In</button>
        </form>

        <button onClick={googleLogin} className="btn btn-google">
          Sign in with Google
        </button>

        <p style={styles.altText}>
          Don’t have an account?{" "}
          <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    maxWidth: "420px",
    margin: "40px auto",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#c7d2e0",
    marginBottom: "20px",
  },
  error: {
    background: "rgba(255,0,0,0.2)",
    padding: "10px",
