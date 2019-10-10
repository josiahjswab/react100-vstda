import React from 'react';

class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item.item,
            priority: this.props.item.priority,

        }
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
            id: this.props.item.id
        });
        
        this.props.addTodo(this.state);
    }

    render() {
        return (
        <div>    
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
            </div>
        </div>
        )
    }
}

export default EditTodo;