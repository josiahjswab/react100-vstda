import React from 'react';

function ListItem(props) {

        
    return(
        <div>
            <li className='well' key={props.item.id} value={props.item.priority}>
            <input type='checkbox'></input>
            {props.item.item}
            <button className="btn-edit"><i className="fas fa-edit"></i></button>
            <button className="btn-delete"><i className="fas fa-trash-alt"></i></button>
            </li>
        </div>
    )
}

export default ListItem;