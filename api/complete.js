const axios = require('axios');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId, txid } = req.body;
  const PI_API_KEY = process.env.PI_API_KEY; 

  try {
    // This is the critical "Action from Developer" step
    const response = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      { txid: txid },
      {
        headers: { 
          'Authorization': `Key ${PI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return res.status(200).json({ 
      message: "Payment finalized successfully", 
      data: response.data 
    });

  } catch (error) {
    console.error("Pi API Error:", error.response?.data || error.message);
    return res.status(500).json({ 
      error: "Failed to complete payment on Pi Network",
      details: error.response?.data
    });
  }
}
