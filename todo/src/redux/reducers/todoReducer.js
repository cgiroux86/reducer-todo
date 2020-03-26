import { TODO, TODO_COMPLETED, CLEAR_COMPLETED } from "../todo/todoTypes";

export const initialState = {
  todo: { item: "", completed: false, id: Math.floor(Math.random() * 100) },
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO:
      console.log(state);
      return {
        ...state,
        // todo: { ...state.todo, item: action.payload },
        todos: [
          ...state.todos,
          {
            ...state.todo,
            item: action.payload,
            id: Math.floor(Math.random() * 100)
          }
        ]
      };
    case TODO_COMPLETED:
      setTimeout(() => state.todos.map(elem => console.log(elem)), 1);
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map(elem =>
          elem.id === action.payload ? { ...elem, completed: true } : elem
        )
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(elem => elem.completed === false)
      };
    default:
      return state;
  }
};
