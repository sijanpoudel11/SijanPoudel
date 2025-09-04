export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`, // Vercel env variable
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <contact@dev.sijanpoudel.com.np>",
        to: [email],
        subject: "Thanks for reaching out!",
        text: `Hi ${name},\n\nThanks for contacting me! I’ll get back to you soon.\n\n- Sijan`,
      }),
    });

    if (!response.ok) {
      console.log("Request body:", req.body);
      const text = await response.text();
      throw new Error(text);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending acknowledgment email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
