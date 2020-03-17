import { ADD_TODOS, CLEAR_TODOS } from "../todos/todosTypes";

export const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return [...state.todos, action.payload];
    case CLEAR_TODOS:
      return;
    default:
      return state;
  }
};
