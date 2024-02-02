const fs = require("fs");
// read file
// let fileContent = fs.readFileSync("Introduction.txt");
// console.log(fileContent.toString());

// write file -> if the file name passed not exists a new file is created.
// if the file exist it will override the content
// fs.writeFileSync("f1.txt", "I am f1 file");
// console.log("file compelted");

// append file
// fs.appendFileSync("f1.txt", " file is appended");
// console.log("file appended");

// delete a file
fs.unlinkSync("f2.txt");
console.log("File deleted");
