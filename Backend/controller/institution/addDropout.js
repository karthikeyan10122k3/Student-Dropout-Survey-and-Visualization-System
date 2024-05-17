

import { DroppedoutStudent } from "../../models/droppedoutStudent.js";
import { surveyStudentMail } from '../SendEmail/AddDropoutEmail.js'

export const addDropout = async (req, res) => {

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
    const dropoutStudent = new DroppedoutStudent({dropoutStudentEMIS,
      dropoutStudentName,
      dropoutStudentMobile,
      dropoutStudentEmail,
      dropoutStudentInstCode,
      dropoutStudentDate,
      dropoutStudentReason,})

    await dropoutStudent.save()
    surveyStudentMail(dropoutStudentName, dropoutStudentEmail).catch(console.error);
    res.status(201).json({ message: 'Dropout Student user created successfully' });
  }catch (error) {
    console.error(error);
  }
}