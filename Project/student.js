const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");

const router = express.Router();

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  isEnrolled: { type: Boolean, default: false },
  phone: { type: String, required: true, minlength: 10, maxlength: 25 },
});

const Student = mongoose.model("Student", studentSchema);

router.get("/api/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/api/student", async (req, res) => {
  const { error } = validateData(req.body);
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

function validateData(student) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    isEnrolled: Joi.boolean(),
    phone: Joi.string().allow("").optional(), // Allow empty string or optional
  });
  return schema.validate(student);
}

module.exports = router;
