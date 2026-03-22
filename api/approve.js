const axios = require('axios');

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const { paymentId } = req.body;
    const PI_API_KEY = process.env.PI_API_KEY;

    try {
        await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {}, {
            headers: { 'Authorization': `Key ${PI_API_KEY}` }
        });
        res.status(200).json({ message: "Approved" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
