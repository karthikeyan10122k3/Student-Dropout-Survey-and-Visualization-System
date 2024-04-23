
import { InstitutionUser } from '../../models/institution.js';

export const checkExistingUser = async (req, res, next) => {
  try {
    const { institutionEmail } = req.body;

    const existingInstitution = await InstitutionUser.findOne({ institutionEmail });
    if (existingInstitution) {
      return res.status(400).json({ message: 'User already exists' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
