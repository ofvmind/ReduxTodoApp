import { useState } from "react";
import cl from "./MyModal.module.css";

export const MyModal = ({ children, visibility, setVisibility }) => {
  const rootClasses = [cl.modal];
  const [closed, setClosed] = useState(false);
  if (visibility) rootClasses.push(cl.active);
  if (closed) rootClasses.push(cl.closed);

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setClosed((prev) => !prev);
        setTimeout(() => {
          setClosed(prev => !prev);
          setVisibility(false);
        }, 450);
      }}
    >
      <div className={cl.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
