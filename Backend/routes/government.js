import express from 'express';
const router = express.Router();
import { governmentLogin, governmentSignUp } from '../controller/government/government.js';
import { checkExistingUser } from '../controller/government/checkExistingUser.js';
import { getGovernmentUsers } from '../controller/government/getGovernmentUsers.js';
import { addInstitution } from '../controller/government/addInstitution.js';


router.post("/signup", checkExistingUser, governmentSignUp);
router.post("/addInstitution",addInstitution);
router.post("/login", governmentLogin)
router.get("/getUsers", getGovernmentUsers)

export default router;
