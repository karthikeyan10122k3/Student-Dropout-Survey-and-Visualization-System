import mongoose from 'mongoose';

const studentUserSchema = new mongoose.Schema({
  studentEmisNumber: String,
  studentName: String,
  studentInstituteCode: String,
  studentState: String,
  studentMobileNumber: String,
  studentEmail: String,
});

export const StudentUser = mongoose.model("student_users", studentUserSchema);