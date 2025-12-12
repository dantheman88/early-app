export default function handler(req, res) {
  const { offerId } = req.query;

  const offerLinks = {
    "1": "https://www.google.com",
    "2": "https://www.bing.com",
    "3": "https://www.yahoo.com",
  };

  const link = offerLinks[String(offerId)];

  if (!link) {
    return res.status(400).json({ error: "Invalid offerId" });
  }

  return res.redirect(302, link);
}
