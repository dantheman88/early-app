import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "/"; // go to homepage
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h1>Create Account</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={signupUser} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
          Sign Up
        </button>
      </form>

      <p style={{ marginTop: 20 }}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
