import { StudentSurvey } from "../../models/studentSurvey.js";

export const getStudentSurvey = async (req, res) => {
  
  try {
    const studentSurvey = await StudentSurvey.find({});
    res.json(studentSurvey);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}