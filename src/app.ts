import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import "dotenv/config";

const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

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
