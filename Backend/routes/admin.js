import express from 'express';
import { contactUsEmail } from '../controller/SendEmail/contactUsEmail.js';
const router = express.Router();


router.post("/contact", contactUsEmail)


export default router;
