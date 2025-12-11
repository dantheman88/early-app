import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: "https://early-app-peach.vercel.app?success=true",
      cancel_url: "https://early-app-peach.vercel.app?canceled=true",
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
