const fs = require("fs");
console.log("first line");
let data = fs.readFileSync("first.txt"); // it will execute first
console.log("file 1 " + data);
console.log("second line"); // it will wait until the previous statements executed
