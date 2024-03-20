import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}))


app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());
const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

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
    const governmentUser = new GovernmentUser({ governmentState, governmentEmail, governmentPassword });
    await governmentUser.save();
    res.status(201).json({ message: 'Government user created successfully' });
  } catch (error) {
    console.error(error);
  }
});

app.get("/getGovernmentUser/login", async (req, res) => {
  try {
    const users = await GovernmentUser.find({}, { governmentEmail: 1, governmentPassword: 1, _id: 0 });
    res.json(users);
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
    const {institutionCode,institutionName,institutionState,institutionEmail,institutionPassword} = req.body
    if(!institutionCode || !institutionName || !institutionState || !institutionEmail || !institutionPassword){
      return res.status(400).json({ message: 'Institution Missing required fields' });
    }
    const government = new InstitutionUser({institutionCode,institutionName,institutionState,institutionEmail,institutionPassword})
    await government.save()
    res.status(201).json({ message: 'Institution user created successfully' });
  }catch (error) {
    console.error(error);
  }
})

app.get("/getInstitutionUser/login", async (req, res) => {
  try {
    const users = await InstitutionUser.find({}, { institutionEmail: 1, institutionPassword: 1, _id: 0 });
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
    const {studentEmisNumber,studentName,studentInstituteCode,studentState,studentMobileNumber,studentEmail} = req.body
    if(!studentEmisNumber || !studentName || !studentInstituteCode || !studentState || !studentMobileNumber || !studentEmail){
      return res.status(400).json({ message: 'Student Missing required fields' });
    }
    const student = new StudentUser({studentEmisNumber,studentName,studentInstituteCode,studentState,studentMobileNumber,studentEmail})
    await student.save()
    res.status(201).json({ message: 'Student user created successfully' });
  }catch (error) {
    console.error(error);
  }
})

//For Adding Dropout
const addDropoutSchema = new mongoose.Schema({
  dropoutStudentName: String,
  dropoutStudentEMIS: String,
  dropoutStudentMobile: String,
  dropoutStudentEmail: String,
  dropoutStudentDate: String,
  dropoutStudentInstCode: String,
  dropoutStudentReason: String,
});

const dropoutStudent = mongoose.model("add_dropouts", addDropoutSchema);

app.post("/addDropout", async (req, res) => {

  try{
    const {
      dropoutStudentEMIS,dropoutStudentName,dropoutStudentMobile,dropoutStudentEmail,dropoutStudentInstCode,dropoutStudentDate,dropoutStudentReason,} = req.body

    if(!dropoutStudentEMIS || !dropoutStudentName || !dropoutStudentMobile || !dropoutStudentInstCode || !dropoutStudentDate || !dropoutStudentReason){
      return res.status(400).json({ message: 'Dropout Student Missing required fields' });
    }
    const dropoutStudent = new dropoutStudent({dropoutStudentEMIS,dropoutStudentName,dropoutStudentMobile,dropoutStudentEmail,dropoutStudentInstCode,dropoutStudentDate,dropoutStudentReason,})
    await dropoutStudent.save()
    res.status(201).json({ message: 'Dropout Student user created successfully' });
  }catch (error) {
    console.error(error);
  }
});

app.get("/getDropoutStudents", async (req, res) => {
  try {
    const students = await dropoutStudent.find({});
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
    const deletedStudent = await dropoutStudent.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student removed successfully" });
  } catch (error) {
    console.error("Error removing student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});