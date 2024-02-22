const { Course, validate } = require("./models/coursemodel");
const { Category } = require("./models/categorymodel");
const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send("Invalid category ID");

  let course = new Course({
    name: req.body.title,
    category: { _id: category._id, name: category.name },
    creator: req.body.creator,
    rating: req.body.rating,
  });
  course = await course.save();
  res.send(course);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send("Invalid category ID");

  const course = await Course.findByIdAndUpdate(
    requ.params.id,
    {
      title: req.body.title,
      category: { _id: category._id, name: category.name },
      creator: req.body.creator,
      rating: req.body.rating,
    },
    { new: true }
  );
  if (!course) return res.status(404).send("Course not found");
  res.send(course);
});

router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  if (!course) return res.status(404).send("Course not found");
  res.send(course);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).send("Course not found");
  res.send(course);
});

module.exports = router;
