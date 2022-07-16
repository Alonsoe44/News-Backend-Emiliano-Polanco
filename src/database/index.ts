import mongoose from "mongoose";
import Debug from "debug";

const debug = Debug("news-backend-app:database");

const connectDatabase = (connectionCredentials: string) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", false);
    mongoose.connect(connectionCredentials, (error) => {
      if (error) {
        debug(`Oh no the database couldn't start: ${error}`);
        reject(error);
      }
      debug("Database connected");
      resolve("Perfect");
    });
  });

export default connectDatabase;
