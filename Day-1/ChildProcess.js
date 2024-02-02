// child process is a node module used to create sub process within a script
// you can perform different tasks with your script by just using some methods.

const cp = require("child_process"); // import the module using require

//cp.execSync("google-chrome");

// cp.execSync("google-chrome https://www.w3schools.com/nodejs/");

console.log("output " + cp.execSync("node Calculator1.js"));
