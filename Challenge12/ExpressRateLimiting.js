const express = require("express");
const app = express();

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;
const ipRequestMap = new Map();

function rateLimitMiddleware(req, res, next) {
  const clientIp = req.ip;

  if (!ipRequestMap.has(clientIp)) {
    ipRequestMap.set(clientIp, []);
  }

  const requests = ipRequestMap.get(clientIp);

  const currentTime = Date.now();
  while (requests.length > 0 && currentTime - requests[0] > RATE_LIMIT_WINDOW) {
    requests.shift();
  }

  if (requests.length >= MAX_REQUESTS) {
    return res.status(429).send("Too Many Requests");
  }

  requests.push(currentTime);

  next();
}

app.use(rateLimitMiddleware);
