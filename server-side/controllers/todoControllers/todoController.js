const Todo = require("../../models/todo");

class TodoController {
  static async todoList(req, res) {
    try {
      const { userId } = req.params;

      const todos = await Todo.find({ userId: userId });

      res.status(200).json({
        todos,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async createTodo(req, res) {
    try {
      const { title, description } = req.body;

      const todo = await Todo.create({
        title,
        description,
        status: false,
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
      console.log(_id, ">>>");

      // const todo = await Todo.findById({ _id: _id });

      const todo = await Todo.findByIdAndUpdate(
        { _id: _id },
        { status: true },
        { new: true, runValidators: true }
      );

      if (!todo) throw { name: "InvalidTodo" };

      // await todo.updateOne({ status: true });

      console.log(todo, "<<<");

      res.status(200).json({
        message: "Todo has been successfully updated",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TodoController;
