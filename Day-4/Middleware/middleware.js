function myMiddleware(req, res, next) {
  console.log("I am first custom middleware");
  next();
}
module.exports = myMiddleware;
