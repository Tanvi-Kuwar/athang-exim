
import Enquiry from "../models/Enquiry.js";
import { sendEnquiryEmail } from "../services/emailService.js";

export const createEnquiry = async (req, res) => {
  try {
    const { name, company, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    // Save the enquiry first.
    const enquiry = await Enquiry.create({
      name,
      company,
      email,
      phone,
      subject,
      message,
    });

    // Send only the business notification.
    // An email failure must not undo the saved enquiry.
    let emailSent = false;

    try {
      await sendEnquiryEmail(enquiry);
      emailSent = true;
    } catch (emailError) {
      console.error("Enquiry saved, but email failed:", emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
      emailSent,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
    });
  }
};
