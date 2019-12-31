import React, { Component } from 'react';
import AddTodoItem from './AddTodoItem';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoArray: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    fetch('/api/TodoItems')
    .then((res) => {
      res.json()
      .then(json => this.setState({ toDoArray: json }));
    });
  }

  update() {
    fetch('/api/TodoItems')
    .then((res) => {
      res.json()
      .then(json => this.setState({ toDoArray: json }));
    });
  }

  addTodo(itemObject) {
    fetch('/api/TodoItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemObject) })
    .then(() => this.update())
    .catch(err => console.log(err));
  }

  deleteItem(id) {
    // ! commented out code is legacy prior to attaching the the api.
    // const deleteDis = this.state.toDoArray.filter(item => item.id !== id);
    // this.setState({
    //   toDoArray: deleteDis
    // });

    fetch(`/api/TodoItems/${id}`, {
      method: 'DELETE' })
    .then(() => this.update())
    .catch(err => console.log(err));
    // TODO: id param is returning 400 except for hardcoded values.
  }

  render() {
    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem addTodo={ this.addTodo } />
          <TodoItem
            toDoArray={ this.state.toDoArray }
            deleteItem={ this.deleteItem }
          />
        </div>
      </div>
    );
  }
}

export default App;
