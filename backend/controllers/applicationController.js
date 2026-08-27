import { sendMail } from "../services/emailService.js";

export const submitApplication = async (c) => {
  try {
    const body = await c.req.parseBody();
    const { fullName, email, mobile, location, role } = body || {};

    const file = body["resume"];
    if (!file || typeof file.arrayBuffer !== "function" || !file.name) {
      return c.json({ success: false, message: "Resume required" }, 400);
    }

    const arrayBuffer = await file.arrayBuffer();
    const attachments = [
      {
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      },
    ];

    const apiKey = c.env?.RESEND_API_KEY || (typeof process !== "undefined" ? process.env?.RESEND_API_KEY : undefined);

    // Await email delivery confirmation
    await sendMail({
      to: "hr@iotaflow.com",
      subject: `New Job Application - ${role || ""}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${fullName || ""}</p>
        <p><b>Email:</b> ${email || ""}</p>
        <p><b>Mobile:</b> ${mobile || ""}</p>
        <p><b>Location:</b> ${location || ""}</p>
        <p><b>Applied For:</b> ${role || ""}</p>
      `,
      attachments,
    }, apiKey);

    return c.json({ success: true, message: "Application submitted successfully!" }, 200);

  } catch (err) {
    console.error("Application processing error:", err);
    return c.json({ success: false, message: err.message || "Something went wrong. Please try again." }, 500);
  }
};

