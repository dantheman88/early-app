import { useState } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);

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

  const googleLogin = async () => {
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

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-sub">Login to continue</p>

        {error && <p className="error-box">{error}</p>}

        <form onSubmit={handleLogin}>
          <input name="email" type="email" className="auth-input" placeholder="Email" required />

          <div>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              className="auth-input"
              placeholder="Password"
              required
            />
            <div
              className="password-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </div>
          </div>

          <button type="submit" className="auth-btn" disabled={busy}>
            {busy ? "Loading..." : "Login"}
          </button>
        </form>

        <button className="google-btn" onClick={googleLogin}>
          Continue with Google
        </button>

        <div className="link-row">
          <a href="/signup">Don't have an account? Create one</a>
        </div>
      </div>
    </div>
  );
}
