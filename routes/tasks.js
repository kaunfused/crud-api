const express = require("express");
const router = express.Router();

const userControl = require("../controllers/userTasks");

router.get("/", userControl.getAllTasks);

router.post("/", userControl.createTask);

router.get("/:id", userControl.getSingleTask);

router.patch("/:id", userControl.UpdateTask);

router.delete("/:id", userControl.deleteTask);

module.exports = router;
