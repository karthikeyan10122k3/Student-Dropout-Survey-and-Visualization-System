import { StudentUser } from "../../models/student.js";


export const checkExistingUser = async (req, res, next) => {
  try {
    const { studentEmail } = req.body;

    const existingInstitution = await StudentUser.findOne({ studentEmail });
    if (existingInstitution) {
      return res.status(400).json({ message: 'Student already Gave Survey' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
