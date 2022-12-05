import {
  RiDeleteBinFill,
  RiFileEditLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../redux/todoSlice";

const Todo = ({ task, handleEdit }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={`flex justify-between items-center p-1 ${
        task.isCompleted && "opacity-50"
      }`}
    >
      <p
        className={`font-medium text-gray-600 ${
          task.isCompleted && "line-through"
        }`}
      >
        {task.title}
      </p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(completeTask(task.id))}>
          <RiCheckboxCircleLine className="h-5 w-5 text-green-500" />
        </button>
        <button>
          <RiFileEditLine
            onClick={() => handleEdit(task)}
            className="h-5 w-5 text-cyan-500"
          />
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))}>
          <RiDeleteBinFill className="h-5 w-5 text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
