export default function handler(req, res) {
  const { offerId } = req.query;

  const offerLinks = {
    1: "https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548", // Monzo
    2: "https://revolut.com/referral/YOURCODE",                        // Revolut
    3: "https://www.swagbucks.com",                                   // Surveys
  };

  const link = offerLinks[offerId];

  if (!link) {
    return res.status(400).send("Invalid offer");
  }

  return res.redirect(302, link);
}
