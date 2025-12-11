import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";

export default function ResetPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetUserPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h1>Reset Password</h1>

      {message && <p>{message}</p>}

      <form onSubmit={resetUserPassword} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{ padding: 10 }}
        />

        <button type="submit" style={{ padding: 12, background: "black", color: "white" }}>
          Reset Password
        </button>
      </form>

      <p style={{ marginTop: 20 }}>
        <Link href="/login">Back to Login</Link>
      </p>
    </div>
  );
}
