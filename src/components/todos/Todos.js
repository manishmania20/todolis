import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
    <Todoitem key={todo.id} todo={todo} checkComplete = {
      this.props.checkComplete
    }
    deleteTodo = {
      this.props.deleteTodo
    } 
    />
    ));
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    checkComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
