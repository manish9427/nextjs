import crypto from 'crypto';

const SECRET_KEY = process.env.HMAC_SECRET || 'default_secret'; 

const isValidHMAC = (body, signature) => {
  const expected = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(JSON.stringify(body))
    .digest('hex');
  return signature === expected;
};

const handler = async (req, res) => {
  const traceId = req.headers['x-trace-id'] || crypto.randomUUID();
  console.log(`[TraceID:${traceId}] ${req.method} ${req.url}`);

  if (req.method !== 'POST') {
    return res.status(405).json({ traceId, error: 'Method not allowed' });
  }

  const signature = req.headers['x-signature'];
  const { username, password } = req.body;

  if (!username || !password) {
    console.warn(`[TraceID:${traceId}] Missing credentials`);
    return res.status(400).json({ traceId, error: 'Username and password are required' });
  }

  // Optional: Validate HMAC
  if (signature && !isValidHMAC(req.body, signature)) {
    console.warn(`[TraceID:${traceId}] Invalid HMAC signature`);
    return res.status(403).json({ traceId, error: 'Invalid signature' });
  }

  // Simulated database save logic
  console.log(`[TraceID:${traceId}] User created: ${username}`);
  return res.status(201).json({ traceId, message: 'User created successfully' });
};

export default handler;
