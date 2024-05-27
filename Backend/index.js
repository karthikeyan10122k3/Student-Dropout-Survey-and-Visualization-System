import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

import governmentRoute from './routes/government.js'
import institutionRoute from './routes/institution.js'
import studentRoute from './routes/student.js'
import adminRoute from './routes/admin.js'

const app = express();
const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

mongoose.connect(MONGO_URI, {
  dbName: 'StudentDropoutAnalysis' 
}).then(() => {
  console.log('Database connected successfully');
  console.log('Active Database:', mongoose.connection.db.databaseName);

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to database:', error);
});

app.use("/government",governmentRoute)
app.use("/institution",institutionRoute)
app.use("/student",studentRoute)
app.use("/admin",adminRoute)