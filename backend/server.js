const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/", (req, res) => res.json("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
