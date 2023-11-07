import axios from "axios";

export default class TodoService {
  static async getTodos(limit = 20, page = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: limit,
        _page: page
      }
    });
    return response;
  }
  static async getTodoById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id );
    return response;
  }
} 