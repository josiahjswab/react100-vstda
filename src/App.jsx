import React, { Component } from 'react';
import ListItems from './ListItems';
import AddListItem from './AddListItem';
import './css/ToDoList.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo:[],
    }
  }

  render() {
    return (
      <div id="wrapper" className='container'>
        <h2>Very simple to do list.</h2>
        <div className="row">
          <AddListItem entry={this.state.addItem}/>
          <ListItems/>
        </div>
      </div>
    );
  }
}


export default App;
