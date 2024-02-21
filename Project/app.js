const express = require("express");
const mongoose = require("mongoose");
const category = require("./category");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/learningPlatform")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(express.json());
app.use(category);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
