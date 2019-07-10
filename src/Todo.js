import React from "react";
import { connect, } from "react-redux";

const Todo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={ () => dispatch({ type: "TOGGLE_TODO", id }) }
    style={ complete ? { textDecoration: "line-through", color: "grey", } : {} }
  >
    { name }
  </li>
);

export default connect()(Todo);
