export default function DropsPage() {
  const offers = [
    {
      id: 1,
      title: "Get £20 Free – Monzo",
      description: "Open a Monzo account and verify your identity.",
      points: 300,
    },
    {
      id: 2,
      title: "£15 Cashback – Revolut",
      description: "Join Revolut and complete the quick signup.",
      points: 150,
    },
    {
      id: 3,
      title: "Earn from surveys – Swagbucks",
      description: "Easy tasks anyone can complete.",
      points: 50,
    },
  ];

  const trackClick = (offer) => {
    window.location.href = `/api/track?offerId=${offer.id}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🔥 Featured Money Drops</h1>

      {offers.map((offer) => (
        <div key={offer.id} style={{ marginBottom: 20 }}>
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <button onClick={() => trackClick(offer)}>
            Start Offer (+{offer.points} points)
          </button>
        </div>
      ))}
    </div>
  );
}
