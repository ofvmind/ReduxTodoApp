import cl from "./MyButton.module.css";

export const MyButton = ({children, ...props}) => (
  <button {...props} className={cl.button}>{children}</button>
);