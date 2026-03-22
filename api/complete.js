const PI_API_KEY = process.env.PI_API_KEY;

export default async function handler(req, res) {
  try {
    const { paymentId, txid } = req.body;
    res.status(200).json({ message: "Complete endpoint active", txid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
