const { sendMail } = require("../services/emailService");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    await sendMail({
      to: "contact@iotaflow.com",
      cc: [
        "mehak@iotaflow.com",
        "akshat99055@gmail.com",
        "bhattmanik94@gmail.com",
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

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
