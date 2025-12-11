import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/"; // redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h1>Login</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={loginUser} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{ padding: 10 }}
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          style={{ padding: 10 }}
        />

        <button type="submit" style={{ padding: 12, background: "black", color: "white" }}>
          Login
        </button>
      </form>

      <p style={{ marginTop: 20 }}>
        No account? <Link href="/signup">Sign Up</Link>
      </p>

      <p>
        <Link href="/reset">Forgot Password?</Link>
      </p>
    </div>
  );
}
