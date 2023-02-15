import React, { useState } from "react";

// Components
import ToDoForm from "./components/TodoForm/TodoForm";
import ToDoItem from "./components/TodoItem/TodoItem";
  /* 
    KG NOTES:
    Alternative: import ToDoItem from "./components/TodoItem
      - react automatically grabs index.jsx form
      - we could name Todoitem.jsx as index.jx
      - Then import ToDoItem from "./components/TodoItem
  */

import "./App.css";

function App() {

  // STATE
    // const [array, setarray]
  const [todos, setTodos] = useState([
    { 
    text: "Create a todo item!",
    isComplete: false,
    isImportant: false,
    rank: 2,
    },
  ]);

  // ACTIONS
  const sortTodos = () => {
    const newTodos = [...todos];
    newTodos.sort((a, b) => a.rank - b.rank);
    setTodos(newTodos);
  };
    /*
      KG NOTES:
      const sortTodos = () => {
          - const sortTodos declares the variable
          - = () => defines the function using ARROW FUNCTION (convention)
          - no parameters set in () for the function
      const newTodos = [...todos];
          - const newTodos creates a new array
          - [...todos] spreads the elements of todos and inserts them into the same indexes of newTodos
      newTodos.sort((a, b) => a.rank - b.rank)
          - https://bobbyhadz.com/blog/react-sort-array-of-objects
          - newTodos. looks @ the elements of newTodos
          - .sort( commences the sort method using a comparison between to values/arguments
          - (a,b) sets the arguments to be compared
          - the sort compares these two: a.rank and b.rank 
            - (eg: a.rank = 3 and b.rank = 1)
          - a.rank - b.rank: (a3 - b1 = result2)
            - if the result is negative, a is placed before b (n/a)
            - if the result is 0, nothing changes (n/a)
            - if the result is positive, b is placed before a ( result2 = order: b(1) then a(3) )
            ** to reverse order, change code to: 
              - b.rank - a.rank
    */

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplete: false, isImportant: false, rank: 2 }];
    setTodos(newTodos);
    // sortTodos();
  };
    /*
      KG NOTES:
      const addTodo = (text) => {
          - const AddTodo declares the variable
          - = (text) => defines the function using ARROW FUNCTION =>
          - => shorthand way of writing an anon function
          - use => with const instead of: function addTodo 
          - (text) = parameter/argument of function =>
      const newTodos = [...todos, { text: text, isComplete: false, rank: 2, }];
          - const newTodos creates a new list to work with
          - [...todos] takes the elms of todos, copies them and spreads into the new array newTodos
            - Note: {...todos} = object AND [...todos] = array
          - { text: text, isComplete: false, rank: 2 } sets the default properties of the new item and adds the new item to the end of the newTodos array
      setTodos(newTodos);
          - override current state with new array
    */

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete =!newTodos[index].isComplete;
    if (!newTodos[index].isComplete && newTodos[index].isImportant) {
      newTodos[index].rank = 1;
    } else if (!newTodos[index].isComplete && !newTodos[index].isImportant) {
      newTodos[index].rank = 2;
    } else if (newTodos[index].isComplete && newTodos[index].isImportant) {
      newTodos[index].rank = 3;
    } else if (newTodos[index].isComplete && !newTodos[index].isImportant ) {
      newTodos[index].rank = 3; 
    };
    setTodos(newTodos);
    sortTodos();
  };
    /*
      KG NOTES:
      const completeTodo = (index) => {
          - const completeTodo declares the variable
          - = (index) => sets index as an argument for the function created using the =>
      const newTodos = [...todos];
          - creates a new array to work with
          - ... spreads out elements from todos array, copies and sets them as elements in the newTodos
      newTodos[index].isComplete =!newTodos[index].isComplete;
          - ! acts as a toggle to switch between true and false depending on current state.
          - if isComplete is currently true, change to false and vice versa
      if (!newTodos[index].isComplete && newTodos[index].isImportant) {newTodos[index].rank = 1;
          - if isComplete = false and isImportant = True, rank = 1
      } else if (!newTodos[index].isComplete && !newTodos[index].isImportant) {newTodos[index].rank = 2;
          - if isComplete = false and isImportant = false, rank = 2
      } else if (newTodos[index].isComplete) {newTodos[index].rank = 3;
          - if isComplete = true, rank = 3
      setTodos(newTodos);
          - override current state with new array
      sortTodos();
          - run the sort function once the state of Todos have been updated
      
      Removed:
      const completeItem = newTodos[index]
          - create new variable called completeItem and set as current item
      newTodos.splice(index, 1)
          - splice = remove specified item(s)
          - index = starting point to remove item(s)
          - 1 = number of items to remove 
      newTodos.push(completeItem)
          - push the completeItem at the end of the newTodos array
    */

  const removeTodo = (index) => {
    const newTodos = [...todos];
    if (confirm("Are you sure you want to delete this item?")) {
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else {

    };

  };
    /*
      KG NOTES:
      const removeTodo = (index) => {
          - declares removeTodo as a variable
          - sets index as an argument for a function using =>
      const newTodos = [...todos];
          - creates new array newTodos
          - [...todos] copies and spreads this todos elements into the elements of the newTodos array
      if (confirm("are you sure you want to delete this item?")) {
          -https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-ok-and-cancel-options
          - checks to see if the user wants to do this with ok or cancel
      newTodos.splice(index, 1);
          - splice removes elements starting at the index point
          - 1 states how many elements (1) should be removed from the array from the index starting point
          - NOTE: don't splice from original array (todos.splice)
      setTodos(newTodos);
          - override current state with new array
    */

  const moveUp = (index) => {
    const newTodos = [...todos];
    if (!newTodos[index-1].isImportant && index > 0) {       
        [newTodos[index], newTodos[index-1]] = [
            newTodos[index-1], newTodos[index]];
        setTodos(newTodos);
    } else {
      alert("Sorry, you cannot move this item up as it is not 'Important'")
    };
  };
    /*
      KG NOTES:
      const moveUp = (index) => {
          - create function w/ variable name moveUp and index argument
      const newTodos = [...todos];
          - take todos elements, copy and spread them into the newTodos array
      if (index > 0) {
          - if the current index is at position more than 0
          - prevents from trying to swap with a position that doesn't exist (-0)
      [newTodos[index], newTodos[index-1]] = [
          - https://stackoverflow.com/a/872317
          - retrieve the values at index and index-1 
      newTodos[index-1], newTodos[index]];
          - replace the values with eachother (swap)
      setTodos(newTodos);
          - override current state with new array
    */

  const moveDown = (index) => {
    const newTodos = [...todos];
    if (!newTodos[index+1].isComplete && index < newTodos.length -1) {      
        // https://stackoverflow.com/a/872317
        [newTodos[index], newTodos[index+1]] = [
          newTodos[index+1], newTodos[index]];
        setTodos(newTodos);  
    } else {
      alert("Sorry, you cannot move this item down as it is not 'Complete' ")
    };
  };
  /*
    KG NOTES:
    const moveDown = (index) => {
        - creates a function w/ variable name moveDown and index argument
    const newTodos = [...todos];
        - take todos elements, copy and spread them into the newTodos array
    if (index < newTodos.length -1) {  
        - if the current index is less than the length of the newTodos list minus one
    [newTodos[index], newTodos[index+1]] = [
        - retrieve the values of the current index and index+1
    newTodos[index+1], newTodos[index]];
        - replace the values with eachother (swap)
    setTodos(newTodos);
        - override current state with new array
  */

  const important = (index) => {
    const newTodos = [...todos];
    newTodos[index].isImportant =!newTodos[index].isImportant;
    if (newTodos[index].isImportant && !newTodos[index].isComplete) {
      newTodos[index].rank = 1;
    } else if (!newTodos[index].isImportant) {
      newTodos[index].rank = 2;
    } else if (newTodos[index].isImportant && newTodos[index].isComplete) {
      newTodos[index].rank = 3;
    };
    setTodos(newTodos);
    sortTodos();
  };

    /*
    KG NOTES:

    REMOVED:
    if (newTodos[index].isImportant) {

    const importantItem = newTodos[index]
      newTodos.splice(index, 1)
      newTodos.unshift(importantItem)
      newTodos[index].rank = 1;

    */

  return (
    /// HOMEWORK - STEP 7
    <div className="app">
      <div className="todo-list">
        <h1>To Do List</h1>
        {todos.map((todo, index) => (
          <ToDoItem
          key={index}
          todo={todo}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          moveUp={moveUp}
          moveDown={moveDown}
          important={important}
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
      /* <ToDoItem todo="Do this thing" />
      <ToDoItem todo="Do another here" /> */

export default App

// ToDoItem is like another HTML Element
  // todo = property
    // "Do this thing" = value of property