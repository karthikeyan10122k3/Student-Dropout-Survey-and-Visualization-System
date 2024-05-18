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
export async function addInstitutionMail(governmentState, institutionName, institutionEmail , institutionPassword) {
  const info = await transporter.sendMail({
    from: process.env.DROPOUT_TEAM_EMAIL,
    to: institutionEmail,
    subject: "Invitation to Login to the Student Dropout Analysis Website",
    text: `
      Dear ${institutionName},

      This message is from the Government of ${governmentState}.

      We are pleased to invite you to log in to the Student Dropout Analysis website. As part of our ongoing efforts to improve the educational experience and support all students in reaching their full potential, we have launched a platform that allows institutions to provide valuable feedback and access resources related to student retention and dropout rates.

      Your participation is crucial in helping us understand the factors influencing student retention and dropout rates, and in developing strategies for intervention and support.

      Please use the following link to log in to the website and provide your feedback:
      http://localhost:5173/

      Login With the Password: ${institutionPassword}

      At the top right Corner CLick Login -> Institution Login

      Should you have any questions or require further assistance, please do not hesitate to reach out to us. We value your input and look forward to your participation.

      Best regards,

      Dropout Survey Team
      ${governmentState}
    `,
    html: `
      <p>Dear ${institutionName},</p>

      <p>This message is from the Government of ${governmentState}.</p>

      <p>We are pleased to invite you to log in to the <strong>Student Dropout Analysis</strong> website. As part of our ongoing efforts to improve the educational experience and support all students in reaching their full potential, we have launched a platform that allows institutions to provide valuable feedback and access resources related to student retention and dropout rates.</p>

      <p>Your participation is crucial in helping us understand the factors influencing student retention and dropout rates, and in developing strategies for intervention and support.</p>

      <p>Please use the following link to log in to the website and provide your feedback:</p>
      <p><a href="http://localhost:5173/">Login to Student Dropout Analysis</a></p>

      <p>At the top right Corner CLick Login -> Institution Login</p>

      <p>Login With the Password: ${institutionPassword}</p>

      <p>Should you have any questions or require further assistance, please do not hesitate to reach out to us. We value your input and look forward to your participation.</p>

      <p>Best regards,</p>

      <p>Dropout Survey Team<br>${governmentState}</p>
    `,
  });

  console.log('Message sent: %s', info.messageId);
}

