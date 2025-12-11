import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

export default function HomePage() {
  const [user] = useAuthState(auth);

  return (
    <div style={styles.page}>
      {/* Glow background */}
      <div style={styles.glow} />

      {/* Top Navigation */}
      <header style={styles.nav}>
        <div>
          <div style={styles.logoRow}>
            <span style={styles.logoDot}></span>
            <span style={styles.logoText}>Early App</span>
          </div>
          <p style={styles.navSubtitle}>earn earlier · smarter</p>
        </div>

        <div>
          {user ? (
            <Link href="/profile" style={styles.navButton}>
              {user.email}
            </Link>
          ) : (
            <Link href="/login" style={styles.navButton}>Login</Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {/* HERO */}
        <section style={styles.hero}>
          <p style={styles.badge}>
            <span style={styles.badgeDot}></span>
            Early Access · Private Preview
          </p>

          <h1 style={styles.title}>
            Welcome {user ? "back" : ""}{" "}
            <span style={styles.gradient}>to Early App</span>
          </h1>

          <p style={styles.subtitle}>
            A modern place to get in early on opportunities, ideas, and rewards.
            Curated drops. Built for mobile. Zero noise.
          </p>

          <div style={styles.buttonGroup}>
            <Link
              href={user ? "/profile" : "/signup"}
              style={styles.primaryButton}
            >
              {user ? "View your profile" : "Get Started"}
            </Link>

            {!user && (
              <Link href="/login" style={styles.secondaryButton}>
                Already have an account? Login
              </Link>
            )}
          </div>
        </section>

        {/* SNAPSHOT */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Today's snapshot</h2>
          <p style={styles.textMuted}>
            This will later show earnings, invites and streaks. Placeholder while
            we build the engine.
          </p>

          <div style={styles.stats}>
            <div style={styles.statBox}>
              <p style={styles.statLabel}>Earnings</p>
              <p style={styles.statValue}>Coming soon</p>
            </div>

            <div style={styles.statBox}>
              <p style={styles.statLabel}>Invites</p>
              <p style={styles.statValue}>0 / 5 used</p>
            </div>

            <div style={styles.statBox}>
              <p style={styles.statLabel}>Status</p>
              <p style={styles.statPill}>
                {user ? "Early tester" : "Preview mode"}
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>What you get for being early</h2>

          <ul style={styles.list}>
            <li>Priority access to new features</li>
            <li>Better rewards for early adopters</li>
            <li>Direct influence over the app direction</li>
            <li>Calm experience — built to feel good, not addictive</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0a1227, #050814 70%)",
    color: "white",
    padding: "16px",
    fontFamily: "system-ui, sans-serif",
  },
  glow: {
    position: "fixed",
    inset: 0,
    background: "radial-gradient(circle at top, rgba(0,200,255,0.25), transparent)",
    pointerEvents: "none",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logoRow: { display: "flex", alignItems: "center", gap: 8 },
  logoDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "cyan",
    boxShadow: "0 0 10px cyan",
  },
  logoText: { fontWeight: "bold" },
  navSubtitle: { opacity: 0.6, fontSize: 12 },
  navButton: {
    padding: "6px 12px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.1)",
    textDecoration: "none",
    color: "white",
    fontSize: 12,
  },
  main: { maxWidth: 600, margin: "0 auto" },
  hero: { marginBottom: 30 },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: 20,
    background: "rgba(255,255,255,0.1)",
    fontSize: 12,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "lime",
  },
  title: { fontSize: 28, marginBottom: 8 },
  gradient: {
    background: "linear-gradient(90deg, cyan, violet)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  subtitle: { opacity: 0.7, fontSize: 14, marginBottom: 16 },
  buttonGroup: { display: "flex", flexDirection: "column", gap: 10 },
  primaryButton: {
    padding: "12px 18px",
    background: "cyan",
    color: "black",
    borderRadius: 30,
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
  },
  secondaryButton: {
    padding: "10px 16px",
    borderRadius: 30,
    border: "1px solid rgba(255,255,255,0.3)",
    textAlign: "center",
    textDecoration: "none",
    color: "white",
    fontSize: 13,
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    backdropFilter: "blur(10px)",
  },
  cardTitle: { fontSize: 20, marginBottom: 8 },
  textMuted: { opacity: 0.7, fontSize: 13, marginBottom: 16 },
  stats: { display: "flex", flexDirection: "column", gap: 10 },
  statBox: {
    padding: 12,
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
  },
  statLabel: { opacity: 0.6, fontSize: 12 },
  statValue: { marginTop: 4, fontSize: 14 },
  statPill: {
    marginTop: 4,
    padding: "4px 10px",
    background: "rgba(0,200,255,0.2)",
    borderRadius: 20,
    display: "inline-block",
  },
  list: { marginLeft: 16, opacity: 0.9, fontSize: 14 },
};
