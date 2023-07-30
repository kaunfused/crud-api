const Task = require("../models/task");

class userControllers {
  static getAllTasks = async (req, res) => {
    try {
      const all_tasks = await Task.find({});
      res.status(200).json({ all_tasks });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  static createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  static getSingleTask = async (req, res) => {
    try {
      let exists = await Task.findOne({ _id: req.params.id });

      if (!exists) {
        return res
          .status(404)
          .json({ msg: `Task with id ${req.params.id} does not exist` });
      }
      res.status(201).json({ single_task: exists });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  static deleteTask = async (req, res) => {
    try {
      let deleted = await Task.findOneAndDelete({ _id: req.params.id });

      if (!deleted) {
        return res
          .status(404)
          .json({ msg: `No task with id ${req.params.id}` });
      }

      res.status(200).json({ msg: "Task successfully deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  static UpdateTask = async (req, res) => {
    try {
      const { id: taskID } = req.params;

      const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
      });

      if (!task) {
        return res
          .status(404)
          .json({ msg: `Task with id: ${taskID} does not exist` });
      }

      res.status(200).json({ task });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
}

module.exports = userControllers;
