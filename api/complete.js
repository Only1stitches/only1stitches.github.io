export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { paymentId, txid } = req.body;
    return res.status(200).json({ message: "Success", paymentId, txid });
  }
  res.status(405).json({ message: "Method not allowed" });
}
