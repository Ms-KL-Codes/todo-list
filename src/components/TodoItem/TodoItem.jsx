import React from "react";

import "./TodoItem.css";

function ToDoItem(props) {
    // props = dictionary object
        // arbitrary but standardised
    const { todo, index, completeTodo, removeTodo, moveUp, moveDown, important } = props;
    // { to do } explode the key/value
        // can we just have the todo object
    // like: from ToDoItem import todo as props
    return (
        <div className={`todo ${todo.isComplete ? "complete": ""}`}>
        <div className={`todo ${todo.isImportant ? "important": ""}`}>
        {/* if the todo = complete, class name is complete, otherwise there is no classname */}
        <div className="todo-text">{todo.text}</div>
        <div className="button-block">
            <button className={`item-button ${todo.isImportant ? "important-button" : ""}`} id="important" onClick={() => important(index)}>
                !
            </button>
            {/* if item is important, then create important-button, otherwise no classname */}
            <button className="item-button" id="complete" onClick={() => completeTodo(index)}>
                {todo.isComplete ? "\u21A9" : "\u2714"}
                </button>
            <button className="item-button" onClick={() => moveUp(index)}>↑</button>
            <button className="item-button" onClick={() => moveDown(index)}>↓</button>
            <button className="item-button" onClick={()=> removeTodo(index)}>&#10008;</button>
        </div>
        </div>
        </div>
    );
}

export default ToDoItem;

/* 
ALTERNATIVE 
    <button className="item-button" id="important-button" style={{ color: 'red' }} onClick={() => important(index)}>
    !
    </button> 
*/