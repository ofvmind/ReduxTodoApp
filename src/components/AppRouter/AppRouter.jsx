import { Route, Routes } from "react-router-dom";
import { priveteRoutes } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      {priveteRoutes.map(route => 
          <Route path={route.path} element={< route.element/>} key={route.path} />
        )}
    </Routes>
  );
};