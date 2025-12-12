// /pages/api/earnings.js
import { db } from "../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: "Missing email" });
    }

    const ref = doc(db, "earnings", email);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        total: 0,
        pending: 0,
        payouts: [],
        offersCompleted: 0,
        clicks: 0,
      });

      return res.json({
        total: 0,
        pending: 0,
        payouts: [],
        offersCompleted: 0,
        clicks: 0,
      });
    }

    res.json(snap.data());
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
}
