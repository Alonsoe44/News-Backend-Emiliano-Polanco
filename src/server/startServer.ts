import Debug from "debug";

const debug = Debug("news-backend-app:serverStart");

const startServer = (app, serverPort: number) =>
  new Promise((resolve, reject): void => {
    const server = app.listen(serverPort, () => {
      debug(`Server started on port ${serverPort}`);
      resolve(server);
    });

    server.on("error", (err) => {
      debug(`Oh no the server couldn't start: ${err}`);
      reject();
    });
  });

export default startServer;
