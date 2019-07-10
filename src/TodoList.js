import React from 'react';
import { connect, } from 'react-redux';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((t, i) => {
      return (
        <li key={i}>
          {t}
        </li>
      )
    })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos, };
}

export default connect(mapStateToProps)(TodoList);