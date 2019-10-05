import React, { Component } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem/>
          <TodoItem/>
        </div>
      </div>
    );
  }
}
export default App;