require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const PORT = process.env.PORT || 8000;

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/", (req, res) => res.json("API running"));

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
