export default async function handler(req, res) {
  const path = req.url.split('/api/kommo')[1] || '/';
  const url = `https://kommogaideskicombr.kommo.com/api/v4${path}`;
  res.setHeader('Access-Control-Allow-Origin', '*' );
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  try {
    const r = await fetch(url, {
      headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhOGY5ZWRjZjhkMDk4MjYyODNiMzRjZTU5ZWYzODI2NjI0ZTgwYjRkMzg2YTU2YTU1N2FiNTEzN2Y2ZDZlMTJkY2UwZTcyN2IwMTI2ZmY1In0.eyJhdWQiOiIxMTI0YWFjNS03MDgxLTQ0ZjItYjBmMS02ZjY0OTQyNzI2MzciLCJqdGkiOiIyYThmOWVkY2Y4ZDA5ODI2MjgzYjM0Y2U1OWVmMzgyNjYyNGU4MGI0ZDM4NmE1NmE1NTdhYjUxMzdmNmQ2ZTEyZGNlMGU3MjdiMDEyNmZmNSIsImlhdCI6MTc3NjA4NjQ4NSwibmJmIjoxNzc2MDg2NDg1LCJleHAiOjE5MzI2ODE2MDAsInN1YiI6IjEzNzAxNTQwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM1MDUzNjUyLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiODA4Y2I5NWEtZjE0Yy00NmMxLWJmNTUtNWY3YWJiZWViYzE1IiwiYXBpX2RvbWFpbiI6ImFwaS1nLmtvbW1vLmNvbSJ9.pRFUy5nLRo1tOUedCuc-uFdB_bSihs7WxSZKpauXbNdDdKLFTxoDTHawGJiMMagJ3re7QUzPx7tuY6SdaYHKN4t72U_V8ualkJBY-ZeXpohvo0RsMGdjTUpzl1-BeTStdpdXFnOG8kjDvos1hd0kEtEAxWPoCgTWLAUdXH8k0wOdy2Vwaf4ogtZYITTduW-VKF9FEz2ApJ1UF7FQoWgt29QvM8S_WW7xOnoGiDmHv6n9-QQfCM1dprH4UKwG4D3ibC794qVq_5y2o21Ih_jl_RFC96Tbx1pfhegqzV7-aDTiiNC-xoPKFvSLflvWB45x2LjnkdcY1Y6SRRg6wPvEEQ' }
    });
    if (r.status === 204) return res.status(204).end();
    const data = await r.json();
    res.status(r.status).json(data);
  } catch(e) { res.status(500).json({ error: e.message }); }
}
