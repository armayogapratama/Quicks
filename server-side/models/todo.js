const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const todoSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    require: true,
    default: false,
  },
  date: {
    type: String,
    require: true,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: ObjectId,
    require: true,
    ref: "users",
  },
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = Todo;
