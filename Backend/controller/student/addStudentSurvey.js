import { StudentSurvey } from "../../models/studentSurvey.js";

export const addStudentSurvey = async (req, res) => {
  
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
      studentInstituteState,
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
      !furtherEducationPlans ||
      !studentInstituteState
    ) {
      return res.status(400).json({ message: "Survey missing required fields" });
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
      studentInstituteState,
    });

    await studentSurvey.save();
    res.status(201).json({ message: "Survey submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}