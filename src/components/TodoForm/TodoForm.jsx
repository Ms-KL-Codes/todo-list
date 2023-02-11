import React, { useState } from "react";

function ToDoForm(props) {
    // props
    const { addTodo } = props;

    // state
    const [todo, setTodo] = useState("");
        // create something called todo and set it as a string

    // action
        // dont refresh page
        // if todo exists, pass it into the function and reset to empty string (for the next to do)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo) {
            addTodo(todo);
            setTodo("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="add todo here..." 
            value={todo}
            // value of input = todo state
            onChange={(event) => setTodo(event.target.value)} 
            // everytime a user enters something, update the state
                // we will get event.target.value
            />
        </form>
    );

}

export default ToDoForm;