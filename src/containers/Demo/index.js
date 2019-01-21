import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTodos } from "../../actions/todos";
import Button from "../../components/Button";
import ReactTopProgressBar from "react-top-progress-bar"

class Demo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return this.props.isFetching ? (
      <span>Loading...</span>
    ) : (
      <div >
        {this.props.todos.length}
        <ReactTopProgressBar value={50}  withShadow color="green"/>
      </div>
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
