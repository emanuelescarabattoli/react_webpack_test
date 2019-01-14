import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTodos } from "../../actions/todos";
import Button from "../../components/Button";

class Demo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return this.props.isFetching ? (
      <span>Loading...</span>
    ) : (
      this.props.todos.length
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.todosReducer.isFetching,
    todos: state.todosReducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
