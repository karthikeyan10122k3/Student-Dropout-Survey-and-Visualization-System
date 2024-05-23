import { InstitutionUser } from "../../models/institution.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export const institutionSignUp = async(req,res) => {
  const saltRounds =5;
  try{
    const {
      institutionCode,
      institutionName,
      institutionState,
      institutionEmail,
      institutionPassword,
      institutionWebsite,
    } = req.body
    
    if(
      !institutionCode || 
      !institutionName || 
      !institutionState || 
      !institutionEmail || 
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

export const institutionLogin = async (req, res) => {

  try {
    const { institutionEmail, institutionPassword } = req.body;
    // console.log("IN SERVER SIDE: ", institutionEmail, institutionPassword )

    const user = await InstitutionUser.findOne({ institutionEmail });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const userHashedPassword = user.institutionPassword;

    bcrypt.compare(institutionPassword, userHashedPassword, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error occurred while comparing password" });
      }
      if (result) {
        const accessToken = jwt.sign({email: institutionEmail}, process.env.ACCESS_TOKEN_SECRET,{
          expiresIn: "1h"
        })
        res.json({ email: institutionEmail , role : user.role , accessToken: accessToken});
      } else {
        res.json({ message:"Invalid Credentials" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

