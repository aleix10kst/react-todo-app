import { FormEvent, useState } from "react";
import { Todo } from "../types/todo.type";

type TodoFormProps = {
  item?: Todo;
  mode: "create" | "edit";
  onSubmit: (item: Partial<Todo>) => void;
};

export const TodoForm = ({ item, mode, onSubmit }: TodoFormProps) => {
  const [name, setName] = useState(item?.name ?? "");
  const [description, setDescription] = useState(item?.description ?? "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, description });
    setName("");
    setDescription("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border-b border-gray-300 pt-4 space-y-2"
    >
      <h2 className="font-bold text-2xl">Todo form</h2>
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 rounded-lg w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border border-gray-300 rounded-lg w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="border border-gray-400 bg-white rounded-lg px-4 py-2 hover:bg-gray-400  text-gray-600 hover:cursor-pointer"
        disabled={!name}
      >
        {mode === "create" ? "Create a new item" : "Save the changes"}
      </button>
    </form>
  );
};
