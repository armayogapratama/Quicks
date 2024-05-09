const { ObjectId } = require("mongodb");
const Todo = require("../../models/todo");

class TodoController {
  static async todoList(req, res) {
    try {
      const agg = [
        {
          $match: {
            userId: new ObjectId(req.user._id),
          },
        },
      ];

      const todos = await Todo.aggregate(agg);

      res.status(200).json({
        todos,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async todoDetail(req, res) {
    try {
      const { _id } = req.params;

      const todo = await Todo.findById(_id);

      if (!todo) throw { name: "InvalidTodo" };

      res.status(200).json({
        todo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async createTodo(req, res) {
    try {
      const { title, description, date } = req.body;

      const todo = await Todo.create({
        title,
        description,
        date,
        userId: req.user._id,
      });

      res.status(201).json({
        message: "Success created new todo",
        todo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTodo(req, res) {
    try {
      const { _id } = req.params;
      const { title, description, date } = req.body;

      const todo = await Todo.findByIdAndUpdate(
        {
          _id: _id,
        },
        {
          title,
          description,
          date,
        },
        {
          new: true,
        }
      );

      if (!todo) throw { name: "InvalidTodo" };

      res.status(200).json({
        message: "Todo has been successfully updated",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTodoStatus(req, res) {
    try {
      const { _id } = req.params;

      const todo = await Todo.findByIdAndUpdate(
        { _id: _id },
        { status: true },
        { new: true, runValidators: true }
      );

      if (!todo) throw { name: "InvalidTodo" };

      res.status(200).json({
        message: "Status has been successfully updated",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TodoController;
