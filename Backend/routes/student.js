import express from 'express';
const router = express.Router();
import { studentSignUp } from '../controller/student/student.js';
import { addStudentSurvey } from '../controller/student/addStudentSurvey.js';
import { getStudentSurvey } from '../controller/student/getStudentSurvey.js';

router.post("/signup", studentSignUp)
router.post("/surveySubmit", addStudentSurvey)
router.get("/surveySubmit", getStudentSurvey)


export default router;
