import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

function start () {
  app.listen(PORT, () => {console.log(`Server is working on port: ${PORT}...`)});
}

start();

