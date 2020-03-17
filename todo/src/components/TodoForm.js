import React, { useState } from "react";
import { todo, todoCompleted, clearCompleted } from "../redux/todo/todoActions";
import { connect } from "react-redux";

const TodoForm = props => {
  const [input, setInput] = useState("");

  return (
    <div>
      <label htmlFor="todo">Add Todo</label>
      <form id="todo">
        <input
          onChange={e => setInput(e.target.value)}
          name="todo"
          type="text"
          value={input}
        ></input>
        <button
          onClick={e => {
            e.preventDefault();
            props.todo(input);
            setInput("");
          }}
          type="submit"
        >
          Add To List
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            props.clearCompleted();
          }}
        >
          Clear Completed
        </button>
      </form>
      <div>
        {props.todoList.map(elem => (
          <div
            key={elem.id}
            id={elem.id}
            className={elem.completed ? "complete" : null}
            onClick={e => {
              e.preventDefault();
              props.todoCompleted(elem.id);
            }}
          >
            {elem.item}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoItem: state.todo,
    todoList: state.todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    todo: input => dispatch(todo(input)),
    todoCompleted: userID => dispatch(todoCompleted(userID)),
    clearCompleted: () => dispatch(clearCompleted())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
