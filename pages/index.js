export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Early App</h1>
        <p style={styles.subtitle}>earn earlier · smarter</p>
        <a href="/login" style={styles.loginButton}>Login</a>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Welcome to Early App</h2>
        <p style={styles.heroText}>
          A modern place to get in early on opportunities and ideas.
        </p>

        <p style={styles.bullets}>
          ⚡ Early access · Private preview  
          <br />
          Zero noise · Curated drops · Built for mobile
        </p>

        <div style={styles.heroButtons}>
          <a href="/signup" style={styles.primaryButton}>Get started</a>
          <a href="/profile" style={styles.secondaryButton}>Personalize app</a>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Today's snapshot</h3>
        <p style={styles.sectionText}>
          This will later show your earnings, invites, and streaks.
          For now, it's a stylish placeholder while we build the core engine.
        </p>

        <p style={styles.snapshotStats}>
          Earnings: <strong>coming soon</strong> <br />
          Invites: <strong>0 / 5 used</strong> <br />
          Status: <strong>Early tester</strong>
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>What you get for being early</h3>
        <ul style={styles.list}>
          <li>Priority access to new features</li>
          <li>Better rewards for your first users</li>
          <li>Direct line to the builder (you!)</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    fontFamily: "Inter, sans-serif",
    background: "#f5f5f5",
    minHeight: "100vh"
  },
  header: {
    marginBottom: "30px",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "800",
  },
  subtitle: {
    marginTop: "-5px",
    fontSize: "14px",
    color: "#777",
  },
  loginButton: {
    display: "inline-block",
    marginTop: "10px",
    fontSize: "14px",
    color: "#0070f3",
    textDecoration: "underline"
  },
  hero: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    marginBottom: "30px"
  },
  heroTitle: {
    fontSize: "26px",
    fontWeight: "900"
  },
  heroText: {
    marginTop: "10px",
    color: "#444"
  },
  bullets: {
    marginTop: "15px",
    color: "#222",
    fontWeight: "500"
  },
  heroButtons: {
    marginTop: "20px",
    display: "flex",
    gap: "10px"
  },
  primaryButton: {
    flex: 1,
    background: "#0070f3",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "700",
    textDecoration: "none"
  },
  secondaryButton: {
    flex: 1,
    background: "#eaeaea",
    color: "#333",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "600",
    textDecoration: "none"
  },
  section: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px"
  },
  sectionText: {
    color: "#555",
    marginBottom: "15px"
  },
  snapshotStats: {
    lineHeight: "1.7"
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.7",
  }
};
