export default function DropsPage() {
  const offers = [
    {
      id: 1,
      title: "Learn a High-Value Skill – Earn Points",
      description:
        "Join ISOQAR Academy and access professional training courses. Complete signup to earn reward points.",
      points: 1000,
    },
    {
      id: 2,
      title: "Book Theatre Tickets – Earn Rewards",
      description:
        "Book tickets for top UK shows through Theatre Tickets Direct and earn points when you purchase.",
      points: 250,
    },
  ];

  const trackClick = (offer) => {
    window.location.href = `/api/track?offerId=${offer.id}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🔥 Available rewards</h1>
      <p>complete trusted offers and earn reward points.</p>

      {offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            marginBottom: 20,
            padding: 15,
            borderRadius: 8,
            background: "#111",
            color: "#fff",
          }}
        >
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <button
            onClick={() => trackClick(offer)}
            style={{
              ,<h2>
  {offer.title}
  {offer.badge && (
    <span
      style={{
        marginLeft: 10,
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
            }}
          >
            Start Offer (+{offer.points} points)
          </button>
        </div>
      ))}
    </div>
  );
}
<div
  style={{
    marginTop: 30,
    padding: 16,
    borderRadius: 8,
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
