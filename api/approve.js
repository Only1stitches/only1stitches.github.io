const PI_API_KEY = process.env.PI_API_KEY;

export default async function handler(req, res) {
  try {
    const { paymentId } = req.body;
    res.status(200).json({ message: "Approve endpoint active", paymentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
