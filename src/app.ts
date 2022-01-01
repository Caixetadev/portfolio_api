import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import "dotenv/config";
import { router } from "./routes/routes";

const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;

const app = express();

const whitelist = [
  "https://portfolio2-0-gamma.vercel.app/",
  "http://localhost:3000/",
];

const options: cors.CorsOptions = {
  origin: whitelist,
};

app.use(express.json());
app.use(cors(options));
app.use(router);

const connectDB = (): void => {
  try {
    Mongoose.connect(
      `mongodb+srv://${USER_DB}:${PASSWORD_DB}@apiportfolio.dq7se.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );

    console.log("Mongoose conected");
  } catch (error) {
    console.log({ error: error });
  }
};

connectDB();

export { app };
