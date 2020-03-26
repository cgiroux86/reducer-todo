import { ADD_TODOS, CLEAR_TODOS } from "./todosTypes";

export const addTodos = () => {
  return {
    type: ADD_TODOS
  };
};

export const clearTodos = () => {
  return {
    type: CLEAR_TODOS
  };
};
