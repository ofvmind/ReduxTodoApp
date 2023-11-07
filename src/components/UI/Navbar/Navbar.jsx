import cl from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <div className={cl.nav__items}>
        <NavLink className={cl.nav__item} to="/">About</NavLink>
        <NavLink className={cl.nav__item} to="/todos">Todos</NavLink>
      </div>
    </div>
  );
};