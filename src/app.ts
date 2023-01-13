import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import "dotenv/config";
import { router } from "./routes/routes";
import mongoose from "mongoose";

const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

//MongoDB connect, remove unless variable
((): void => {
  try {
    Mongoose.connect(
      `mongodb+srv://${USER_DB}:${PASSWORD_DB}@apiportfolio.dq7se.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    //Remove console.log, false positive connect
  } catch (error) {
    console.log({ error: error });
  }
})();

export { app };
