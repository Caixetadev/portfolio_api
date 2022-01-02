import Router from "express";
import {
  Home,
  HomeDelete,
  HomePost,
  HomeUpdate,
} from "../controllers/homeController";
const router = Router();
import { isAuthenticated } from "../middlewares/isAuthenticated";

router.get("/", Home);
router.post("/", isAuthenticated, HomePost);
router.delete("/:id", isAuthenticated, HomeDelete);
router.patch("/:id", isAuthenticated, HomeUpdate);

export { router };
