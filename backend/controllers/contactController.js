import { sendMail } from "../services/emailService.js";

export const submitContactForm = async (c) => {
  try {
    let body;
    const contentType = c.req.header("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await c.req.json();
    } else {
      body = await c.req.parseBody();
    }

    const { name, email, phone, location, company, message } = body || {};

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return c.json({ 
        success: false, 
        message: "Please fill in all required fields" 
      }, 400);
    }

    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY;

    // Fire and forget email sending in background
    const emailPromise = sendMail({
      to: "contact@iotaflow.com",
      cc: [
        "mehak@iotaflow.com",
        "akshat99055@gmail.com",
        "errorr990551@gmail.com",
      ],
      subject: "New Contact Us Enquiry",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${location || "Not Provided"}</p>
        <p><b>Company:</b> ${company || "Not Provided"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    }, apiKey).catch(err => {
      console.error("Critical: Background Contact Email failed:", err);
    });

    if (c.executionCtx && typeof c.executionCtx.waitUntil === "function") {
      c.executionCtx.waitUntil(emailPromise);
    }

    // Respond immediately to the user
    return c.json({ 
      success: true, 
      message: "Message sent! Our team will get back to you shortly." 
    }, 200);

  } catch (err) {
    console.error("Contact form processing error:", err);
    return c.json({ 
      success: false, 
      message: "Something went wrong. Please try again later." 
    }, 500);
  }
};
