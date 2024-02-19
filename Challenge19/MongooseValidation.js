const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
});

const User = mongoose.model("User", userSchema);

function addUserWithValidation(user) {
  const newUser = new User(user);

  newUser.save(function (err) {
    if (err) {
      console.error("Error adding user:", err.message);
    } else {
      console.log("User added successfully!");
    }
  });
}

addUserWithValidation({ username: "john_doe", email: "invalid-email" });
