import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      success_url: 'https://yourapp.vercel.app/success',
      cancel_url: 'https://yourapp.vercel.app/cancel',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1
        }
      ]
    });

    return res.status(200).json({ id: session.id });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}
