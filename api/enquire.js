export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }
  // Preview mode — form looks real but does not send anywhere yet
  res.status(200).json({ ok: true, preview: true });
}
