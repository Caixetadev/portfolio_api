import Router from "express";
import {
  Home,
  HomeDelete,
  HomePost,
  HomeUpdate,
} from "../controllers/homeController";
import cors from "cors";
const router = Router();

const whitelist = ["https://gbxxy.com/"];

const options: cors.CorsOptions = {
  origin: whitelist,
};

router.get("/", Home);
router.post("/", HomePost);
router.delete("/:id", HomeDelete);
router.patch("/:id", HomeUpdate);

export { router, options };
