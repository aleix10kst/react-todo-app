import { Todo } from "../types/todo.type";
import { TodoItem } from "./TodoItem";

export type TodoListProps = {
  items: Todo[];
  selectTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number, completed: boolean) => void;
};

export const TodosList = ({
  items,
  selectTodo,
  deleteTodo,
  completeTodo,
}: TodoListProps) => {
  if (items.length === 0) {
    return <p className="pb-4 text-xl font-semibold">No todos found</p>;
  }
  return (
    <div className="pb-4">
      <div className="space-y-4">
        {items.map((item, idx) => (
          <TodoItem
            key={idx}
            item={item}
            selectTodo={selectTodo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
};
