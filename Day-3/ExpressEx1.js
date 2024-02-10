const express = require("express");
const app = express();
app.use(express.json());

// by using the app we will access methods get,post,put,delete
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("update data");
});

const courses = [
  { id: 1, name: "javascript" },
  { id: 2, name: "java" },
  { id: 3, name: "python" },
];

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/courses/:name", (req, res) => {
  let course = courses.find((course) => course.name === req.params.name);
  if (!course) res.status(404).send("course doesn't exist");
  course.name = req.body.name;
  res.send(course);
});

app.delete("/courses/:name", (req, res) => {
  let updatedCourses = courses.filter(
    (course) => course.name !== req.params.name
  );
  courses = updatedCourses;
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  // res.send(req.params.id);
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) res.status(404).send("course doesn't exist");
  res.send(course);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`port ${port} is running`));
