const {
  todoList,
  createTodo,
  updateTodo,
} = require("../controllers/todoControllers/todoController");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.post("/new-todo", authentication, createTodo);
router.get("/:userId/list", todoList);
router.patch("/:_id/update-todo", authentication, updateTodo);

module.exports = router;
