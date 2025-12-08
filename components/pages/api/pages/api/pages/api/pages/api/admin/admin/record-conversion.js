import { adminDb } from "../../lib/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userId, offerId, amount } = req.body;

    if (!userId || !offerId || !amount) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Save conversion
    await adminDb.collection("conversions").add({
      userId,
      offerId,
      amount,
      createdAt: Date.now(),
    });

    // Add money to user wallet
    await adminDb.collection("users").doc(userId).set(
      {
        wallet: adminDb.FieldValue.increment(amount),
      },
      { merge: true }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Conversion error:", error);
    res.status(500).json({ error: error.message });
  }
}
