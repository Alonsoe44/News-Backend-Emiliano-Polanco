/* eslint-disable import/first */
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import { internatServerError, notFoundError } from "./middlewares/errors";
import newsRouter from "./routers/newsRouter";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use(express.json());
app.use("/news", newsRouter);

app.use(notFoundError);
app.use(internatServerError);
export default app;
