import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ handleEdit, editableState }) => {
  const tasks = useSelector((state) => state.todo.todoList);
  return (
    <div className={`${editableState && "pointer-events-none opacity-50"}`}>
      {tasks.length > 0 ? (
        <ul className="my-3 divide-y-2 divide-gray-100 space-y-1">
          {tasks.map((task) => (
            <Todo key={task.id} task={task} handleEdit={handleEdit} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center text-sm my-3">No task added</p>
      )}
    </div>
  );
};

export default TodoList;
