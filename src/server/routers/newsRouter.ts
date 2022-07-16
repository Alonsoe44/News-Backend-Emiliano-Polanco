import express from "express";
import {
  deleteNewsController,
  editNewsController,
  getNewsController,
} from "../controllers/newsControllers";

const newsRouter = express.Router();

newsRouter.get("/", getNewsController);
newsRouter.patch("/:id", editNewsController);
newsRouter.delete("/:id", deleteNewsController);

export default newsRouter;
