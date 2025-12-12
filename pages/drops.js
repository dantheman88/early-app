export default function DropsPage() {
  const offers = [
    {
      id: 1,
      title: "Get £20 Free — Monzo",
      description: "Open a Monzo account and earn an instant £20 bonus.",
      payout: "£20 per signup",
    },
    {
      id: 2,
      title: "£15 Cashback — Revolut",
      description: "Join Revolut and earn a £15 reward.",
      payout: "£15 per signup",
    },
  ];

  const trackClick = (id) => {
    const user = typeof window !== "undefined"
      ? localStorage.getItem("userEmail") || "guest"
      : "guest";

    window.location.href = `/api/track?offerId=${id}&user=${user}`;
  };

  return (
    <div className="drops-container">
      <h1 className="drops-title">🔥 Featured Money Drops</h1>
      <p className="drops-sub">Earn rewards instantly by completing offers.</p>

      <div className="drops-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="drop-card">
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>

            <div className="drop-footer">
              <span className="payout">{offer.payout}</span>

              <button
                className="btn-primary"
                onClick={() => trackClick(offer.id)}
              >
                Earn Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
