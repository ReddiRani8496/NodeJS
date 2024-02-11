const express = require("express");
const app = express();
app.use(express.json());

const morgan = require("morgan");

const myMiddlewareFunction = require("./Middleware/middleware");
app.use(myMiddlewareFunction);

const myMiddlewareFunction2 = require("./Middleware/middleware2");
app.use(myMiddlewareFunction2);

app.use(morgan("tiny"));

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "python" },
  { id: 3, name: "flutter" },
];

app.get("/courses/:name", (req, res) => {
  let course = courses.find((course) => course.name === req.params.name);
  res.send(course);
});

app.listen(4000, () => console.log("port 4000 is running"));

// app.get("/courses/:id", (req, res) => {
//     // res.send(req.params.id);
//     let course = courses.find((course) => course.id === parseInt(req.params.id));
//     if (!course) res.status(404).send("course doesn't exist");
//     res.send(course);
//   });
