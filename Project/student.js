const express = require("express");
const router = express.Router();

const { Student, validate } = require("./models/studentmodel");

router.get("/api/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/api/student", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newStudent = new Student({
    name: req.body.name,
    isEnrolled: req.body.isEnrolled || false, // Set default if not provided
    phone: req.body.phone || "", // Set default if not provided
  });
  try {
    await newStudent.save();
    res.send(newStudent);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put("/api/student/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        isEnrolled: req.body.isEnrolled || false,
        phone: req.body.phone || "",
      },
      { new: true }
    );
    if (!student) return res.status(404).send("Student not found");
    res.send(student);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/api/student/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndRemove(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.send(student);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/api/student/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.send(student);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
