module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { databaseId, filter, sorts, pageSize } = req.body;
  if (!databaseId) { res.status(400).json({ error: 'databaseId required' }); return; }

  try {
    const r = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.NOTION_TOKEN,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: filter || undefined,
        sorts: sorts || [{ timestamp: 'created_time', direction: 'descending' }],
        page_size: pageSize || 10,
      }),
    });
    const data = await r.json();
    res.status(r.ok ? 200 : r.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
