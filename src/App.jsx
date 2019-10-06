import React, { Component } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: ''
    };
    this.callBack = this.callBack.bind(this);
  }
callBack(itemObject){
  console.log(itemObject + ' callBack Hit!');
  this.setState({toDoItem: itemObject});
}
  render() {
    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem callBack={this.callBack}/>
          <TodoItem toDoItem={this.state.toDoItem}/>
        </div>
      </div>
    );
  }
}
export default App;