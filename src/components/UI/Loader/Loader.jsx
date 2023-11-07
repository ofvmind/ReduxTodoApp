import cl from "./Loader.module.css";

export const Loader = (props) => (
  <div {...props}><div className={cl.ring}/></div>
);