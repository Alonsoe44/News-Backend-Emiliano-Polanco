/* eslint-disable import/first */
import dotenv from "dotenv";

dotenv.config();
import Debug from "debug";
import startServer from "./server/startServer";
import app from "./server";

const debug = Debug("news-backend-app:root");

const serverPort = process.env.PORT ?? 3000;

(async () => {
  try {
    await startServer(app, +serverPort);
  } catch (e) {
    debug("The server failed to start");
  }
})();
