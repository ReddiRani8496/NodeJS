const cp = require("child_process");

function executeCommand(command) {
  cp.exec(command, (err, stdout, stdr) => {
    console.log(`${stdout}`);
  });
}

console.log("Command Output:");
executeCommand("ls -la");
executeCommand('echo "Hello, Node.js!"');
