import React from 'react';

class AddTodoItem extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      item:'',
      priority:'1',
      id: 0
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  clickHandler() {
    
    this.setState({
      item: this.state.item,
      priority: this.state.priority,
      id: Math.random() + 1
    });
    
    this.props.addTodo(this.state);
  }

  render() {
    return(
      <div className='col-4 card'>
        <div className='card-header'>VSTDA</div>
        <div className='card-body'>
          <div>
            <label>Add an item:</label>
            <textarea
              className='create-todo-text'
              name='item'
              type='text' 
              rows='3' 
              placeholder='//Write your todo here!'
              value={this.state.item}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Level of priority:</label>
            <select 
              className='create-todo-priority' 
              name='priority' 
              onChange={this.changeHandler}
            >
              <option className='create-todo-priority' value='1'>Low</option>
              <option className='create-todo-priority' value='2'>Medium</option>
              <option className='create-todo-priority' value='3'>High</option>
            </select>
          </div>
          <div>
            <button 
              className='create-todo' 
              onClick={this.clickHandler}
            >Add</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default AddTodoItem;