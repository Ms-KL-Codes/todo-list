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
        {todo.text}
        <div>
        <button onClick={() => completeTodo(index)}>
            {todo.isComplete ? "Undo" : "Complete"}
            </button>
        <button onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => moveUp(index)}>↑</button>
        <button onClick={() => moveDown(index)}>↓</button>
        </div>
        </div>
    );
}

export default ToDoItem;