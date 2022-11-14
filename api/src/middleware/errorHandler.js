export const generateNotFoundError = (_req, _res, next) => {
  const error = new Error("Not found");
  error.clientMessage = "Not Found";
  error.status = 404;
  next(error);
};

export const logError = (error, _req, _res, next) => {
  console.log(error);
  next(error);
};

export const sendErrorResponse = (error, _req, res, _next) => {
  res.status(error.status || 500);
  res.json({
    error: error.clientMessage || "Internal server error"
  });
};
