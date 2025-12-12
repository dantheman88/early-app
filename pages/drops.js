export default function DropsPage() {
  const offers = [
    {
      id: 1,
      title: "Learn a High-Value Skill",
      description:
        "Join ISOQAR Academy and access professional training courses. Complete signup to earn reward points.",
      points: 1000,
      badge: "High value",
    },
    {
      id: 2,
      title: "Book Theatre Tickets",
      description:
        "Book tickets for top UK shows through Theatre Tickets Direct and earn points when you purchase.",
      points: 250,
      badge: "Popular",
    },
  ];

  const trackClick = (offer) => {
    window.location.href = `/api/track?offerId=${offer.id}`;
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Page header */}
      <h1>🔥 Available rewards</h1>
      <p>Complete trusted offers and earn reward points.</p>

      {/* Offers list */}
      {offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            marginBottom: 20,
            padding: 16,
            borderRadius: 10,
            background: "#111",
            color: "#fff",
          }}
        >
          <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {offer.title}
            {offer.badge && (
              <span
                style={{
                  padding: "4px 8px",
                  fontSize: 12,
                  borderRadius: 6,
                  background: "#22c55e",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                {offer.badge}
              </span>
            )}
          </h2>

          <p>{offer.description}</p>

          <button
            onClick={() => trackClick(offer)}
            style={{
              padding: "10px 16px",
              background: "#22c55e",
              border: "none",
              borderRadius: 8,
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Start offer (+{offer.points} points)
          </button>
        </div>
      ))}

      {/* Coming soon section */}
      <div
        style={{
          marginTop: 30,
          padding: 16,
          borderRadius: 10,
          background: "#0f172a",
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#fff", marginBottom: 6 }}>
          More rewards coming soon
        </h3>
        <p>
          New high-value offers are being added. Check back regularly.
        </p>
      </div>
    </div>
  );
}
