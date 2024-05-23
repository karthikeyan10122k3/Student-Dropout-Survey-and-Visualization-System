import mongoose from 'mongoose';

const governmentUserSchema = new mongoose.Schema({
  governmentState: String,
  governmentEmail: String,
  governmentPassword: String,
  role: {
    type: String,
    default: 'government' 
  }
},
{
  timestamps:true,
});

export const GovernmentUser = mongoose.model('government_users', governmentUserSchema);
