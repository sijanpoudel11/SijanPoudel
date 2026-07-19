import publicApi from "./publicApi";

/**
 * Sends the contact form data directly to the Resend API from the browser.
 * @param {object} contactData - The form data, including name, email, and message.
 * @returns {Promise} - The Axios promise for the request.
 */
export const sendContactMessage = (contactData) => {
  const { name, email, message } = contactData;

  return publicApi.post("https://api.resend.com/emails", {
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: [email],
    subject: `New Portfolio Message from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
  });
};
