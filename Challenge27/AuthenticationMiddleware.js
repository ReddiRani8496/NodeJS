const secretKey = "your_secret_key";
function authenticateAndAuthorize(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;

    const user = users.find((user) => user.id === decoded.id);
    if (!user || user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access forbidden. Insufficient privileges." });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
}
