<<<<<<< HEAD

import Enquiry from "../models/Enquiry.js";
import { sendEnquiryEmail } from "../services/emailService.js";

=======
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

>>>>>>> aa599d7 (Save local changes)
export const createEnquiry = async (req, res) => {
  try {
    const { name, company, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

<<<<<<< HEAD
    // Save the enquiry first.
=======
>>>>>>> aa599d7 (Save local changes)
    const enquiry = await Enquiry.create({
      name,
      company,
      email,
      phone,
      subject,
      message,
    });

<<<<<<< HEAD
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
=======
    await sendEnquiryEmail(enquiry);

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
>>>>>>> aa599d7 (Save local changes)
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);

<<<<<<< HEAD
    return res.status(500).json({
=======
    res.status(500).json({
>>>>>>> aa599d7 (Save local changes)
      success: false,
      message: "Failed to submit enquiry",
    });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> aa599d7 (Save local changes)
