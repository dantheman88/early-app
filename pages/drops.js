import Link from "next/link";

export default function DropsPage() {
  const offers = [
    {
      id: 1,
      name: "Revolut – £20 Bonus",
      payout: "£20 per signup",
      description: "Get a free Revolut account and complete a simple action.",
      link: "https://www.revolut.com",
    },
    {
      id: 2,
      name: "Trading212 – Free Share",
      payout: "£5-£100 per signup",
      description: "Deposit £1 and receive a random free stock.",
      link: "https://www.trading212.com",
    },
    {
      id: 3,
      name: "Honey – Cashback Rewards",
      payout: "£5 per install",
      description: "Free browser extension that saves money online.",
      link: "https://www.joinhoney.com",
    },
  ];

  return (
    <div style={styles.page}>
      <div className="container fade-in">
        <h1 style={styles.title}>Available Drops</h1>
        <p style={styles.subtitle}>
          Complete offers and earn rewards. New drops added weekly.
        </p>

        <div style={styles.grid}>
          {offers.map((offer) => (
            <div key={offer.id} style={styles.card}>
              <h2 style={styles.offerName}>{offer.name}</h2>
              <p style={styles.offerDescription}>{offer.description}</p>
              <div style={styles.payout}>{offer.payout}</div>

              <a
                href={offer.link}
                target="_blank"
                rel="noreferrer"
                style={styles.button}
              >
                Activate Offer
              </a>
            </div>
          ))}
        </div>

        <Link href="/" style={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px 16px",
    background:
      "radial-gradient(circle at top, #0f172a 0%, #020617 45%, #000000 100%)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "6px",
    color: "white",
  },
  subtitle: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "18px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(14px)",
  },
  offerName: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#fff",
  },
  offerDescription: {
    fontSize: "13px",
    color: "#cbd5e1",
    marginBottom: "10px",
  },
  payout: {
    padding: "6px 10px",
    background: "rgba(34,197,94,0.15)",
    border: "1px solid rgba(34,197,94,0.4)",
    borderRadius: "8px",
    color: "#86efac",
    width: "fit-content",
    marginBottom: "12px",
    fontSize: "12px",
  },
  button: {
    display: "block",
    width: "100%",
    textAlign: "center",
    padding: "12px",
    background: "linear-gradient(135deg, #22c55e, #16a34a, #0f766e)",
    borderRadius: "12px",
    color: "#020617",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "14px",
  },
  backButton: {
    display: "block",
    textAlign: "center",
    marginTop: "20px",
    color: "#93c5fd",
    fontSize: "14px",
    textDecoration: "none",
  },
};
