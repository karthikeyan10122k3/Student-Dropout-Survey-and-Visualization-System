import mongoose from 'mongoose';

const droppedoutStudentSchema = new mongoose.Schema({
  dropoutStudentInstName: String,
  dropoutStudentName: String,
  dropoutStudentEMIS: String,
  dropoutStudentMobile: String,
  dropoutStudentEmail: String,
  dropoutStudentDate: String,
  dropoutStudentInstCode: String,
  dropoutStudentReason: String,
},
{
  timestamps:true,
});

export const DroppedoutStudent = mongoose.model("add_dropouts", droppedoutStudentSchema);