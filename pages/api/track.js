export default function handler(req, res) {
  const { offerId } = req.query;

  const offerLinks = {
    1: "https://www.awin1.com/cread.php?awinmid=87091&awinaffid=2693548", // ISOQAR
    2: "https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548", // Theatre Tickets Direct
  };

  const redirectUrl = offerLinks[offerId];

  if (!redirectUrl) {
    return res.status(400).send("Invalid offer");
  }

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
