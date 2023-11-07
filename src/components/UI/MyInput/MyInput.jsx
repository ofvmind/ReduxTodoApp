import cl from "./MyInput.module.css";

export const MyInput = (props) => (
  <input {...props} className={cl.input}/>
);