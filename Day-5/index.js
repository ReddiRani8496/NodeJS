const mongoose = require("mongoose");

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// schema
const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
  rating: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "sql",
    creator: "haritha",
    isPublished: true,
    rating: 4.3,
  });
  const result = await course.save();
  console.log(result);
}

// createCourse();

// comparision operators
// eq (equal)
// gt (greater than)
// gte (grater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// not in

// logical operators
// or
// and

// async function getCourses() {
//   const courses = await Course.find({ rating: { $in: [3, 4.2, 4.3, 4.5] } })
//     .select({
//       name: 1,
//       creator: 1,
//     })
//     // .or([{ creator: "aruna" }, { rating: 2 }]);
//     .and([{ creator: "aruna" }, { rating: 2 }]);
//   console.log(courses);
// }
// getCourses();

// async function updateCourses(id) {
//   let course = await Course.findById(id);
//   if (!course) return;

//   (course.creator = "arunakumari"), (course.name = "ruby");

//   const updatedcourse = await course.save();
//   console.log(updatedcourse);
// }

// updateCourses("65cda1818ccde0d1dde196d0");

async function deleteCourse(id) {
  let course = await Course.findByIdAndDelete(id);
  console.log(course);
}

deleteCourse("65cda1818ccde0d1dde196d0");
