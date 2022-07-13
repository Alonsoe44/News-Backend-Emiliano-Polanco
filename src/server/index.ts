/* eslint-disable import/first */
import dotenv from "dotenv";

dotenv.config();

import express from "express";
import { internatServerError, notFoundError } from "./middlewares/errors";
import newsRouter from "./routers/newsRouter";

const app = express();

app.use("/news", newsRouter);
app.use(notFoundError);
app.use(internatServerError);
export default app;
