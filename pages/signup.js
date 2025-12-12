import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.push("/profile");
    } catch (err) {
      console.error(err);
      setError("Could not create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h1 style={styles.title}>Create your Early App account</h1>
          <p style={styles.subtitle}>
            Join the private preview and lock in early rewards.
          </p>
        </div>

        <form onSubmit={handleSignup} style={styles.form}>
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
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 characters"
              required
            />
          </label>

          <label style={styles.label}>
            Confirm password
            <input
              style={styles.input}
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Repeat your password"
              required
            />
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
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link href="/login" legacyBehavior>
            <a style={styles.link}>Log in</a>
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
    maxWidth: "440px",
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
    fontSize: "20px",
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
