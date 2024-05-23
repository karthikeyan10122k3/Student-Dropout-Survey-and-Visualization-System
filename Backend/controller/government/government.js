
import bcrypt from 'bcrypt';
import { GovernmentUser } from '../../models/government.js';
import jwt from 'jsonwebtoken';


export const governmentSignUp =  async (req, res) => {
  const saltRounds = 10
  try {
    const { governmentState, governmentEmail, governmentPassword } = req.body;
    console.log( governmentState, governmentEmail, governmentPassword )

    bcrypt.hash(governmentPassword, saltRounds, async (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Error occurred while hashing password' });
      }

      try {
        const governmentUser = new GovernmentUser({ governmentState, governmentEmail, governmentPassword: hashedPassword });
        await governmentUser.save();
        res.status(201).json({ message: 'Government user created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred while saving user' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export const governmentLogin =  async (req, res) => {
  try {
    const { governmentEmail, governmentPassword } = req.body;

    const user = await GovernmentUser.findOne({ governmentEmail });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const userHashedPassword = user.governmentPassword;

    bcrypt.compare(governmentPassword, userHashedPassword, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error occurred while comparing password" });
      }
      if (result) {
        const accessToken = jwt.sign({ email: governmentEmail }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1h"
        });
        res.json({email:governmentEmail ,role:user.role , accessToken: accessToken });
      } 
      else {
        res.json({ message: "Invalid Credentials" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}