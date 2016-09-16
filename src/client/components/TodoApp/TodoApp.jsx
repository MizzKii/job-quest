import React from 'react';
export default (props) => (
  <div>
    <div>
      <input type="text" onChange={props.newTodoChange} value={props.state.newTodo} />
      <button onClick={props.add.bind(this, props.state.newTodo)}>Add</button>
    </div>
    <ul>
      {
        props.state.todos && props.state.todos.map((todo) => <li style={{textDecoration: todo.done ? 'line-through' : 'initial'}} onClick={props.toggle.bind(this,todo._id)} key={todo._id}>{todo.title} <button onClick={props.delete.bind(this,todo._id)}>Delete</button></li>)
      }
    </ul>
  </div>
);
