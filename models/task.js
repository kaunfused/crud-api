const mongoose = require("mongoose");

const task_schema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  isComplete: { type: Boolean, default: false },
});

const task_model = mongoose.model("task", task_schema);

module.exports = task_model;
