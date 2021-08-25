
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; id: string; removeTodo: (id:string) => void }> = (props) => {
  return <li  className={classes.item}>
    {props.text}
    <button onClick={()=>props.removeTodo(props.id)} className={classes.btn}>Delete</button>
  </li>;
};

export default TodoItem;
