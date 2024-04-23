import express from 'express';
const router = express.Router();
import { institutionLogin, institutionSignUp } from '../controller/institution/institution.js';
import { addDropout } from '../controller/institution/addDropout.js';
import { removeDropout } from '../controller/institution/removeDropout.js';
import { getDropoutStudent } from '../controller/institution/getDropoutStudent.js';
import { checkExistingUser } from '../controller/institution/checkExistingUser.js';
import { getInstitutionUser } from '../controller/institution/getInstitutionUser.js';

router.post("/signup", checkExistingUser, institutionSignUp); 
router.post("/login", institutionLogin )
router.get("/getInstitutionUser", getInstitutionUser )
router.post("/addDropout", addDropout)
router.delete("/removeDropout/:id", removeDropout)
router.get("/getDropoutStudents", getDropoutStudent)

export default router;