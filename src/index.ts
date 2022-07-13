/* eslint-disable import/first */
import dotenv from "dotenv";

dotenv.config();
import Debug from "debug";
import startServer from "./server/startServer";
import app from "./server";
import connectDatabase from "./database";

const debug = Debug("news-backend-app:root");

const serverPort = process.env.PORT ?? 3000;
const credentials = process.env.LOGIN_CREDENTIALS ?? " ";

(async () => {
  try {
    await connectDatabase(credentials);
    await startServer(app, +serverPort);
  } catch (e) {
    debug("The server failed to start");
  }
})();
