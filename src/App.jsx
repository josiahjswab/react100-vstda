import React, { Component } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.callback = this.callback.bind(this);
  }
callback(e){
  console.log('callback Hit!')
  console.log(e);
  
}
  render() {
    return (
      <div id='container'>
        <div className='row'>
          <AddTodoItem listItemCallBack={this.callback}/>
          <TodoItem/>
        </div>
      </div>
    );
  }
}
export default App;