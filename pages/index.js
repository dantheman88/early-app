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
                </span
