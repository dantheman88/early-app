export default function handler(req, res) {
  const { offerId } = req.query;

  const offerLinks = {
    1: "https://www.awin1.com/cread.php?awinmid=87091&awinaffid=2693548", // ISOQAR
    2: "https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548",  // Theatre Tickets
    // 3: broadband later (once approved)
  };
