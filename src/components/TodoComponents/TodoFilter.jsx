import { MyInput } from "../UI/MyInput/MyInput";

export const TodosFilter = ({query, setQuery}) => (
  <MyInput type="text" value={query} onChange={e => setQuery(e.target.value)}/>
);