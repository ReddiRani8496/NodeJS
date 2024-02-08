const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send("Error: " + err.message);
});

function positiveIntegerHandler(req, res, next) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.send("Success! " + number + " is a positive integer.");
  } else {
    const err = new Error('Parameter "number" must be a positive integer.');
    next(err);
  }
}

app.get("/positive", positiveIntegerHandler);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
