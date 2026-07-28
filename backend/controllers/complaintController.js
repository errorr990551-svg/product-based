import { sendMail } from "../services/emailService.js";

export const submitComplaintForm = async (c) => {
  try {
    const data = await c.req.parseBody();

    // Prepare attachment (image / file)
    const attachments = [];
    const file = data["attachment"] || data["image"];
    let hasAttachment = false;

    if (file && typeof file.arrayBuffer === "function" && file.name) {
      hasAttachment = true;
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY;

    // Fire and forget email sending in background
    const emailPromise = sendMail({
      to: "account@iotaflow.com",
      cc: "service@iotaflow.com",
      subject: "New Complaint Form Submitted",
      html: `
        <h2>New Complaint Received</h2>

        <p><b>Customer Name:</b> ${data.customerName || ""}</p>
        <p><b>Contact Person:</b> ${data.contactPerson || ""}</p>
        <p><b>Email:</b> ${data.email || ""}</p>
        <p><b>Phone:</b> ${data.phone || ""}</p>

        <hr/>

        <p><b>Flow Meter Model:</b> ${data.flowMeterModel || ""}</p>
        <p><b>Serial Number:</b> ${data.serialNumber || ""}</p>
        <p><b>Flow Meter Size:</b> ${data.flowMeterSize || ""}</p>
        <p><b>Make / Brand:</b> ${data.makeBrand || ""}</p>
        <p><b>Warranty Status:</b> ${data.warrantyStatus || ""}</p>

        <hr/>

        <p><b>Nature of Complaint:</b> ${data.complaintNature || ""}</p>
        <p><b>Frequency of Issue:</b> ${data.frequency || ""}</p>
        <p><b>Issue Description:</b><br/>${data.issueDescription || ""}</p>

        <hr/>

        <p><b>On-Site Visit Required:</b> ${data.onSiteVisit || ""}</p>
        <p><b>Calibration Certificate Available:</b> ${data.calibrationCertificate || ""}</p>
        <p><b>Preferred Contact Method:</b> ${data.contactMethod || ""}</p>

        <p><b>Attachment:</b> ${
          hasAttachment ? "Attached with this email" : "No attachment provided"
        }</p>
      `,
      attachments,
    }, apiKey).catch(err => {
      console.error("Critical: Background Complaint Email failed:", err);
    });

    if (c.executionCtx && typeof c.executionCtx.waitUntil === "function") {
      c.executionCtx.waitUntil(emailPromise);
    }

    return c.json({
      success: true,
      message: "Complaint submitted successfully! We will review it shortly.",
    }, 200);
  } catch (error) {
    console.error("Complaint Form processing Error:", error);
    return c.json({
      success: false,
      message: "Something went wrong. Please try again.",
    }, 500);
  }
};
