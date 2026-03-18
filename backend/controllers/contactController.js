const { sendMail } = require("../services/emailService");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill in all required fields" 
      });
    }

    // Set timeout for email sending (8 seconds)
    const emailPromise = sendMail({
      to: "contact@iotaflow.com",
      cc: [
        "mehak@iotaflow.com",
        "akshat99055@gmail.com",
        
      ],
      subject: "New Contact Us Enquiry",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Email service timeout")), 8000)
    );

    await Promise.race([emailPromise, timeoutPromise]);

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact form error:", err);
    const errorMessage = err.message === "Email service timeout" 
      ? "Request timeout. Please try again."
      : "Failed to send message. Please try again.";
    res.status(500).json({ success: false, message: errorMessage });
  }
};
