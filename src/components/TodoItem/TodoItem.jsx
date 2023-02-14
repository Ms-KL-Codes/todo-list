import React from "react";

import "./TodoItem.css";

function ToDoItem(props) {
    // props = dictionary object
        // arbitrary but standardised
    const { todo, index, completeTodo, removeTodo, moveUp, moveDown } = props;
    // { to do } explode the key/value
        // can we just have the todo object
    // like: from ToDoItem import todo as props
    return (
        <div className={`todo ${todo.isComplete ? "complete": ""}`}>
        {/* if the todo = complete, class name is complete, otherwise there is no classname */}
        <div className="todo-text">{todo.text}</div>
        <div className="button-block">
            <button className="item-button" onClick={() => completeTodo(index)}>
                {todo.isComplete ? "\u21A9" : "\u2714"}
                </button>
            <button className="item-button" onClick={() => removeTodo(index)}>&#10008;</button>
            <button className="item-button" onClick={() => moveUp(index)}>↑</button>
            <button className="item-button" onClick={() => moveDown(index)}>↓</button>
        </div>
        </div>
    );
}

export default ToDoItem;