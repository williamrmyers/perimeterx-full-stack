"use strict";

const express = require("express");
const perimeterx = require("perimeterx-node-express");
const path = require("path");

const server = express();

const PORT = 3000;

/* px-module and cookie parser need to be initiated before any route usage */
const pxConfig = {
  pxAppId: "",
  cookieSecretKey: "",
  authToken: "",
};
perimeterx.init(pxConfig);

/*  block users with high bot scores using px-module for the route /helloWorld */
server.get("/", perimeterx.middleware, (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
