import mongoose from 'mongoose';


const institutionUserSchema = new mongoose.Schema({
  institutionCode: String,
  institutionName: String,
  institutionState: String,
  institutionEmail: String,
  institutionPassword: String,
  institutionLogo: String,
  institutionWebsite: String,
  role: {
    type: String,
    default: 'institution' 
  }
},
{
  timestamps:true,
});

export const InstitutionUser = mongoose.model("institution_users", institutionUserSchema);