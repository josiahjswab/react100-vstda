import React from 'react';
import EditTodo from './EditTodo'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }; 
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        console.log(this.state.checked);
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    clickHandler() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }));        
    }

    render() {
        
        
        
        const completedStyle = {
            
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        };     
        return(
            <div>
                <li className='well' key={this.props.item.id} value={this.props.item.priority}>
                <input type='checkbox' checked={this.state.checked} onClick={this.clickHandler}></input>
                <p style={this.state.checked ? completedStyle : null}>{this.props.item.item}</p>
                <button className="btn-edit" onClick={() => console.log('hi')}><i className="fas fa-edit"></i></button>
                <button className="btn-delete" onClick={() => {this.props.deleteItem(this.props.item.id)}}><i className="fas fa-trash-alt"></i></button>
                </li>
            </div>
        )        
    }

}

export default ListItem;