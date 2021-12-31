import Router from "express";
import {
  Home,
  HomeDelete,
  HomePost,
  HomeUpdate,
} from "../controllers/homeController";
const router = Router();

router.get("/", Home);
router.post("/", HomePost);
router.delete("/:id", HomeDelete);
router.patch("/:id", HomeUpdate);

export { router };
