import { useState } from "react";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Signup() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [busy, setBusy] = useState(false);

  const checkStrength = (password) => {
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);

    const username = e.target.username.value.trim();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCred.user, { displayName: username });

      await sendEmailVerification(userCred.user);

      router.push("/");
    } catch (err) {
      setError(err.message);
    }

    setBusy(false);
  };

  const googleSignup = async () => {
    try {
      setBusy(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
    setBusy(false);
  };

  const onPasswordChange = (value) => {
    setPasswordStrength(checkStrength(value));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-sub">Join our community of early users</p>

        {error && <p className="error-box">{error}</p>}

        <form onSubmit={handleSignup}>
          <input name="username" type="text" className="auth-input" placeholder="Username" required />

          <input name="email" type="email" className="auth-input" placeholder="Email" required />

          {/* Password Field */}
          <div>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              className="auth-input"
              placeholder="Password"
              onChange={(e) => onPasswordChange(e.target.value)}
              required
            />
            <div
              className="password-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </div>
          </div>

          {/* Strength Meter */}
          <div
            className="password-strength"
            style={{
              background:
                passwordStrength === "weak"
                  ? "#f87171"
                  : passwordStrength === "medium"
                  ? "#fbbf24"
                  : "#4ade80",
            }}
          />

          <button type="submit" className="auth-btn" disabled={busy}>
            {busy ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <button className="google-btn" onClick={googleSignup}>
          Continue with Google
        </button>

        <div className="link-row">
          <a href="/login">Already have an account? Sign in</a>
        </div>
      </div>
    </div>
  );
}
