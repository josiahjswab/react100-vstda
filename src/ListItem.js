import React from 'react';
import EditTodo from './EditTodo'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            editing: false,
            changedItem: ''
        }; 
        this.changeHandler = this.changeHandler.bind(this);
        this.changeEditHandler = this.changeEditHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleEditingDone = this.handleEditingDone.bind(this);
        this.handleEditingDoneButton = this.handleEditingDoneButton.bind(this);
        console.log(this.state.checked);
    }



    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    changeEditHandler(event) {
        var changedText = event.target.value;
        this.setState({changedItem: changedText});
    }

    clickHandler() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }));        
    }

    handleEditing (event) {
        this.setState({editing: true, changedItem: this.props.item.item});
    }

    handleEditingDone (event) {
        if (event.keyCode === 13) {
            this.setState({ editing: false });
        }
    }
    handleEditingDoneButton (event) {
        this.setState({ editing: false });
    }

    componentDidMount () {
        this.setState({changedItem: this.props.item.item});
    }

    render() {
        
        var viewStyle = {};
        var editStyle = {};

        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }
        
        const completedStyle = {
            
            fontStyle: "italic",
            color: "#8D9D90",
            textDecoration: "line-through"
        };     
        return(
            <div className='list-item' value={this.props.item.priority}>
                <div id='list-item' style={viewStyle} onDoubleClick={this.handleEditing}>
                    <li className='well' key={this.props.item.id} value={this.props.item.priority}></li>
                    <p style={this.state.checked ? completedStyle : null}>{this.state.changedItem}</p>
                    <small>§:</small>
                    <input type='checkbox' checked={this.state.checked} onClick={this.clickHandler}></input>
                    <button className="btn-edit" onClick={this.handleEditing}><i className="fas fa-edit"></i></button>
                    <button className="btn-delete" onClick={() => {this.props.deleteItem(this.props.item.id)}}><i className="fas fa-trash-alt"></i></button>
                </div>
                <div id='list-edit' style={editStyle}>
                    <p>Edit:</p>
                    <input type='text'
                        onKeyDown={this.handleEditingDone}
                        value={this.state.changedItem}
                        onChange={this.changeEditHandler}
                    />
                    <button className="btn-edit" onClick={this.handleEditingDoneButton}><i className="far fa-check-circle"></i></button>
                </div>
            </div>
        )        
    }

}

export default ListItem;