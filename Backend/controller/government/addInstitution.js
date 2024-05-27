import { InstitutionUser } from "../../models/institution.js";
import bcrypt from 'bcrypt';
import { addInstitutionMail } from "../SendEmail/addInstitutionEmail.js";

export const addInstitution = async(req,res) => {
  const saltRounds =5;
  try{
    const {
      institutionCode,
      institutionName,
      institutionState,
      governmentState,
      institutionEmail,
      institutionPassword,
      institutionWebsite,
    } = req.body
    // console.log(institutionCode,
    //   institutionName,
    //   institutionState,
    //   governmentState,
    //   institutionEmail,
    //   institutionPassword,
    //   institutionWebsite)
    if(
      !institutionCode || 
      !institutionName || 
      !institutionState || 
      !institutionEmail || 
      !governmentState || 
      !institutionPassword
      ){
      return res.status(400).json({ message: 'Institution Missing required fields' });
    }
    bcrypt.hash(institutionPassword, saltRounds, async (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Error occurred while hashing password' });
      }

      try {
        const institutionUser = new InstitutionUser({
          institutionCode,
          institutionName,
          institutionState,
          institutionEmail,
          institutionPassword :hashedPassword ,
          institutionWebsite,
        })
        await institutionUser.save()
        addInstitutionMail(governmentState,institutionName,institutionEmail ,institutionPassword)
        res.status(201).json({ message: 'Institution user created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred while saving user' });
      }
    });
    
  }catch (error) {
    console.error(error);
  }
  
}