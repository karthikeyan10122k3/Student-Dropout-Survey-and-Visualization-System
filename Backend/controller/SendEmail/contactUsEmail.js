import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function contactUsEmail(req, res) {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.DROPOUT_TEAM_EMAIL,
        pass: process.env.DROPOUT_TEAM_EMAIL_PASSKEY,
      },
    });

    const info = await transporter.sendMail({
      from: email,
      to: process.env.DROPOUT_TEAM_EMAIL,
      subject: "Invitation to Provide Feedback on Student Dropout Rate",
      text: `Dear Student Dropout Analysis Team,

        I am ${name},

        Regarding the issue: ${message},

        Should you have any questions or require further assistance, please do not hesitate to reach out to us. We value your input and look forward to your responses.

        Best regards,

        Dropout Survey Team
        Head of Survey Team
        9710740506 / 9940365556`,
      html: `
        <p>Dear Student Dropout Analysis Team,</p>
  
        <p>I am ${name},</p>
  
        <p>Regarding the issue: ${message},</p>
  
        <p>Best regards,</p>
  
        <p>${name}<br>${email}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: `Error occurred while sending email ${error}` });
  }
}
