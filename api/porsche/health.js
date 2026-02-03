/**
 * Vercel Serverless Function: GET /api/porsche/health
 * Simple health check endpoint
 */

import { setCorsHeaders } from './_utils.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.json({ status: 'ok' });
}
