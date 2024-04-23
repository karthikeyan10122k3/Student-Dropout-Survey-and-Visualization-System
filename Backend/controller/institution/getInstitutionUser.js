import { InstitutionUser } from "../../models/institution.js";


export const getInstitutionUser = async (req, res) => {
  
  try {
    const institutions = await InstitutionUser.find({});
    res.json(institutions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}