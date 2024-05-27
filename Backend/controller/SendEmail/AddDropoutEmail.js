import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.DROPOUT_TEAM_EMAIL,
    pass: process.env.DROPOUT_TEAM_EMAIL_PASSKEY,
  },
});
export async function surveyStudentMail(dropoutStudentName,dropoutStudentEmail) {
  const info = await transporter.sendMail({
    from: process.env.DROPOUT_TEAM_EMAIL,
    to: dropoutStudentEmail, 
    subject: "Invitation to Provide Feedback on Student Dropout Rate", 
    text: "Hello this Message is from Student Dropout rate User, Kindly fill the FeedBack Form", 
    html: `
      <p>Dear ${dropoutStudentName},</p>

      <p>I hope this message finds you well. We are reaching out to solicit your valuable feedback on the topic of student dropout rates. Your insights and perspectives are crucial in helping us understand and address this important issue effectively.</p>

      <p>As a part of our ongoing efforts to improve the educational experience and support all students in reaching their full potential, we have developed a brief feedback form. Your responses will contribute significantly to our understanding of the factors influencing student retention and dropout rates, as well as inform our strategies for intervention and support.</p>

      <p>Your participation in this survey is greatly appreciated and will remain confidential. Please take a few moments to complete the feedback form by clicking on the link provided below:</p>

      <p>http://localhost:5173/register/student</p>

      <p>Your feedback is instrumental in shaping the future initiatives aimed at reducing student dropout rates and fostering a supportive learning environment for all. Thank you in advance for your time and contribution.</p>

      <p>Should you have any questions or require further assistance, please do not hesitate to reach out to us. We value your input and look forward to your responses.</p>

      <p>Best regards,</p>

      <p>Dropout Survey Team<br>Head of Survey Team<br>9710740506 / 9940365556</p>
    `, 
  });

  console.log("Message sent: %s", info.messageId);
}
