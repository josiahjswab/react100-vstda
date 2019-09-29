import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      option: 'Moderate'
    }
  }

  clickHandler() {
    alert('Help!');
  }

  render() {
    return (
      <div id="wrapper">
        <h2>Very simple to do list.</h2>
        <h4>Project h3ll</h4>
        <div id="toDoList">
          <p>Add a new to do item:</p>
          <textarea rows="5" className="textArea" type="textarea"/>
          <div id='div-selector'>
            <p>How much of a priority is this?</p>
          <select id="selector" className="form-control">
            <option value="priority">Critical</option>
            <option value="priority">Important</option>
            <option value="priority">Noncritical</option>
          </select>
          </div>
          <div id="div-button">
          <button type="button" className="btn btn-primary" onClick={this.clickHandler}>Add</button>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
