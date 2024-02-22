const Joi = require("joi");
const mongoose = require("mongoose");
const { categorySchema } = require("./categorymodel");
const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    category: { type: categorySchema, required: true },
    description: { type: String, required: true, minlength: 3, maxlength: 50 },
    isPublished: { type: Boolean, default: false },
    creator: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    rating: {
      type: Number,
      required: true,
    },
  })
);

function validateCourse(course) {
  const schema = {
    title: Joi.string().min(3).required(),
    categoryId: Joi.string().min(3).required(),
    creator: Joi.string().min(3).required(),
    rating: Joi.number().required(),
  };
  return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;
