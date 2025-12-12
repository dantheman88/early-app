import React from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

export default function HomePage() {
  const [user, loading] = useAuthState(auth);

  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <div style={styles.brand}>
          <div style={styles.brandDot} />
          <div>
            <div style={styles.brandName}>Early App</div>
            <div style={styles.brandTag}>earn earlier · smarter</div>
          </div>
        </div>
        <div style={styles.navRight}>
          {!loading && user && (
            <span style={styles.navUser}>
              {user.email?.split("@")[0] || "Account"}
            </span>
          )}
          <Link href={user ? "/profile" : "/login"} legacyBehavior>
            <a style={styles.navLink}>{user ? "Profile" : "Login"}</a>
          </Link>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.heroCard}>
          <div style={styles.badgeRow}>
            <span style={styles.badgeDot} />
            <span style={styles.badgeText}>Early Access · Private Preview</span>
          </div>

          <h1 style={styles.heroTitle}>
            Welcome to{" "}
            <span style={styles.heroTitleAccent}>Early App</span>
          </h1>

          <p style={styles.heroSubtitle}>
            A modern place to get in early on opportunities, ideas, and rewards.
            Built for mobile. Zero noise. Clear rewards.
          </p>

          <div style={styles.heroActions}>
            <Link href={user ? "/profile" : "/signup"} legacyBehavior>
              <a style={styles.primaryButton}>
                {user ? "Go to dashboard" : "Get started free"}
              </a>
            </Link>

            {!user && (
              <Link href="/login" legacyBehavior>
                <a style={styles.secondaryButton}>Already a member? Log in</a>
              </Link>
            )}
          </div>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardLabel}>Today&apos;s snapshot</div>
            <p style={styles.cardHint}>
              This will later show your earnings, invites, and streaks. For now,
              it&apos;s a clean placeholder while we build the engine.
            </p>

            <div style={styles.metric}>
              <div style={styles.metricLabel}>Earnings</div>
              <div style={styles.metricValue}>Coming soon</div>
            </div>

            <div style={styles.metric}>
              <div style={styles.metricLabel}>Invites</div>
              <div style={styles.metricValue}>0 / 5 used</div>
            </div>

            <div style={styles.metric}>
              <div style={styles.metricLabel}>Status</div>
              <span style={styles.statusPill}>
                {user ? "Early tester" : "Preview mode"}
              </span>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardLabel}>What you get for being early</div>
            <ul style={styles.benefitsList}>
              <li style={styles.benefitItem}>
                Priority access to new features and drops
              </li>
              <li style={styles.benefitItem}>
                Better rewards for early adopters
              </li>
              <li style={styles.benefitItem}>
                Direct influence over the app direction
              </li>
              <li style={styles.benefitItem}>
                Calm experience — designed to feel good, not addictive
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    padding: "16px",
    background:
      "radial-gradient(circle at top, #101826 0, #050712 45%, #020308 100%)",
    color: "#f9fafb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
  },
  navbar: {
    maxWidth: "1040px",
    margin: "0 auto 24px auto",
    padding: "12px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background:
      "linear-gradient(120deg, rgba(15,23,42,0.85), rgba(15,23,42,0.6))",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backdropFilter: "blur(22px)",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  brandDot: {
    width: "18px",
    height: "18px",
    borderRadius: "999px",
    background:
      "radial-gradient(circle at 30% 0%, #22c55e, #22c55e 40%, #16a34a 70%, #052e16 100%)",
    boxShadow: "0 0 18px rgba(34, 197, 94, 0.65)",
  },
  brandName: {
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "0.02em",
  },
  brandTag: {
    fontSize: "11px",
    color: "#9ca3af",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  navUser: {
    fontSize: "12px",
    color: "#e5e7eb",
    opacity: 0.85,
  },
  navLink: {
    fontSize: "13px",
    color: "#e5e7eb",
    textDecoration: "none",
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(148, 163, 184, 0.55)",
    background:
      "linear-gradient(120deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))",
  },
  main: {
    maxWidth: "1040px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  heroCard: {
    borderRadius: "24px",
    padding: "24px 20px 22px 20px",
    background:
      "radial-gradient(circle at top left, rgba(59,130,246,0.4), transparent 55%)",
    border: "1px solid rgba(148, 163, 184, 0.45)",
    boxShadow: "0 26px 70px rgba(15,23,42,0.85)",
  },
  badgeRow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "3px 10px",
    borderRadius: "999px",
    background: "rgba(15,23,42,0.85)",
    border: "1px solid rgba(59,130,246,0.5)",
    marginBottom: "14px",
  },
  badgeDot: {
    width: "7px",
    height: "7px",
    borderRadius: "999px",
    background: "#22c55e",
    boxShadow: "0 0 10px rgba(34,197,94,0.7)",
  },
  badgeText: {
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#d1d5db",
  },
  heroTitle: {
    fontSize: "28px",
    lineHeight: "1.2",
    margin: "0 0 8px 0",
  },
  heroTitleAccent: {
    background:
      "linear-gradient(120deg, #38bdf8, #6366f1, #a855f7, #ec4899)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  heroSubtitle: {
    fontSize: "14px",
    color: "#cbd5f5",
    maxWidth: "560px",
    margin: "0 0 18px 0",
  },
  heroActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  primaryButton: {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "none",
    background:
      "linear-gradient(135deg, #22c55e, #16a34a, #0f766e)",
    color: "#020617",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 16px 35px rgba(34,197,94,0.55)",
  },
  secondaryButton: {
    padding: "9px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.7)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    fontSize: "13px",
    fontWeight: 500,
    textDecoration: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
    gap: "16px",
  },
  card: {
    borderRadius: "22px",
    padding: "18px 18px 16px 18px",
    background: "rgba(15,23,42,0.92)",
    border: "1px solid rgba(31,41,55,0.9)",
    boxShadow: "0 18px 45px rgba(15,23,42,0.75)",
  },
  cardLabel: {
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "6px",
  },
  cardHint: {
    fontSize: "12px",
    color: "#9ca3af",
    marginBottom: "14px",
  },
  metric: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderTop: "1px solid rgba(55,65,81,0.9)",
  },
  metricLabel: {
    fontSize: "12px",
    color: "#9ca3af",
  },
  metricValue: {
    fontSize: "13px",
    fontWeight: 500,
  },
  statusPill: {
    padding: "4px 12px",
    borderRadius: "999px",
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.6)",
    fontSize: "11px",
    color: "#bfdbfe",
  },
  benefitsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "13px",
    color: "#e5e7eb",
  },
  benefitItem: {
    position: "relative",
    paddingLeft: "18px",
  },
};
