<<<<<<< HEAD

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT || 587) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
=======
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
>>>>>>> aa599d7 (Save local changes)
  },
});

export const sendEnquiryEmail = async (enquiry) => {
  const { name, company, email, phone, subject, message } = enquiry;

<<<<<<< HEAD
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("Brevo SMTP credentials are missing.");
  }

  const sender = process.env.MAIL_FROM || "info@athangexim.com";
  const recipient = process.env.MAIL_TO || "info@athangexim.com";

  await transporter.sendMail({
    from: {
      name: "Athang Enterprises Website",
      address: sender,
    },
    to: recipient,
=======
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.CLIENT_EMAIL,
>>>>>>> aa599d7 (Save local changes)
    replyTo: email,
    subject: `New Enquiry: ${subject || "Website Enquiry"}`,
    text: `
New enquiry received from the Athang Enterprises website.

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message}
    `,
  });
<<<<<<< HEAD

  console.log("Enquiry notification email sent successfully.");
};
=======
};
>>>>>>> aa599d7 (Save local changes)
