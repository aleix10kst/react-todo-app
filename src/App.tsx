import { FormEvent, useReducer, useState } from "react";
import { TodoCounters } from "./components/TodoCounters";
import { TodoForm } from "./components/TodoForm";
import { TodosList } from "./components/TodoList";
import { TodoActionEnum, todoReducer, TodoState } from "./store/todo.feature";
import { Todo } from "./types/todo.type";

function App() {
  const [{ items, selectedId }, dispatch] = useReducer(todoReducer, {
    items: [],
    selectedId: null,
  });

  const selectedItem: Todo | undefined = items.find(
    (item: Todo) => item.id === selectedId
  );

  const handleSubmit = ({ name, description }: Partial<Todo>) => {
    const payload = { id: selectedItem?.id, name, description };
    if (selectedId) {
      dispatch({ type: TodoActionEnum.EDIT, payload });
      return;
    }
    dispatch({ type: TodoActionEnum.ADD, payload });
  };

  const selectTodo = (id: number) => {
    dispatch({ type: TodoActionEnum.SELECT, payload: { id } });
  };

  const changeTodoStatus = (id: number, status: boolean) =>
    dispatch({ type: TodoActionEnum.EDIT, payload: { id, completed: status } });

  const deleteTodo = (id: number) =>
    dispatch({ type: TodoActionEnum.DELETE, payload: { id } });

  return (
    <div className="mx-auto max-w-5xl divide-y divide-gray-300">
      <section className="space-y-4 pt-4">
        <h1 className="text-3xl text-black font-bold mb-4">Todo application</h1>
        <h2 className="font-bold text-2xl">Todo list</h2>

        <TodoCounters items={items} />
        <TodosList
          items={items}
          selectTodo={selectTodo}
          deleteTodo={deleteTodo}
          completeTodo={changeTodoStatus}
        />
      </section>

      <TodoForm
        key={selectedId}
        item={selectedItem}
        mode={selectedId ? "edit" : "create"}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
