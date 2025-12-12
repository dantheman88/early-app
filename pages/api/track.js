export default function handler(req, res) {
  const { offer } = req.query;

  const offerLinks = {
    1: "https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548&ued=https%3A%2F%2Fwww.theatreticketsdirect.co.uk"
  };

  if (!offer || !offerLinks[offer]) {
    return res.status(400).send("Invalid offer");
  }

  res.writeHead(302, {
    Location: offerLinks[offer],
  });
  res.end();
}
