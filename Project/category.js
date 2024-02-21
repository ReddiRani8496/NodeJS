const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");

const router = express.Router();

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
});

const Category = mongoose.model("Category", categorySchema);

router.get("/api/category", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/api/category", async (req, res) => {
  const { error } = validateData(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newCategory = new Category({
    name: req.body.name,
  });
  try {
    await newCategory.save();
    res.send(newCategory);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put("/api/category/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      { new: true }
    );
    if (!category) return res.status(404).send("Category not found");
    res.send(category);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/api/category/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) return res.status(404).send("Category not found");
    res.send(category);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/api/category/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send("Category not found");
    res.send(category);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

function validateData(category) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(category);
}

module.exports = router;
