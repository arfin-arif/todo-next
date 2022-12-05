import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList:  [],
};

// set todo list to local storage
const setToLocalStorage = (tasks) => {
  localStorage.setItem("todoList", JSON.stringify(tasks));
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload);
      setToLocalStorage(state.todoList);
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        (task) => task.id !== action.payload
      );
      setToLocalStorage(state.todoList);
    },
    completeTask: (state, action) => {
      state.todoList = state.todoList.map((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      setToLocalStorage(state.todoList);
    },
    updateTask: (state, action) => {
      state.todoList = state.todoList.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
        }
        return task;
      });
      setToLocalStorage(state.todoList);
    },
    loadTask: (state, action) => {
        state.todoList = action.payload;
    }
  },
});

export default todoSlice.reducer;
export const { addTask, deleteTask, completeTask, updateTask, loadTask } = todoSlice.actions;