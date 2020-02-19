const express = require("express");

const carRouter = require("../router/carRouter.js");

const server = express();

server.use(express.json());

server.use("/api/cars", carRouter);

server.get("/", (req, res) => {
  return res.send("Welcome to the API");
});

server.use((error, res, req, next) => {
  console.log(error);
  //   return res.status(500).json({ error: "something is not right" });
});

module.exports = server;
