import { Todo } from "../types/todo.type";
import {
  XCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

type CompleteIconProps = {
  completed: boolean;
  changeStatus: (state: boolean) => void;
};

const CompleteIcon = ({ completed, changeStatus }: CompleteIconProps) => {
  return completed ? (
    <button onClick={() => changeStatus(false)}>
      <CheckCircleIcon height={30} width={30} color="green" />
    </button>
  ) : (
    <button onClick={() => changeStatus(true)}>
      <XCircleIcon height={30} width={30} color="red" />
    </button>
  );
};

export type TodoItemProps = {
  item: Todo;
  selectTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number, completed: boolean) => void;
};

export const TodoItem = ({
  item,
  selectTodo,
  deleteTodo,
  completeTodo,
}: TodoItemProps) => {
  return (
    <div className="border border-gray-100 rounded-lg p-4 flex justify-between items-stretch">
      <div>
        <p className="text-xl text-gray-600">{item.name}</p>
        <p className="text-gray-400 font-light">
          Creat el {item.createdAt.toLocaleDateString()} a les{" "}
          {item.createdAt.toLocaleTimeString()}
        </p>
      </div>
      <div className="flex items-center space-x-4 divide-x divide-gray-100">
        <CompleteIcon
          completed={item.completed}
          changeStatus={(status) => completeTodo(item.id, status)}
        />
        <div className="pl-4 space-x-4 flex items-center h-full">
          <button onClick={() => selectTodo(item.id)}>
            <EyeIcon height={28} width={28} />
          </button>
          <button
            onClick={() => selectTodo(item.id)}
            disabled
            className="disabled:text-gray-200"
          >
            <PencilSquareIcon height={28} width={28} />
          </button>
          <button onClick={() => deleteTodo(item.id)}>
            <TrashIcon height={28} width={28} />
          </button>
        </div>
      </div>
    </div>
  );
};
