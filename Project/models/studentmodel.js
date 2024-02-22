const Joi = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  isEnrolled: { type: Boolean, default: false },
  phone: { type: String, required: true, minlength: 10, maxlength: 25 },
});

const Student = mongoose.model("Student", studentSchema);

function validateData(student) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    isEnrolled: Joi.boolean(),
    phone: Joi.string().allow("").optional(), // Allow empty string or optional
  });
  return schema.validate(student);
}

exports.Student = Student;
exports.validate = validateData;
