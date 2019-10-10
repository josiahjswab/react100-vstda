import React, { Component } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoArray: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addTodo(itemObject){
    let toDoArray = this.state.toDoArray;
    toDoArray.push(itemObject);
    this.setState({toDoArray});
    return toDoArray;
  }

  deleteItem(id) {
    let deleteDis = this.state.toDoArray.filter(item => item.id!==id)
    this.setState({
      toDoArray: deleteDis
    });
  }

  render() {
    
    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem addTodo={this.addTodo}/>
          <TodoItem 
          toDoArray={this.state.toDoArray}
          deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}
export default App;