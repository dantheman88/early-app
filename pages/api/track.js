// /pages/api/track.js

export default async function handler(req, res) {
  try {
    const { offerId, user } = req.query;

    console.log("Click tracked:", { offerId, user });

    // Later we will store clicks + earnings here.
    // For now, redirect to the real offer page:
    const offerLinks = {
      "1": "https://monzo.com",
      "2": "https://revolut.com",
    };

    const redirect = offerLinks[offerId];

    if (!redirect) {
      return res.status(400).json({ error: "Unknown offer" });
    }

    res.redirect(302, redirect);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Tracking error" });
  }
}
