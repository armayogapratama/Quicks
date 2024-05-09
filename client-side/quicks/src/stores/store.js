import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import newTodoSlice from "./slices/newTodoSlice";

export default configureStore({
  reducer: {
    todos: todoSlice,
    addTodos: newTodoSlice,
  },
});
