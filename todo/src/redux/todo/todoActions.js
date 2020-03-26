import { TODO, TODO_COMPLETED, CLEAR_COMPLETED } from "./todoTypes";

export const todo = input => {
  return {
    type: TODO,
    payload: input
  };
};

export const todoCompleted = id => {
  return {
    type: TODO_COMPLETED,
    payload: id
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
