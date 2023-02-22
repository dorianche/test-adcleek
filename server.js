const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
  credentials: true,
};

db.init();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Meteo App" });
});

// set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
