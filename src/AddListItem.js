import React, { Component } from 'react';

class AddListItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            item:'',
            priority:'',
            id: 0
        }
        this.handelChange = this.handelChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    handelChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }


    clickHandler() {
        this.props.addTodo(this.state);
        this.setState({
            id: this.state.id+1,
            item: ''
        })
        console.log(this.state)
    }


    render() {
        return (
            <div id='addListItem' className='col-4 card'>
                <label>Add a new to do item:</label>
                <textarea
                    name='item'
                    rows="3" 
                    className="item" 
                    type="textarea"
                    placeholder='//text here...' 
                    value={this.state.item}
                    onChange={this.handelChange}
                />
                <div>
                <label>How much of a priority is this?</label>
                <select 
                    className="create-todo-priority form-control form-control-sm"
                    value={this.state.priority} 
                    onChange={this.handelChange}
                >
                    <option value="1">Low Importance</option>
                    <option value="2">Medium Importance</option>
                    <option value="3">High Importance</option>
                </select>
                </div>
                <div id="div-button">
                    <button className="btn btn-primary" onClick={this.clickHandler}>Add</button>
                </div>
            </div>
        );
    }
}
export default AddListItem;