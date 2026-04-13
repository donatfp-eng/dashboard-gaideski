export default async function handler(req, res) {
  const path = req.url.replace('/api/kommo', '') || '/';
  const url = `https://kommogaideskicombr.kommo.com/api/v4${path}`;
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  try {
    const r = await fetch(url, {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1OGUyNjY2MDhiZTc4MjgxOTRiNjIxMjVlMGZlOTQxNTA3YzgxZGJlYmNhMjgwMGNkNjU5NWZlOWI1NTZlMzgwZDE2MWI0MzY3MjE5MzdhIn0.eyJhdWQiOiIxMTI0YWFjNS03MDgxLTQ0ZjItYjBmMS02ZjY0OTQyNzI2MzciLCJqdGkiOiJkNThlMjY2NjA4YmU3ODI4MTk0YjYyMTI1ZTBmZTk0MTUwN2M4MWRiZWJjYTI4MDBjZDY1OTVmZTliNTU2ZTM4MGQxNjFiNDM2NzIxOTM3YSIsImlhdCI6MTc0NDMwMDE3NywibmJmIjoxNzQ0MzAwMTc3LCJleHAiOjE4OTk5ODA4MDAsInN1YiI6IjEzNzAxNTQwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM1MDUzNjUyLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaCI6IiJ9.MzRSFDaWFYxqv6lpJ2qFp_qK3ZiRZbQrOJi5r5dJ4sGiY6fMiDdxYMb9Z1yd9GkqGqBs4GFIxE3GQiF2dP7Kl5q6q6mbMHpKWCFJx15B34X2s-cR7QVPX4MKb5MZm4Z6k3iXq5x7k2WJ0aqRqMoO0PmQ1nNiXQ2Qh5SLAJ4Q'
      }
    });
    const data = await r.json();
    res.status(r.status).json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
