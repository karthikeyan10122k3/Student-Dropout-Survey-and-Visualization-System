import { DroppedoutStudent } from "../../models/droppedoutStudent.js";
export const getDropoutStudent = async (req, res) => {
  
  try {
    const students = await DroppedoutStudent.find({});
    // console.log(students)
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}