export const config = {
  api: { bodyParser: false }
};

export default function handler(req, res) {
  res.status(200).send("ok");
}
