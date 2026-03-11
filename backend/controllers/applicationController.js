const { sendMail } = require("../services/emailService");

exports.submitApplication = async (req, res) => {
  try {
    const { fullName, email, mobile, location, role } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Resume required" });
    }

    await sendMail({
      to: "hr@iotaflow.com",
      subject: `New Job Application - ${role}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Applied For:</b> ${role}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ],
    });

    res.status(200).json({ success: true, message: "Application submitted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Application failed" });
  }
};
