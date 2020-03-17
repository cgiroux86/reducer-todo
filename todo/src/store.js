import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todoReducer } from "./redux/reducers/todoReducer";

export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
