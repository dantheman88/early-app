export default function DropsPage() {
  const offer = {
    id: 1,
    title: "ISOQAR Academy – Online Courses",
    description: "Access professional online qualifications and training.",
    points: 200,
  };

  const trackClick = () => {
    window.location.href = `/api/track?offerId=${offer.id}`;
  };

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
      <h1>🔥 Featured Offer</h1>

      <div style={{ marginTop: 20 }}>
        <h2>{offer.title}</h2>
        <p>{offer.description}</p>
        <p><strong>Reward:</strong> {offer.points} points</p>

        <button
          onClick={trackClick}
          style={{
            padding: "12px 20px",
            fontSize: 16,
            cursor: "pointer",
            marginTop: 10,
          }}
        >
          Start Offer
        </button>
      </div>
    </div>
  );
}
