import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from "../actions/todos";

const todosReducer = (state = { isFetching: false, todos: [] }, action) => {
  switch (action.type) {
  case FETCH_TODOS_REQUEST:
    return { ...state, isFetching: true, todos: [] };
  case FETCH_TODOS_SUCCESS:
    return { ...state, todos: action.data };
  default:
    return state;
  }
};

export default todosReducer;
