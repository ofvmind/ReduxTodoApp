import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import { useEffect, useState } from "react";
import { Loader } from "../UI/Loader/Loader";
import TodoService from "../../API/TodoService";

export const TodoIdPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});

  const [fetchTodoById, isLoading, errorFetch] = useFetching( async () => {
    const response = await TodoService.getTodoById(params.id);
    setTodo(response.data);
  });

  useEffect(() => {
    fetchTodoById();
  }, []);

  console.log(todo)

  return (
    <div className="wrapper">
      {isLoading
        ? <Loader style={{marginBottom: "100px", display: "flex", justifyContent: "center"}}/>
        : <h1>{todo.title}</h1>
      }
    </div>
  );
};