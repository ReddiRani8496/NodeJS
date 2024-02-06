const express = require("express");
const app = express();

// by using the app we will access methods get,post,put,delete
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("update data");
});

app.get("/courses/:id", (req, res) => {
  res.send(req.params.id);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`port ${port} is running`));
