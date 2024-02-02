const fs = require("fs");

// to create directory
//fs.mkdirSync("hello");

// read directory
console.log(fs.readdirSync("hello"));

// check whether directory exists or not
console.log(fs.existsSync("hello"));

// delete directory -> we can delete the directory only if directory is empty
fs.rmdirSync("hello");
