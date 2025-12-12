export default function DropsPage() {
  // POINTS → £ estimate (internal preview only)
  const POINT_VALUE_GBP = 0.01; // 100 points ≈ £1 (adjust later)

  const offers = [
    {
      id: 1,
      title: "Learn a High-Value Skill",
      description:
        "Join ISOQAR Academy and access professional training courses. Complete signup to earn reward points.",
      points: 1000,
      badge: "🔥 Top payout",
      status: "live",
    },
    {
      id: 2,
      title: "Book Theatre Tickets",
      description:
        "Book tickets for top UK shows through Theatre Tickets Direct and earn points when you purchase.",
      points: 250,
      badge: "⭐ Popular",
      status: "live",
    },
    {
      id: 3,
      title: "Switch Home Broadband",
      description:
        "Compare and switch broadband providers. Rewards are credited after provider approval.",
      points: 800,
      badge: "🕒 Pending",
      status: "pending",
    },
  ];

  // Sort by highest points first
  const sortedOffers = [...offers].sort((a, b) => b.points - a.points);

  const trackClick = (offer) => {
    if (offer.status !== "live") return;
    window.location.href = `/api/track?offerId=${offer.id}`;
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Header */}
      <h1>🔥 Available rewards</h1>

<p>
  Complete trusted partner offers and earn Early App points.
</p>

<div
  style={{
    marginTop: 16,
    marginBottom: 24,
    padding: 14,
    borderRadius: 10,
    background: "#0f172a",
    color: "#cbd5f5",
    fontSize: 14,
  }}
>
  <strong>What are points?</strong>
  <p style={{ marginTop: 8 }}>
    Points unlock early access to higher-value rewards, priority bonuses,
    and future cash redemptions. Early members will be the first to access
    cash rewards when they launch.
  </p>
</div>

      {/* Offers */}
      {sortedOffers.map((offer) => {
        const estimatedEarnings = (offer.points * POINT_VALUE_GBP).toFixed(2);

        return (
          <div
            key={offer.id}
            style={{
              marginBottom: 20,
              padding: 16,
              borderRadius: 12,
              background: "#111",
              color: "#fff",
              opacity: offer.status === "pending" ? 0.6 : 1,
            }}
          >
            {/* Title + badge */}
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

            {/* Earnings preview */}
            <p style={{ color: "#9ca3af", fontSize: 14 }}>
              Estimated reward value: <strong>£{estimatedEarnings}</strong>
            </p>

            {/* CTA */}
            {offer.status === "live" ? (
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
            ) : (
              <button
                disabled
                style={{
                  padding: "10px 16px",
                  background: "#374151",
                  border: "none",
                  borderRadius: 8,
                  color: "#9ca3af",
                  fontWeight: "bold",
                }}
              >
                Pending approval
              </button>
            )}
          </div>
        );
      })}

      {/* Coming soon */}
      <div
        style={{
          marginTop: 30,
          padding: 16,
          borderRadius: 12,
          background: "#0f172a",
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#fff", marginBottom: 6 }}>
          More rewards coming soon
        </h3>
        <p>
          New high-value offers (banking, broadband, finance) are being added.
          Check back regularly.
        </p>
      </div>
    </div>
  );
              }
