export default function DropsPage() {
  const offers = [
    {
      id: 1,
      title: "Get £20 Free — Monzo",
      description: "Open a Monzo account and verify your identity.",
      points: 300, // High value offer
      link: "https://monzo.com",
    },
    {
      id: 2,
      title: "£15 Cashback — Revolut",
      description: "Join Revolut and complete the quick signup.",
      points: 150, // Medium offer
      link: "https://revolut.com",
    },
    {
      id: 3,
      title: "Earn from surveys — Swagbucks",
      description: "Easy survey tasks anyone can complete.",
      points: 50, // Low simple task
      link: "https://swagbucks.com",
    },
  ];

  // Redirect + prepare point awarding
  const trackClick = (offer) => {
    const user =
      typeof window !== "undefined"
        ? localStorage.getItem("userEmail") || "guest"
        : "guest";

    // Redirect to tracking API → then real offer link
    window.location.href = `/api/track?offerId=${offer.id}&user=${user}&points=${offer.points}`;
  };

  return (
    <div className="drops-container" style={styles.page}>
      <h1 style={styles.title}>🔥 Featured Money Drops</h1>
      <p style={styles.subtitle}>Complete offers to earn points and level up.</p>

      <div style={styles.grid}>
        {offers.map((offer) => (
          <div key={offer.id} style={styles.card}>
            <h2 style={styles.offerTitle}>{offer.title}</h2>
            <p style={styles.offerDescription}>{offer.description}</p>

            <div style={styles.footer}>
              <span style={styles.pointsTag}>+{offer.points} points</span>

              <button
                style={styles.button}
                onClick={() => trackClick(offer)}
              >
                Start Offer
              </button>
            </div>
          </div>
        ))}
      </div>

      <a href="/" style={styles.backButton}>← Back to Home</a>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "white",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "14px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "18px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
  },
  offerTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#fff",
  },
  offerDescription: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "12px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pointsTag: {
    background: "rgba(34,197,94,0.2)",
    color: "#86efac",
    padding: "6px 10px",
    borderRadius: "10px",
    border: "1px solid rgba(34,197,94,0.5)",
    fontSize: "12px",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "none",
    color: "#020617",
    fontWeight: "700",
    cursor: "pointer",
  },
  backButton: {
    display: "block",
    marginTop: "20px",
    color: "#93c5fd",
    textDecoration: "none",
    fontSize: "14px",
  },
};
