function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} request received`);
  next();
}

module.exports = requestLoggerMiddleware;
