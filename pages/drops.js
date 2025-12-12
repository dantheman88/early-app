export default function DropsPage() {
  const offers = [
    {
      id: 1,
      title: "Get £20 Free – Monzo",
      description: "Open a Monzo account and earn an instant £20 bonus.",
      payout: "£20 per signup",
      link: "https://monzo.com",
    },
    {
      id: 2,
      title: "£15 Cashback – Revolut",
      description: "Join Revolut and earn a £15 reward.",
      payout: "£15 per signup",
      link: "https://revolut.com",
    },
  ];

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
              <a
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Earn Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
