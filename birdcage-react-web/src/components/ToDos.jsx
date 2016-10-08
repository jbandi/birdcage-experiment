import React from 'react';
import ToDoItem from './ToDoItem';

export default (props) => {
    return (
        <div className="well">
            <legend>My Tweets <span id="total"></span></legend>

            <ul id="do" className="list-group">

                {/*{JSON.stringify(props.todos)}*/}

                {props.todos.map((todo, index) =>
                    <ToDoItem key={index} todo={todo} onRemove={props.onRemoveToDo}/>
                )}
            </ul>
        </div>
    );
}
