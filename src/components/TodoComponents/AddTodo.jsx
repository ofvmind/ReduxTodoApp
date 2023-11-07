import { useState } from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MyButton } from "../UI/MyButton/MyButton";

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: e => setValue(e.target.value)
    },
    value: () => value,
    clear: () => setValue('')
  };
};

export const AddTodo = ({createTodo}) => {
  const input = useInputValue('');

  const submitHandler = e => {
    e.preventDefault();

    if (input.value().trim()) {
      createTodo(input.value());
      input.clear();
    }
  }

  return (
    <form action="#" onSubmit={submitHandler}>
      <MyInput style={{marginBottom: ".5rem"}} {...input.bind} type="text"/>
      <MyButton type="submit">Create</MyButton>
    </form>
  );
};

export default AddTodo;