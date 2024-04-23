import { GovernmentUser } from "../../models/government.js";


export const getGovernmentUsers = async (req, res) => {
  
  try {
    const governments = await GovernmentUser.find({});
    res.json(governments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}