import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoute from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(cors());
app.use(express.json());

app.use('/api/auth/', authRoute);

async function start () {
  try {
    await mongoose.connect(`mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.oden63z.mongodb.net/test`)

    app.listen(PORT, () => {console.log(`Server is working on port: ${PORT}...`)});

  } catch (err) {
    console.log(err)
  }
}

start();

