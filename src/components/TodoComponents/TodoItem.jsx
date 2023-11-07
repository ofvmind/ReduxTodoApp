import { useContext, useState } from "react";
import { removeTodoAction } from "../../store/todoReducer";
import { TodoContext } from "../../Context/TodoContext/TodoContext";
import { Navigate } from "react-router-dom";

function TodoItem({todo, num}) {

  const {removeTodo, toggleTodo} = useContext(TodoContext);

  const [redirect, setRedirect] = useState(false);
  if (redirect) return <Navigate to={`/todos/${todo.id}`}/>


  const classes = [];
  if (todo.completed) classes.push('done');

  return (
    <li onClick={() => setRedirect(true)} className="todo">
      <span className={classes.join(' ')}>
        <input onClick={e => e.stopPropagation()} checked={todo.completed} onChange={toggleTodo.bind(null, todo.id)} type="checkbox" />
        &nbsp;
        <strong>{todo.id}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={(e) => {
        removeTodo(todo.id)
        e.stopPropagation();
      }} className="delete">&times;</button>
    </li>
  );
}

export default TodoItem;