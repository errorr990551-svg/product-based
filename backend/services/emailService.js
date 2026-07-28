import { Resend } from "resend";

const getResendInstance = (apiKey) => {
  const key = apiKey || process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not defined. Please set RESEND_API_KEY in environment variables or Cloudflare secrets.");
  }
  return new Resend(key);
};

export const sendMail = async ({ to, cc, subject, html, attachments = [] }, apiKey) => {
  try {
    const resend = getResendInstance(apiKey);
    const data = await resend.emails.send({
      from: "IOTAFLOW Website <no-reply@inquiry.errorr.in>",
      to: Array.isArray(to) ? to : [to],
      cc: cc
        ? Array.isArray(cc)
          ? cc
          : [cc]
        : undefined,
      subject,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    console.log("Resend response:", data);
    return data;
  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
};
