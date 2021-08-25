  
import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/Todo';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[];removeTodo:(id:string)=>void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem removeTodo={props.removeTodo} key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;