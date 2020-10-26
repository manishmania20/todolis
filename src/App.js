import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todo from './components/todos/Todos'
import  Header from './components/layouts/Header'
import  Footer from './components/layouts/Footer'
import  AddTodo from './components/todos/AddTodo'
import  About from './components/pages/About'
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/manishmania20/dummy-data/todos')
      .then(res => this.setState({ todos: res.data }))
  }

//fetch id from Todoitem.js and state change if checked id matches passed id 
  checkComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo  => {
      if (todo.id === id){
        todo.completed = !(todo.completed )
      }
      return todo;
    }) });
  }

//delete a todoitem on button click
  deleteTodo = (id) => {
    axios.delete(`https://my-json-server.typicode.com/manishmania20/dummy-data/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => 
        todo.id !== id)]
      }));
  }

//add a new todo item to the existing list
  addTodo = (title) => {
    axios.post('https://my-json-server.typicode.com/manishmania20/dummy-data/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo = {
                this.addTodo
                } 
                />

                <Todo todos={this.state.todos} checkComplete = {
                  this.checkComplete
                }
                deleteTodo = {
                  this.deleteTodo
                }
                />

                <Footer />
              </React.Fragment>
              )} />

            <Route path='/about' component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
