const express = require("express");
const cors = require("cors");
const app = express();
const cardRouter = require("./routers/cardsRouter");
app.use(cors());
app.use(express.json());

app.use("/api/v1", cardRouter);
app.use("/", (req, res, next) => {
  res.status(200).json({
    name: "vinay",
    password: "villain ra",
  });
});

module.exports = app;
