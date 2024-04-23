import mongoose from 'mongoose';

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
  studentInstituteState: String,
});

export const StudentSurvey = mongoose.model("student_survey", studentSurveySchema);