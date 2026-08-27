import { Resend } from "resend";

const getResendInstance = (apiKey) => {
  const key = apiKey || (typeof process !== "undefined" ? process.env?.RESEND_API_KEY : undefined);
  if (!key) {
    throw new Error("RESEND_API_KEY is not defined. Please set RESEND_API_KEY in environment variables or Cloudflare secrets.");
  }
  return new Resend(key);
};

export const sendMail = async ({ to, cc, subject, html, attachments = [] }, apiKey) => {
  try {
    const resend = getResendInstance(apiKey);
    const payload = {
      from: "IOTAFLOW Website <no-reply@inquiry.errorr.in>",
      to: Array.isArray(to) ? to : [to],
      cc: cc
        ? Array.isArray(cc)
          ? cc
          : [cc]
        : undefined,
      subject,
      html,
    };

    if (attachments && attachments.length > 0) {
      payload.attachments = attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
      }));
    }

    const response = await resend.emails.send(payload);
    console.log("Resend API response:", JSON.stringify(response));

    if (response.error) {
      console.error("Resend API Error:", response.error);
      throw new Error(`Resend Delivery Error: ${response.error.message || JSON.stringify(response.error)}`);
    }

    return response.data;
  } catch (error) {
    console.error("RESEND ERROR in sendMail:", error);
    throw error;
  }
};

