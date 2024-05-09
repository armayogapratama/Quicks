import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
};

export const newTodoSlice = createSlice({
  name: "newTodo",
  initialState,
  reducers: {
    newTodo: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export function addTodo(addNewTodo) {
  return async (dispatch) => {
    const token = localStorage.getItem("access_token");
    try {
      const { data } = await axios.post(
        "http://localhost:3000/todo/new-todo",
        addNewTodo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(newTodo(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// Action creators are generated for each case reducer function
export const { newTodo } = newTodoSlice.actions;

export default newTodoSlice.reducer;
