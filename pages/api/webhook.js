export const config = {
  api: { bodyParser: false }
};

import Stripe from 'stripe';

export default async function handler(req, res) {
  res.status(200).end(); // placeholder webhook
}
