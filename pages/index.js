import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

export default function HomePage() {
  const [user] = useAuthState(auth);

  return (
    <div style={styles.page}>
      <div style={styles.glow} />

      {/* TOP NAV */}
      <header style={styles.nav}>
        <div>
          <div style={styles.logoRow}>
            <span style={styles.logoDot} />
            <span style={styles.logoText}>Early App</span>
          </div>
          <p style={styles.navSubtitle}>Earn earlier · smarter</p>
        </div>

        <div>
          {user ? (
            <div style={styles.navUser}>
              <span style={styles.navEmail}>
                {user.email ? user.email.split("@")[0] : "Early user"}
              </span>
              <Link href="/profile" style={styles.navButton}>
                Profile
              </Link>
            </div>
          ) : (
            <Link href="/login" style={styles.navButton}>
              Login
            </Link>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <p style={styles.badge}>
            <span style={styles.badgeDot} />
            Early access · Private preview
          </p>

          <h1 style={styles.title}>
            Welcome{user ? " back" : ""}{" "}
            <span style={styles.gradientText}>to Early App</span>
          </h1>

          <p style={styles.subtitle}>
            A modern place to get in early on opportunities and ideas. Zero
            noise, curated drops, built for mobile and designed for trust.
          </p>

          <div style={styles.heroButtons}>
            <Link
              href={user ? "/profile" : "/signup"}
              style={styles.primaryButton}
            >
              {user ? "View your profile" : "Get started free"}
            </Link>

            <Link href="/login" style={styles.secondaryButton}>
              {user ? "Switch account" : "Already have an account? Log in"}
            </Link>
          </div>
        </section>

        {/* SNAPSHOT + BENEFITS */}
        <section style={styles.grid}>
          {/* TODAY'S SNAPSHOT */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Today's snapshot</h2>
            <p style={styles.cardTextMuted}>
              This will later show your earnings, invites, and streaks. For now,
              it's a stylish placeholder while we build the core engine.
            </p>

            <div style={styles.statsRow}>
              <div style={styles.stat}>
                <span style={styles.statLabel}>Earnings</span>
                <span style={styles.statValue}>Coming soon</span>
              </div>

              <div style={styles.stat}>
                <span style={styles.statLabel}>Invites</span>
                <span style={styles.statValue}>0 / 5 used</span>
              </div>

              <div style={styles.stat}>
                <span style={styles.statLabel}>Status</span>
                <span style={styles.statPill}>
                  {user ? "Early tester" : "Preview mode"}
                </span>
              </div>
            </div>
          </div>

          {/* BENEFITS OF BEING EARLY */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>What you get for being early</h2>
            <ul style={styles.list}>
              <li>Priority access to new features</li>
              <li>Better rewards for your first users</li>
              <li>Direct line to the builder (you)</li>
              <li>Built to feel calm, not addictive</li>
            </ul>
            <p style={styles.cardFooter}>
              This section will grow over time with things like your waitlist,
              drops, and upcoming launches.
            </p>
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
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
    background:
      "radial-gradient(circle at top left, #101b3f, #050816 60%, #02040a 100%)",
    color: "#f9fafb",
    padding: "16px",
    boxSizing: "border-box",
  },
  glow: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(56, 189, 248, 0.25), transparent 55%)",
    opacity: 0.9,
    pointerEvents: "none",
    zIndex: 0,
  },
  nav: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1024px",
    margin: "0 auto 16px auto",
    padding: "8px 8px 0 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  logoDot: {
    width: 10,
    height: 10,
    borderRadius: "999px",
    background:
      "conic-gradient(from 140deg,#22d3ee,#a855f7,#22c55e,#22d3ee)",
    boxShadow: "0 0 16px rgba(56, 189, 248, 0.9)",
  },
  logoText: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  navSubtitle: {
    marginTop: 4,
    fontSize: 11,
    opacity: 0.7,
  },
  navUser: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  navEmail: {
    fontSize: 12,
    maxWidth: 130,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    opacity: 0.8,
  },
  navButton: {
    fontSize: 12,
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid rgba(148,163,184,0.5)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    textDecoration: "none",
  },
  main: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1024,
    margin: "0 auto",
    padding: 8,
  },
  hero: {
    marginBottom: 24,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid rgba(148,163,184,0.4)",
    background: "rgba(15,23,42,0.85)",
    fontSize: 11,
    color: "#e5e7eb",
    marginBottom: 8,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "#22c55e",
    boxShadow: "0 0 10px rgba(34,197,94,.9)",
  },
  title: {
    fontSize: 32,
    lineHeight: 1.1,
    margin: "4px 0 8px 0",
  },
  gradientText: {
    background: "linear-gradient(120deg,#22d3ee,#a855f7,#4ade80)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  subtitle: {
    fontSize: 14,
    color: "#cbd5f5",
    maxWidth: 420,
  },
  heroButtons: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  primaryButton: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 16px",
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(135deg,#22d3ee,#0ea5e9,#22c55e)",
    color: "#020617",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    boxShadow: "0 12px 30px rgba(56,189,248,0.35)",
  },
  secondaryButton: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 16px",
    borderRadius: 999,
    border: "1px solid rgba(148,163,184,0.6)",
    background: "rgba(15,23,42,0.8)",
    color: "#e5e7eb",
    fontSize: 13,
    textDecoration: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
  },
  card: {
    borderRadius: 24,
    padding: 20,
    background:
      "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(15,23,42,0.9))",
    border: "1px solid rgba(148,163,184,0.4)",
    boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
    backdropFilter: "blur(16px)",
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  cardTextMuted: {
    fontSize: 13,
    color: "#cbd5f5",
    marginBottom: 16,
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gap: 12,
  },
  stat: {
    padding: 12,
    borderRadius: 16,
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(148,163,184,0.5)",
  },
  statLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#9ca3af",
  },
  statValue: {
    display: "block",
    marginTop: 4,
    fontSize: 14,
    fontWeight: 500,
  },
  statPill: {
    display: "inline-flex",
    marginTop: 4,
    padding: "4px 10px",
    borderRadius: 999,
    background:
      "linear-gradient(120deg,rgba(56,189,248,0.15),rgba(59,130,246,0.3))",
    border: "1px solid rgba(59,130,246,0.6)",
    fontSize: 12,
  },
  list: {
    margin: "8px 0 12px 18px",
    padding: 0,
    fontSize: 13,
    color: "#d1d5db",
  },
  cardFooter: {
    fontSize: 12,
    color: "#9ca3af",
  },
};
