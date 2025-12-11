import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, [router]);

  if (!user) return null;

  return (
    <div className="page-inner">
      <div className="card">
        <h1 className="page-title">Your Profile</h1>
        <p className="page-subtitle">Your early tester identity</p>

        <div className="section">
          <div className="section-title">Account</div>
          <p className="text-muted">Email</p>
          <p>{user.email}</p>
        </div>

        <div className="section">
          <div className="section-title">Your Status</div>
          <p className="text-muted">
            You
