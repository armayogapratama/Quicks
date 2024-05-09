const {
  todoList,
  createTodo,
  updateTodo,
  updateTodoStatus,
  todoDetail,
} = require("../controllers/todoControllers/todoController");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.get("/list", authentication, todoList);
router.post("/new-todo", authentication, createTodo);
router.get("/:_id", authentication, todoDetail);
router.put("/:_id/update-todo", authentication, updateTodo);
router.patch("/:_id/status-todo", authentication, updateTodoStatus);

module.exports = router;
