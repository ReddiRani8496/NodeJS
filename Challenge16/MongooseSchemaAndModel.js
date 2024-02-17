const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function addUserToDatabase(user) {
  try {
    const newUser = new User({
      username: user.username,
      email: user.email,
    });
    await newUser.save();
    console.log("User added successfully:", newUser);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

addUserToDatabase({ username: "john_doe", email: "john@example.com" });
