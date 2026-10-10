import Enquiry from "../models/Enquiry.js";
// added import statement for email service
import { sendEnquiryEmail } from "../services/emailService.js";

// export const createEnquiry = async (req, res) => {
//   try {
//     const { name, company, email, phone, subject, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email and message are required",
//       });
//     }

//     const enquiry = await Enquiry.create({
//       name,
//       company,
//       email,
//       phone,
//       subject,
//       message,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Enquiry submitted successfully",
//       enquiry,
//     });
//   } catch (error) {
//     console.error("Error creating enquiry:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to submit enquiry",
//     });
//   }
// };

export const createEnquiry = async (req, res) => {
  try {
    const { name, company, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      company,
      email,
      phone,
      subject,
      message,
    });

    await sendEnquiryEmail(enquiry);

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
    });
  }
};