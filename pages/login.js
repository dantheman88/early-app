import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleEmailLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.push("/profile");
    } catch (err) {
      console.error(err);
      setError("Could not sign in. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/profile");
    } catch (err) {
      console.error(err);
      setError("Google sign-in was cancelled or failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h1 style={styles.title}>Welcome back</h1>
          <p style={styles.subtitle}>Log in to access your early dashboard.</p>
        </div>

        <form onSubmit={handleEmailLogin} style={styles.form}>
          <label style={styles.label}>
            Email
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label style={styles.label}>
            Password
            <div style={styles.passwordRow}>
              <input
                style={{ ...styles.input, paddingRight: "76px" }}
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                style={styles.showPwButton}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {error && <div style={styles.error}>{error}</div>}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.primaryButton,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "default" : "pointer",
            }}
          >
            {loading ? "Signing in…" : "Login"}
          </button>
        </form>

        <div style={styles.dividerRow}>
          <span style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <span style={styles.dividerLine} />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          style={styles.googleButton}
        >
          Continue with Google
        </button>

        <p style={styles.footerText}>
          Don&apos;t have an account?{" "}
          <Link href="/signup" legacyBehavior>
            <a style={styles.link}>Create one</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px",
    background:
      "radial-gradient(circle at top, #0f172a 0, #020617 45%, #000 100%)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    borderRadius: "24px",
    padding: "24px 22px 20px 22px",
    background: "rgba(15,23,42,0.98)",
    border: "1px solid rgba(51,65,85,0.9)",
    boxShadow: "0 26px 70px rgba(15,23,42,0.9)",
    color: "#f9fafb",
  },
  cardHeader: {
    marginBottom: "18px",
  },
  title: {
    fontSize: "22px",
    margin: 0,
  },
  subtitle: {
    fontSize: "13px",
    marginTop: "6px",
    color: "#9ca3af",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    fontSize: "13px",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  input: {
    width: "100%",
    padding: "9px 10px",
    borderRadius: "12px",
    border: "1px solid rgba(55,65,81,0.9)",
    background: "#020617",
    color: "#f9fafb",
    fontSize: "14px",
    outline: "none",
  },
  passwordRow: {
    position: "relative",
  },
  showPwButton: {
    position: "absolute",
    right: "6px",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "999px",
    border: "1px solid rgba(75,85,99,0.9)",
    background: "rgba(15,23,42,0.95)",
    padding: "4px 10px",
    fontSize: "11px",
    color: "#e5e7eb",
  },
  error: {
    marginTop: "4px",
    fontSize: "12px",
    color: "#fecaca",
    background: "rgba(127,29,29,0.35)",
    borderRadius: "10px",
    padding: "6px 8px",
    border: "1px solid rgba(248,113,113,0.65)",
  },
  primaryButton: {
    marginTop: "4px",
    width: "100%",
    padding: "10px 14px",
    borderRadius: "16px",
    border: "none",
    background:
      "linear-gradient(135deg, #22c55e, #16a34a, #0f766e)",
    color: "#020617",
    fontSize: "14px",
    fontWeight: 600,
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "16px 0 10px 0",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "rgba(51,65,85,1)",
  },
  dividerText: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#6b7280",
  },
  googleButton: {
    width: "100%",
    padding: "9px 14px",
    borderRadius: "14px",
    border: "1px solid rgba(148,163,184,0.8)",
    background: "rgba(15,23,42,0.95)",
    color: "#e5e7eb",
    fontSize: "13px",
    fontWeight: 500,
  },
  footerText: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#9ca3af",
    textAlign: "center",
  },
  link: {
    color: "#93c5fd",
    textDecoration: "none",
    fontWeight: 500,
  },
};
