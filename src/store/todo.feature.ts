import { Todo } from "../types/todo.type";

export type TodoAction = {
  type: TodoActionEnum;
  payload: Partial<Todo>;
};

export enum TodoActionEnum {
  ADD = "ADD",
  EDIT = "EDIT",
  COMPLETE = "COMPLETE",
  DELETE = "DELETE",
  SELECT = "SELECT",
}

export type TodoState = { items: Todo[]; selectedId: number | null };

export const todoReducer = (state: TodoState, action: TodoAction) => {
  const { type, payload } = action;
  switch (type) {
    case TodoActionEnum.ADD: {
      const date = new Date();
      const newTodo: Todo = {
        id: date.getTime(),
        name: payload?.name ?? "",
        description: payload.description ?? "",
        completed: false,
        createdAt: date,
      };
      return { ...state, items: [...state.items, newTodo] };
    }
    case TodoActionEnum.EDIT: {
      const { id, ...rest } = payload;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== id) {
            return item;
          }
          return { ...item, ...rest };
        }),
        selectedId: null,
      } as TodoState;
    }
    case TodoActionEnum.SELECT: {
      return {
        ...state,
        selectedId: state.selectedId ? null : payload.id,
      };
    }
    case TodoActionEnum.DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
  }
  console.log(type, payload);
  return state;
};
