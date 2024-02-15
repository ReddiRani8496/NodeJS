const fs = require("fs");

console.log("first line");

fs.readFile("first.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
}

fs.readFile("f2.txt", cb2);

function cb2(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
}

console.log("last line");
