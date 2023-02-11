import React, { useState } from "react";

// Components
import ToDoForm from "./components/TodoForm/TodoForm";
import ToDoItem from "./components/TodoItem/TodoItem";
// react automatically grabs index.jsx form
// will need to name file above if not index

/// HOMEWORK - STEP 7
import "./App.css";

function App() {

  // State
    // const [array, setarray]
  const [todos, setTodos] = useState([
    { 
    text: "Learn about React",
    isCompleted: false,
    },
    {
    text: "Meet friend for lunch",
    isCompleted: false,
    },
    {
    text: "Build really cool todo app",
    isCompleted: false,
    },
  ]);

  // Actions
  const addTodo = (text) => {
    // use arrow function w/ const instead of:
      // function addTodo
        // = convention
    const newTodos = [...todos, { text: text, isComplete: false }];
    // ... = splits up (expands) array and assigns each elm of the array as an elm in the new array, rather than whole array as the first elm of the new array

    setTodos(newTodos);
    // set state
  };

const completeTodo = (index) => {
  const newTodos = [...todos];
  if (newTodos[index].isCompleted == false) {
    newTodos[index].isCompleted = true;
} else {
  newTodos[index].isCompleted = false;
}
  setTodos(newTodos);
};

const removeTodo = (index) => {
  const newTodos = [...todos];
  // this creates a copy and has its own memory
    // doesn't mess with the original list
    // dont mess with state directly
    // create a copy
    // ... creates a copy
      // {...todos} - object
      // [...todos] - array
  // const newTodos = todos;
  // this creates a pointer to the todos part of memory
  newTodos.splice(index, 1);
  // dont do todos.splice
  setTodos(newTodos);
};


const moveUp = (index) => {
  const newTodos = [...todos];
  if (index > 0) {       
      // https://stackoverflow.com/a/872317
      [newTodos[index], newTodos[index-1]] = [
          newTodos[index-1], newTodos[index]];
      setTodos(newTodos);
  }
};

const moveDown = (index) => {
  const newTodos = [...todos];
  if (index < newTodos.length -1) {       
      // https://stackoverflow.com/a/872317
      [newTodos[index], newTodos[index+1]] = [
        newTodos[index+1], newTodos[index]];
      setTodos(newTodos);
  }
}

  return (
    /// HOMEWORK - STEP 7
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
          key={index}
          todo={todo}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          moveUp={moveUp}
          moveDown={moveDown}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

// map vs for each. For Each goes through each item
  // map goes through and returns a brand new array
  // when you map you need to give it a key (index)
      /* <ToDoItem todo="Do this ting" />
      <ToDoItem todo="Do another here" /> */

export default App

// ToDoItem is like another HTML Element
  // todo = property
    // "Do this thing" = value of property