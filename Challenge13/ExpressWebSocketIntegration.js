const WebSocket = require("ws");

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
      ws.send(message);
    });
  });
}

module.exports = setupWebSocket;
