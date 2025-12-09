export default async function handler(req, res) {
  return res.status(200).json({
    id: Math.random().toString(36).substring(7),
    message: 'Offer created (placeholder)'
  });
}
