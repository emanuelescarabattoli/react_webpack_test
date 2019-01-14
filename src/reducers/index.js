import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import todosReducer from "../reducers/todos";

export default history =>
  combineReducers({
    todosReducer,
    router: connectRouter(history)
  });
