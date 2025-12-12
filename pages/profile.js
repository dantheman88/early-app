import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

export default function ProfilePage() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.subtleText}>Loading your profile…</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.title}>Profile overview</h1>
            <p style={styles.subtitle}>
              This is your early tester profile. We&apos;ll add more controls
              and analytics here soon.
            </p>
          </div>
          <button
            style={styles.signOutButton}
            onClick={() => auth.signOut().then(() => router.push("/"))}
          >
            Sign out
          </button>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionLabel}>Account</div>
          <div style={styles.fieldRow}>
            <div style={styles.fieldLabel}>Email</div>
            <div style={styles.fieldValue}>{user.email}</div>
          </div>
          <div style={styles.fieldRow}>
            <div style={styles.fieldLabel}>Status</div>
            <div style={styles.chip}>Early tester</div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionLabel}>Preview stats</div>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Earnings</div>
              <div style={styles.statValue}>Coming soon</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Invites used</div>
              <div style={styles.statValue}>0 / 5</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Streak</div>
              <div style={styles.statValue}>Preview mode</div>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionLabel}>What&apos;s next</div>
          <p style={styles.subtleText}>
            Over the next updates, this page will show your invite links,
            earnings breakdown, and personalized opportunities based on what
            you&apos;re testing. For now, enjoy being at the front of the queue.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "24px 16px",
    background:
      "radial-gradient(circle at top, #0f172a 0, #020617 45%, #000 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
    color: "#f9fafb",
  },
  card: {
    width: "100%",
    maxWidth: "720px",
    borderRadius: "26px",
    padding: "24px 22px 20px 22px",
    background: "rgba(15,23,42,0.98)",
    border: "1px solid rgba(51,65,85,0.9)",
    boxShadow: "0 26px 70px rgba(15,23,42,0.9)",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "flex-start",
    marginBottom: "18px",
  },
  title: {
    fontSize: "22px",
    margin: 0,
  },
  subtitle: {
    marginTop: "6px",
    fontSize: "13px",
    color: "#9ca3af",
  },
  signOutButton: {
    padding: "7px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(248,113,113,0.8)",
    background: "rgba(30,64,175,0.1)",
    color: "#fecaca",
    fontSize: "12px",
  },
  section: {
    marginTop: "16px",
    paddingTop: "12px",
    borderTop: "1px solid rgba(31,41,55,0.9)",
  },
  sectionLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#6b7280",
    marginBottom: "8px",
  },
  fieldRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontSize: "13px",
  },
  fieldLabel: {
    color: "#9ca3af",
  },
  fieldValue: {
    fontWeight: 500,
  },
  chip: {
    padding: "3px 10px",
    borderRadius: "999px",
    background: "rgba(59,130,246,0.18)",
    border: "1px solid rgba(59,130,246,0.6)",
    fontSize: "11px",
    color: "#bfdbfe",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "10px",
    marginTop: "6px",
  },
  statCard: {
    padding: "8px 10px",
    borderRadius: "14px",
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(31,41,55,0.9)",
  },
  statLabel: {
    fontSize: "11px",
    color: "#9ca3af",
    marginBottom: "4px",
  },
  statValue: {
    fontSize: "13px",
    fontWeight: 500,
  },
  subtleText: {
    fontSize: "13px",
    color: "#9ca3af",
  },
};
