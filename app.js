const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const db = require("./db/connect");
const app = express();
const port = 3000;

const router = require("./routes/tasks");

// app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/tasks", router);

const start = async () => {
  try {
    await db();
    app.listen(port, () => {
      console.log(`Server listening at port ${port}...`);
    });
  } catch (error) {
    console.log("could not start server");
  }
};

start();
