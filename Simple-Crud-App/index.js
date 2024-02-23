const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/products", productRoute);

const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/mydatabase1";

// Define routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
