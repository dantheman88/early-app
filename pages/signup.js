import { useState } from "react";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function SignupPage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [strength, setStrength] = useState("weak");
  const [showPassword, setShowPassword] = useState(false);

  const calcStrength = (pw) => {
    if (pw.length < 6) return "weak";
    if (pw.length < 10) return "medium";
    return "strong";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: username });

      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase:", "").trim());
    }
  };

  const googleSignup = async () => {
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
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join Early App</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          />

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
              onChange={(e) => setStrength(calcStrength(e.target.value))}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showToggle}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Password Strength Bar */}
          <div style={{
            height: "6px",
            borderRadius: "6px",
            marginBottom: "12px",
            background:
              strength === "weak" ? "#ff6b6b" :
              strength === "medium" ? "#fbbf24" :
              "#4ade80"
          }} />

          <button className="btn btn-primary">Create Account</button>
        </form>

        <button onClick={googleSignup} className="btn btn-google">
          Sign up with Google
        </button>

        <p style={styles.altText}>
          Already have an account? <a href="/login">Sign in</a>
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
    borderRadius: "8px",
    marginBottom: "12px",
    color: "#ff8c8c",
  },
  showToggle: {
    position: "absolute",
    right: "12px",
    top: "14px",
    fontSize: "14px",
    color: "#7ec8ff",
    cursor: "pointer",
  },
  altText: {
    marginTop: "15px",
    color: "#c7d2e0",
  },
};
