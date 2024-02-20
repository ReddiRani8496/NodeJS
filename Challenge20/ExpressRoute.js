const express = require("express");
const router = express.Router();
const User = require("./models/User"); // Assuming you have a User model

async function averageAgeOfUsers(req, res) {
  try {
    const aggregationResult = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" },
        },
      },
    ]);

    if (aggregationResult.length > 0) {
      const averageAge = aggregationResult[0].averageAge;
      res.json({ averageAge });
    } else {
      res.status(404).json({ error: "No users found" });
    }
  } catch (error) {
    console.error("Error calculating average age:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

router.get("/average-age", averageAgeOfUsers);

module.exports = router;
