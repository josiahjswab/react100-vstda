import React, { Component } from 'react';
import { toUnicode } from 'punycode';

class ListItems extends Component {
    

    render() {
        return (
        <div id='listItems' className='col-8 card'>
            <div className='card-header'>To do list:</div>
            <div className='newListItem'></div> 
        </div>
        );
    }
}

export default ListItems;