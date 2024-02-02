const path = require("path");
let ext = path.extname("/home/reddirani/Desktop/NodeJS/Day-1/Introduction.txt"); // extension of the file
console.log(ext);

let baseName = path.basename(
  "/home/reddirani/Desktop/NodeJS/Day-1/Introduction.txt"
); // returns name of the file
console.log(baseName);
console.log(__filename); // file name
console.log(__dirname); // directory name
