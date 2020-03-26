import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
