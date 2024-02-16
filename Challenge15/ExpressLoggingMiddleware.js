function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const { method, url, headers, body } = req;
  console.log(`[${timestamp}] ${method} ${url}`);
  console.log("Headers:", headers);
  console.log("Body:", body);
  next();
}

module.exports = loggingMiddleware;
