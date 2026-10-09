import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEnquiryEmail = async (enquiry) => {
  const { name, company, email, phone, subject, message } = enquiry;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.CLIENT_EMAIL,
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
};