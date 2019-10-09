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
  }
  addTodo(itemObject){
    let toDoArray = this.state.toDoArray;
    toDoArray.push(itemObject);
    this.setState({toDoArray});
    return toDoArray;
  }

  render() {
    
    const listGenerator = this.state.toDoArray.map(item => <ListItem key={item.id} item={item}/>);

    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem addTodo={this.addTodo}/>
          <TodoItem 
          listItem={listGenerator}
          />
        </div>
      </div>
    );
  }
}
export default App;