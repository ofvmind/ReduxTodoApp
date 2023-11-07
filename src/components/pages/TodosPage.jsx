import { useDispatch, useSelector } from "react-redux";
import TodosList from "../TodoComponents/TodosList";
import { removeTodoAction } from "../../store/todoReducer";
import { TodoContext } from "../../Context/TodoContext/TodoContext";
import { Suspense, lazy, useEffect, useState } from "react";
import { MyModal } from "../UI/MyModal/MyModal";
import { MyButton } from "../UI/MyButton/MyButton";
import { MyInput } from "../UI/MyInput/MyInput";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import { TodosFilter } from "../TodoComponents/TodoFilter";
import { useFetching } from "../../hooks/useFetching";
import TodoService from "../../API/TodoService";
import { Loader } from "../UI/Loader/Loader";
import { getTotalPages } from "../../utils/getTotalPages";
import { Pagination } from "../TodoComponents/Pagination";

const AddTodo = lazy(
  () =>
    new Promise((res) =>
      setTimeout(() => res(import("../TodoComponents/AddTodo")), 2000)
    )
);

export const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchTodos, isLoading, errorFetch] = useFetching(async (limit, page) => {
    const response = await TodoService.getTodos(limit, page);
    dispatch({ type: "GET_TODOS", payload: response.data });
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getTotalPages(totalCount, limit));
  });

  useEffect(() => {
    fetchTodos(limit, page);
  }, [page]);

  const searchedTodos = useTodoFilter(todos, searchQuery);

  const removeTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  };

  const createTodo = (title) => {
    const todo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setIsModalOpen(false);
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  function changePage(page) {
    setPage(page);
  }

  return (
    <TodoContext.Provider
      value={{
        removeTodo,
        toggleTodo,
      }}
    >
      <div className="wrapper">
        <TodosFilter query={searchQuery} setQuery={setSearchQuery} />
        <MyButton style={{marginTop: "1em"}} onClick={() => setIsModalOpen(true)}>Add todo</MyButton>
        <MyModal visibility={isModalOpen} setVisibility={setIsModalOpen}>
          <Suspense fallback={<p>Loading....</p>}>
            <AddTodo createTodo={createTodo} />
          </Suspense>
        </MyModal>
        {errorFetch && <p className="error">{errorFetch}</p>}
        {isLoading ? (
          <Loader
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        ) : (
          <TodosList todos={searchedTodos} />
        )}
        <Pagination changePage={changePage} page={page} totalPages={totalPages}/>
      </div>
    </TodoContext.Provider>
  );
};
