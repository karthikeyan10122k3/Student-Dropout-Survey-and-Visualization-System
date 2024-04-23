
import { GovernmentUser } from '../../models/government.js';

export const checkExistingUser = async (req, res, next) => {
  try {
    const { governmentEmail } = req.body;

    const existingUser = await GovernmentUser.findOne({ governmentEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists ,Try SignIn!' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
