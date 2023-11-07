import { ABoutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { TodoIdPage } from "../pages/TodoIdPage";
import { TodosPage } from "../pages/TodosPage";

export const priveteRoutes = [
  {path: "/", element: ABoutPage},
  {path: "/todos", element: TodosPage},
  {path: "/todos/:id", element: TodoIdPage},
  {path: "*", element: ErrorPage}
];