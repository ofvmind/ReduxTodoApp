const defaultState = {
  todos: []
};

const ADD_TODO = "ADD_TODO";
const COMPLETED_TODO = "COMPLETED_TODO";
const DELETE_TODO = "DELETE_TODO";
const GET_TODOS = "GET_TODOS";

export const todoReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {...state, todos: [...action.payload]};
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]};
    case COMPLETED_TODO:
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      })};
    case DELETE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
    default:
      return state;
  }
};

export const removeTodoAction = peyload => ({type: DELETE_TODO, peyload});