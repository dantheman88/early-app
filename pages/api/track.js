import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
  try {
    const { offerId, user } = req.query;

    console.log("Tracking click:", { offerId, user });

    // 🔥 Record clicks in Firestore
    if (user) {
      const ref = doc(db, "earnings", user);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          total: 0,
          pending: 0,
          payouts: [],
          offersCompleted: 0,
          clicks: 1,
        });
      } else {
        await updateDoc(ref, {
          clicks: (snap.data().clicks || 0) + 1,
        });
      }
    }

    // Offer redirect links
    const offerLinks = {
      1: "https://monzo.com",
      2: "https://revolut.com",
    };

    const redirect = offerLinks[offerId];

    if (!redirect) return res.status(400).json({ error: "Offer not found" });

    return res.redirect(302, redirect);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Tracking failure" });
  }
}
