"use strict";

const express = require("express");
const perimeterx = require("perimeterx-node-express");

const server = express();

/* px-module and cookie parser need to be initiated before any route usage */
const pxConfig = {
  pxAppId: "",
  cookieSecretKey: "",
  authToken: "",
};
perimeterx.init(pxConfig);

/*  block users with high bot scores using px-module for the route /helloWorld */
server.get("/", perimeterx.middleware, (req, res) => {
  res.send("Hello from PX");
});

server.listen(3000, () => {
  console.log("server started");
});
