export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { pair, timeframe } = req.body;

  if (!pair || !timeframe) {
    return res.status(400).json({ error: 'Missing pair or timeframe' });
  }

  const signal = Math.random() > 0.5 ? 'buy' : 'sell';
  res.status(200).json({ signal });
}
