import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import governmentRoute from './routes/government.js'
import institutionRoute from './routes/institution.js'
import studentRoute from './routes/student.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

  app.use("/government",governmentRoute)
  app.use("/institution",institutionRoute)
  app.use("/student",studentRoute)



