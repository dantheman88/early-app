import { adminDb } from "../../../lib/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { title, payout, url } = req.body;

    if (!title || !payout || !url) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const offerRef = adminDb.collection("offers").doc();
    await offerRef.set({
      id: offerRef.id,
      title,
      payout,
      url,
      createdAt: Date.now(),
    });

    res.status(200).json({ success: true, id: offerRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
