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
      <h1>🔥 Featured Rewarded Offers</h1>
      <p>Choose an offer, complete the action, and earn points.</p>

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
              padding: "10px 16px",
              background: "#22c55e",
              border: "none",
              borderRadius: 6,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Start Offer (+{offer.points} points)
          </button>
        </div>
      ))}
    </div>
  );
}
