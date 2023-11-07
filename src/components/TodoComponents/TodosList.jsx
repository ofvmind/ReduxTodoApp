import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TodosList({ todos }) {
  if (!todos.length) return <h1>Todos empty</h1>;
  return (
    <ul>
      <TransitionGroup>
        {todos.map((todo, index) => (
          <CSSTransition key={todo.id} classNames="todo" timeout={500}>
            <TodoItem todo={todo} num={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}

export default TodosList;
