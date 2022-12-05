import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { loadTask } from "../redux/todoSlice";

const TodoApp = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editableTask, setEditableTask] = useState(null);
  const [editableState, setEditableState] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (task) => {
    setEditableState(true);
    setTaskTitle(task.title);
    setEditableTask(task);
  };

  useEffect(() => {
    const todoList = localStorage.getItem("todoList");
    if (todoList) {
      dispatch(loadTask(JSON.parse(todoList)));
    } else {
      localStorage.setItem("todoList", []);
    }
  }, []);

  return (
    <div className="w-80 sm:w-96 min-h-[200px] mx-auto border p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-sm">
      <h1 className="font-semibold font-serif text-xl text-center text-cyan-500">
        Todo List
      </h1>
      <TodoForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        editableTask={editableTask}
        setEditableTask={setEditableTask}
        editableState={editableState}
        setEditableState={setEditableState}
      />
      <TodoList handleEdit={handleEdit} editableState={editableState} />
    </div>
  );
};

export default TodoApp;
