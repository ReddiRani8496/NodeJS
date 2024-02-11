function myMiddleware2(req, res, next) {
  console.log("I am second custom middleware");
  next();
}
module.exports = myMiddleware2;
