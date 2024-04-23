import { StudentUser } from '../../models/student.js';

export const studentSignUp = async (req, res) => {
  try {
    const {
      studentName,
      studentEmail,
      studentMobileNumber,
      studentState,
      studentInstituteCode,
      studentEmisNumber,
    } = req.body;

    if (
      !studentEmisNumber ||
      !studentName ||
      !studentInstituteCode ||
      !studentState ||
      !studentMobileNumber ||
      !studentEmail
    ) {
      return res.status(400).json({ message: 'Student Missing required fields' });
    }

    const existingStudent = await StudentUser.findOne({ studentEmisNumber });

    if (existingStudent) {
      return res.status(409).json({ message: 'Survey Already Submitted' });
    }

    const student = new StudentUser({
      studentEmisNumber,
      studentName,
      studentInstituteCode,
      studentState,
      studentMobileNumber,
      studentEmail,
    });

    await student.save();
    res.status(201).json({ message: 'Student user created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
