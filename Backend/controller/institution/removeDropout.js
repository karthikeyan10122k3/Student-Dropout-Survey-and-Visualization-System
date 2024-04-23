import { DroppedoutStudent } from "../../models/droppedoutStudent.js";

export const removeDropout = async (req, res) => {
  
  const studentId = req.params.id;
  try {
    const deletedStudent = await DroppedoutStudent.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student removed successfully" });
  } catch (error) {
    console.error("Error removing student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}