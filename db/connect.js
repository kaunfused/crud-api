const mongoose = require("mongoose");

const cs = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nodeexpress.isko1mi.mongodb.net/task-manager?retryWrites=true&w=majority`;

const connectDb = () => {
  return mongoose.connect(cs);
};

module.exports = connectDb;
