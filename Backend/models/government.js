import mongoose from 'mongoose';


const governmentUserSchema = new mongoose.Schema({
  governmentState: String,
  governmentEmail: String,
  governmentPassword: String,
});

export const GovernmentUser = mongoose.model("government_users", governmentUserSchema);

