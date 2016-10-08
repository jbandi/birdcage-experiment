import React from 'react';

export default (props) => {
    return (
        <li className="list-group-item">
            {props.todo.content}
            <span className="pull-right">
                <button className="btn btn-xs btn-danger remove glyphicon glyphicon-trash"
                        onClick={props.onRemove}>
                </button>
            </span>
        </li>
    );
}
