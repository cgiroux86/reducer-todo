import { combineReducers } from "redux";
import { todoReducer } from "./redux/reducers/todoReducer";

export const rootReducer = combineReducers(todoReducer);
