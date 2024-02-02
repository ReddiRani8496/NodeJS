const os = require("os");

console.log(os.arch()); //architecture (32 or 64)

console.log(os.platform()); // linux or windows or mac os

console.log(os.cpus());

console.log(os.networkInterfaces());

console.log(os.totalmem()); // total memory of system

console.log(os.freemem());
