import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/todoSlice";

const TodoForm = ({
  taskTitle,
  setTaskTitle,
  editableTask,
  setEditableTask,
  editableState,
  setEditableState,
}) => {
  const tasks = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const task = {
      id: tasks.length + 1,
      title: taskTitle,
      isCompleted: false,
    };
    dispatch(addTask(task));
    setTaskTitle("");
  };

  const performUpdate = () => {
    dispatch(updateTask({ ...editableTask, title: taskTitle }));
    setEditableState(false);
    setTaskTitle("");
    setEditableTask(null);
  };

  return (
    <div className="flex gap-2 py-4">
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        type="text"
        name="task"
        className="border w-full py-2 px-2 rounded-md outline-none focus:border-cyan-500"
      />
      <button
        onClick={editableState ? performUpdate : handleAdd}
        disabled={taskTitle.length === 0}
        className="border py-1 px-3 rounded-md font-medium hover:border-cyan-500 text-gray-600 duration-500"
      >
        {editableState ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default TodoForm;
