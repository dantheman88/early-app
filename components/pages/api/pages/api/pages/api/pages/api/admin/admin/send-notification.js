import * as admin from "../../lib/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { expoPushToken, title, message } = req.body;

    if (!expoPushToken || !title || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const payload = {
      to: expoPushToken,
      sound: "default",
      title,
      body: message,
    };

    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Push error:", error);
    res.status(500).json({ error: error.message });
  }
}
