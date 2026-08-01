const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const DB_PATH = process.env.MONGODB_URI;
const todoItemRouter = require("./routes/todoItemRouter");
const errorsController = require ("./controllers/errors");
const todoItem = require("./models/todoItem");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/todo",todoItemRouter);

app.use(errorsController.pageNotFound);


const PORT = process.env.PORT || 3001;
mongoose.connect(DB_PATH)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });