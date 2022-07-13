import express from "express";
import { getNewsController } from "../controllers/newsControllers";

const newsRouter = express.Router();

newsRouter.get("/", getNewsController);

export default newsRouter;
