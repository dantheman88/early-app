export default function handler(req, res) {
  const { offerId } = req.query;

  const offerLinks = {
    1: "https://www.awin1.com/cread.php?awinmid=87091&awinaffid=2693548",
    2: "https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548",
    3: "https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548",
  };

  const redirectUrl = offerLinks[offerId];

  if (!redirectUrl) {
    res.status(400).send("Invalid offer");
    return;
  }

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
