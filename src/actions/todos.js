import TODOS from "../data";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST
  };
};

const fetchTodosSuccess = data => {
  return {
    type: FETCH_TODOS_SUCCESS,
    data
  };
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest);
    return Promise.resolve(TODOS).then(data => {
      dispatch(fetchTodosSuccess(data));
    });
  };
};
