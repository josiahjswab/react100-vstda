
import React from 'react';

class AddTodoItem extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      item:'',
      priority:'1',
      key: 1
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log('changeHandler Hit!')
  }

  clickHandler() {
    console.log('clickHandler Hit!')
    var listItem = {
      item: this.state.item,
      priority: this.state.priority,
      key: this.state.key++
    }
    console.log(listItem);
    var stringListItem = listItem.item; //pulls item string from object listItem
    this.setState({createListItem: stringListItem});
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
              placeholder='txt here'
              value={this.state.item}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Level of priority:</label>
            <select 
              className='select-priority' 
              name='priority' 
              onChange={this.changeHandler}
            >
              <option className='select-priority' value='1'>Low</option>
              <option className='select-priority' value='2'>Medium</option>
              <option className='select-priority' value='3'>High</option>
            </select>
          </div>
          <div>
            <button 
              className='btn btn-primary' 
              onClick={this.clickHandler}
            >Add</button>
            <li>{this.state.createListItem}</li>
          </div>
        </div>
      </div>
    );
  }
}

 
export default AddTodoItem;