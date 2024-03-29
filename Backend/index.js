import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'

dotenv.config();
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

const saltRounds = 5

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });



  //For Government
  const governmentUserSchema = new mongoose.Schema({
    governmentState: String,
    governmentEmail: String,
    governmentPassword: String,
  });
  
  const GovernmentUser = mongoose.model("government_users", governmentUserSchema);
  
  app.post("/newGovUser/signup", async (req, res) => {
    try {
      const { governmentState, governmentEmail, governmentPassword } = req.body;
  
      if (!governmentState || !governmentEmail || !governmentPassword) {
        return res.status(400).json({ message: 'Government Missing required fields' });
      }
  
      bcrypt.hash(governmentPassword, saltRounds, async (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: 'Error occurred while hashing password' });
        }
  
        try {
          const governmentUser = new GovernmentUser({ governmentState, governmentEmail, governmentPassword: hashedPassword });
          await governmentUser.save();
          res.status(201).json({ message: 'Government user created successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error occurred while saving user' });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  app.post("/getGovernmentUser/login", async (req, res) => {
    try {
      const { governmentEmail, governmentPassword } = req.body;
  
      const user = await GovernmentUser.findOne({ governmentEmail });
  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      const userHashedPassword = user.governmentPassword;
  
      bcrypt.compare(governmentPassword, userHashedPassword, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Error occurred while comparing password" });
        }
        if (result) {
          res.send({ logInAccepted: true });
        } else {
          res.send({ logInAccepted: false });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


//For Institution
const institutionUserSchema = new mongoose.Schema({
  institutionCode: String,
  institutionName: String,
  institutionState: String,
  institutionEmail: String,
  institutionPassword: String,
})

const InstitutionUser = mongoose.model("institution_users",institutionUserSchema)

app.post("/newInstitutionUser/signup", async(req,res) => {
  try{
    const {
      institutionCode,
      institutionName,
      institutionState,
      institutionEmail,
      institutionPassword
    } = req.body
    if(
      !institutionCode || 
      !institutionName || 
      !institutionState || 
      !institutionEmail || 
      !institutionPassword
      ){
      return res.status(400).json({ message: 'Institution Missing required fields' });
    }
    const institutionUser = new InstitutionUser({
      institutionCode,
      institutionName,
      institutionState,
      institutionEmail,
      institutionPassword
    })
    await institutionUser.save()
    res.status(201).json({ message: 'Institution user created successfully' });
  }catch (error) {
    console.error(error);
  }
})

app.get("/getInstitutionUser/login", async (req, res) => {
  try {
    const users = await InstitutionUser.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//for Student Signup

const studentUserSchema = new mongoose.Schema({
  studentEmisNumber: String,
  studentName: String,
  studentInstituteCode: String,
  studentState: String,
  studentMobileNumber: String,
  studentEmail: String,
})

const StudentUser = mongoose.model("student_users",studentUserSchema)

app.post("/newStudentUser/signup", async(req,res) => {
  try{
    const {
      studentEmisNumber,
      studentName,
      studentInstituteCode,
      studentState,
      studentMobileNumber,
      studentEmail
    } = req.body
    if(
      !studentEmisNumber || 
      !studentName || 
      !studentInstituteCode || 
      !studentState || 
      !studentMobileNumber || 
      !studentEmail
      ){
      return res.status(400).json({ message: 'Student Missing required fields' });
    }
    const student = new StudentUser({studentEmisNumber,
      studentName,
      studentInstituteCode,
      studentState,
      studentMobileNumber,
      studentEmail})
    await student.save()
    res.status(201).json({ message: 'Student user created successfully' });
  }catch (error) {
    console.error(error);
  }
})

//For Adding Dropout
const addDropoutSchema = new mongoose.Schema({
  dropoutStudentInstName: String,                     //caution changes made here
  dropoutStudentName: String,
  dropoutStudentEMIS: String,
  dropoutStudentMobile: String,
  dropoutStudentEmail: String,
  dropoutStudentDate: String,
  dropoutStudentInstCode: String,
  dropoutStudentReason: String,
});

const DropoutStudent = mongoose.model("add_dropouts", addDropoutSchema);

app.post("/addDropout", async (req, res) => {

  try{
    const {
      dropoutStudentEMIS,
      dropoutStudentName,
      dropoutStudentMobile,
      dropoutStudentEmail,
      dropoutStudentInstCode,
      dropoutStudentDate,
      dropoutStudentReason,
    } = req.body

    if(!dropoutStudentEMIS || 
      !dropoutStudentName || 
      !dropoutStudentMobile || 
      !dropoutStudentInstCode || 
      !dropoutStudentDate || 
      !dropoutStudentReason){
      return res.status(400).json({ message: 'Dropout Student Missing required fields' });
    }
    const dropoutStudent = new DropoutStudent({dropoutStudentEMIS,
      dropoutStudentName,
      dropoutStudentMobile,
      dropoutStudentEmail,
      dropoutStudentInstCode,
      dropoutStudentDate,
      dropoutStudentReason,})

    await dropoutStudent.save()
    main(dropoutStudentName, dropoutStudentEmail).catch(console.error);
    res.status(201).json({ message: 'Dropout Student user created successfully' });
  }catch (error) {
    console.error(error);
  }
});

app.get("/getDropoutStudents", async (req, res) => {
  try {
    const students = await DropoutStudent.find({});
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// For Removing
app.delete("/removeDropout/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const deletedStudent = await DropoutStudent.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student removed successfully" });
  } catch (error) {
    console.error("Error removing student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// StudentSurvey
const studentSurveySchema = new mongoose.Schema({
  dropoutStudentDate: String,
  religion: String,
  age: String,
  gender: String,
  socioeconomicStatus: String,
  schoolType: String,
  previousPerformance: String,
  dropoutReason: String,
  futurePlans: String,
  employmentGoals: String,
  furtherEducationPlans: String,
});

const StudentSurvey = mongoose.model("student_survey", studentSurveySchema);

app.post("/studentSurveySubmit", async (req, res) => {
  try {
    const {
      dropoutStudentDate,
      religion,
      age,
      gender,
      socioeconomicStatus,
      schoolType,
      previousPerformance,
      dropoutReason,
      futurePlans,
      employmentGoals,
      furtherEducationPlans,
    } = req.body;

    if (
      !dropoutStudentDate ||
      !religion ||
      !age ||
      !gender ||
      !socioeconomicStatus ||
      !schoolType ||
      !previousPerformance ||
      !dropoutReason ||
      !futurePlans ||
      !employmentGoals ||
      !furtherEducationPlans
    ) {
      return res
        .status(400)
        .json({ message: "Survey missing required fields" });
    }

    const studentSurvey = new StudentSurvey({
      dropoutStudentDate,
      religion,
      age,
      gender,
      socioeconomicStatus,
      schoolType,
      previousPerformance,
      dropoutReason,
      futurePlans,
      employmentGoals,
      furtherEducationPlans,
    });

    await studentSurvey.save();
    res.status(201).json({ message: "Survey submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/studentSurveySubmit", async (req, res) => {
  try {
    const studentSurvey = await StudentSurvey.find({});
    res.json(studentSurvey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// For Sending Email

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_GMAIL_ADDRESS,
    pass: process.env.SENDER_GMAIL_PASSWORD,
  },
});

async function main(dropoutStudentName,dropoutStudentEmail) {
  const info = await transporter.sendMail({
    from: process.env.SENDER_GMAIL_ADDRESS,
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

