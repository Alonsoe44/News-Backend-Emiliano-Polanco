import Debug from "debug";

const debug = Debug("news-backend-app:errors");

const notFoundError = (req, res) => {
  res
    .status(404)
    .json({ error: true, message: "Error 404, endpoint not found" });
};

const internatServerError = (err, req, res, next) => {
  debug(`Error: ${err.message}`);
  const errorCode = err.status ?? 500;
  const errorMessage = err.message ?? "Internal server error";
  res.status(errorCode).json({ error: true, message: errorMessage });
};

export { notFoundError, internatServerError };
