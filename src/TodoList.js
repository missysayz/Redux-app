import React from "react";
import Todo from "./Todo";
import { connect, } from "react-redux";

const TodoList = ({ todos, }) => (
  <ul>
    { todos.map( t => <Todo key={t.id} { ...t } /> )}
  </ul>
);

const mapStateToProps = (state) => {
  return { todos: state.todos, };
};

export default connect(mapStateToProps)(TodoList);
