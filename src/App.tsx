import { useState } from 'react';

import NewTodo from './component/NewTodo';
import Todos from './component/Todos';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeHandler = (id: string) => {
   setTodos((prevState)=>{
     return prevState.filter(item=>item.id !== id)
   })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeHandler}/>
    </div>
  );
}

export default App;