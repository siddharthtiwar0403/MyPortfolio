export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        subject,
        message
      })
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ success: false });
  }
}
