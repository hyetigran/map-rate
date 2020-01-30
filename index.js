require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const scrape = require("./scrapper/rateScrapper");
const PORT = process.env.PORT || 8000;

const server = express();
server.use(express.static("client/build"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/rate", (req, res) => {
  scrape().then(data => {
    console.log(data);
    res.status(200).json(data);
  });
  //res.json("API running");
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
