export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required" });
  }

  try {
    // --- Email to You (the Site Owner) ---
    const sendToOwner = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact Form <contact@${process.env.DOMAIN_URL}>`,
        to: [process.env.OWNER_EMAIL],
        subject: `New Portfolio Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
      }),
    });

    // --- Confirmation Email to the User ---
    const sendToUser = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Sijan Poudel <contact@${process.env.DOMAIN_URL}>`,
        to: [email],
        subject: "Thanks for reaching out!",
        text: `Hi ${name},\n\nThanks for contacting me! I’ll get back to you soon.\n\n- Sijan`,
      }),
    });

    const [ownerResponse, userResponse] = await Promise.all([
      sendToOwner,
      sendToUser,
    ]);

    if (!ownerResponse.ok) {
      const ownerError = await ownerResponse.text();
      console.error("Failed to send owner email:", ownerError);
    }

    if (!userResponse.ok) {
      const userError = await userResponse.text();
      console.error("Failed to send user confirmation email:", userError);
    }

    if (!ownerResponse.ok || !userResponse.ok) {
        throw new Error("Failed to send one or more emails.");
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
