import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoList: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export function fetchTodoList() {
  return async (dispatch) => {
    const token = localStorage.getItem("access_token");
    try {
      const { data } = await axios.get(`http://localhost:3000/todo/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(todoList(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// Action creators are generated for each case reducer function
export const { todoList } = todoSlice.actions;

export default todoSlice.reducer;
