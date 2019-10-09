
import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {

    return(
      
      <div className='col-8 card'>
        <div className='card-header'>To do list:</div>
        <div id='root' className='card-body'>
          <ul className='unordered-list'>
          {this.props.listItem}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItem;

