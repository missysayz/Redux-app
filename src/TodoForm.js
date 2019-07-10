import React, { useState, } from "react";
import { connect, } from "react-redux";

const TodoForm = ({ dispatch, id, }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: { name, id, complete: false, }, });
    dispatch({ type: "INC_ID", });
    setName("");
  };

  return (
    <div>
      <h3>Add a Todo</h3>
      <form onSubmit={handleSubmit}>
        <input 
          value={name} 
          onChange={ e => setName(e.target.value) } 
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { id: state.nextId, };
};

export default connect(mapStateToProps)(TodoForm);
