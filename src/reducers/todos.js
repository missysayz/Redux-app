// action = { type: "TODOS", todos: [] };
const todos = (state = [], action) => {
  switch(action.type) {
    case "TODOS":
      return action.todos;
    case "ADD_TODO":
      return [action.todo, ...state];
    case "TOGGLE_TODO":
      return state.map( todo => {
        if (todo.id === action.id)
          return { ...todo, complete: !todo.complete, };
        return todo;
      });
    case "DELETE_TODO":
      // delete todo
    default:  
      return state;
  };
};

export default todos;
