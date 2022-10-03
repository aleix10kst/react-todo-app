import { Todo } from "../types/todo.type";

const TodoCounterCard = ({
  title,
  total,
  color,
}: {
  title: string;
  total: number;
  color?: string;
}) => {
  return (
    <div className="flex w-full flex-col border border-gray-100 rounded-lg p-4">
      <p className="text-4xl font-bold">{total ?? 0}</p>
      <p className="text-gray-600 text-lg font-medium">{title}</p>
    </div>
  );
};

type TodoCountersProps = {
  items: Todo[];
};

export const TodoCounters = ({ items }: TodoCountersProps) => {
  const completedTodos = items.filter((item) => item.completed).length;
  const incompletedTodos = items.filter((item) => !item.completed).length;

  return (
    <div className="flex flex-col md:flex-row gap-x-4">
      <TodoCounterCard title="Todos" total={items.length} />
      <TodoCounterCard title="Completed todos" total={completedTodos} />
      <TodoCounterCard title="Incompleted todos" total={incompletedTodos} />
    </div>
  );
};
