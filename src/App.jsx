import React, { Component } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoArray: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTodo(itemObject){
    let toDoArray = this.state.toDoArray;
    toDoArray.push(itemObject);
    this.setState({toDoArray});
    return toDoArray;
  }

  deleteTask(id) {
    let deleteThis = this.state.toDoArray.filter(item => item.id!==id)
    this.setState({
      toDoArray: deleteThis
    });
  }

  render() {
    

    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem addTodo={this.addTodo}/>
          <TodoItem 
          toDoArray={this.state.toDoArray}
          deleteTask={this.deleteTask}
          />
        </div>
      </div>
    );
  }
}
export default App;