
import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='col-8 card'>
        <div className='card-header'>To do list:</div>
        <div className='card-body'>
          <ul className='unordered-list'>
            {}
            <li className='well' key={this.props.toDoItem.key} value={this.props.toDoItem.priority}>
              <input type='checkbox'></input>item:{this.props.toDoItem.item}
              <button className="btn"><i className="fas fa-edit"></i></button>
              <button className="btn"><i className="fas fa-trash-alt"></i></button>
            </li>
            <li className='well' value='2'><input type='checkbox'></input>{this.props.toDoItem.key}
              <button className="btn"><i className="fas fa-edit"></i></button>
              <button className="btn"><i className="fas fa-trash-alt"></i></button>
            </li>
            <li className='well' value='3'><input type='checkbox'></input>This is something I have to do
              <button className="btn"><i className="fas fa-edit"></i></button>
              <button className="btn"><i className="fas fa-trash-alt"></i></button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItem;