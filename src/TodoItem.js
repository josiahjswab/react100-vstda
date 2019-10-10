
import React from 'react';
import ListItem from './ListItem';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var display = this.props.toDoArray.map(item =>
      <ListItem
        key={item.id}
        item={item}
        deleteTask={this.props.deleteTask}

      />);
    
    return(
      
      <div className='col-8 card'>
        <div className='card-header'>To do list:</div>
        <div id='root' className='card-body'>
          <ul className='unordered-list'>
          {display}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItem;

// const listGenerator = this.state.toDoArray.map(item => <ListItem key={item.id} item={item}/>);
