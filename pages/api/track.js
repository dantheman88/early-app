import { db } from "../../lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// ===============================
//  POINTS PER OFFER
// ===============================
const offerPoints = {
  1: 300,   // Monzo
  2: 150,   // Revolut
  3: 50,    // Surveys
};

// ===============================
//  OFFER REDIRECT LINKS
// ===============================
const offerLinks = {
  1: https://www.awin1.com/cread.php?awinmid=1936&awinaffid=2693548&ued=https%3A%2F%2Fwww.theatreticketsdirect.co.uk
};

// ===============================
//  MAIN HANDLER
// ===============================
export default async function handler(req, res) {
  try {
    const { offerId, user } = req.query;

    if (!offerId || !user) {
      return res.status(400).json({ error: "Missing offer or user" });
    }

    const redirect = offerLinks[offerId];
    const points = offerPoints[offerId] || 0;

    if (!redirect) {
      return res.status(400).json({ error: "Offer not found" });
    }

    console.log("Tracking:", { offerId, user, points });

    // ===============================
    //  FIRESTORE USER TRACKING
    // ===============================
    const ref = doc(db, "earnings", user);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        points: points,
        clicks: 1,
        history: [
          {
            offerId,
            earned: points,
            date: Date.now(),
          },
        ],
      });
    } else {
      const data = snap.data();

      await updateDoc(ref, {
        points: (data.points || 0) + points,
        clicks: (data.clicks || 0) + 1,
        history: [
          ...(data.history || []),
          {
            offerId,
            earned: points,
            date: Date.now(),
          },
        ],
      });
    }

    // ===============================
    //  REDIRECT USER TO REAL OFFER
    // ===============================
    return res.redirect(302, redirect);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Tracking error" });
  }
}
