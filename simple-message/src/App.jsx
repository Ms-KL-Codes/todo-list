import React, { useState } from "react";

function App() {
  // STEP 1-3:
    // // return <h1>Hello World</h1>;
    // const message = "Hello World!";
    // // const: once set, you cannot change it (immutable)
    //   // cannot do message = "new value"... it won't change
    // let message2 = "Hello World Again!";
    // // let: mutable variable
    //   // great for dynamic variables
    // var message3 = "Hello again";
    // // var: can be any format (str, int etc). 
    //   // don't use: vulnerable to errors

    // return <h1>{message}</h1>;

  // STEP 4:
    // But what if we want to update the message? 
    // Let’s use state to change the message when we click a button.
  const [message, setMessage] = useState("Hello Javascript amazing");
  // const [state, setState]
  // const [profile, setProfile]
    // changing the state will require a reload of whole function
      // functions and useState should use const

    // useState = holds onto memory when I tell it to.
      // passing in the value to useState
      // passing in again to replace value
    // [message] = state = the value to pass into the useState
    // [setMessage] = setState
    
  function handleClick () {
    setMessage("Hello react is amazing");
    // site automatically updates when the change is made
    // if it detects that no further changes has been made, it won't re-render
      // if you stack setMessage it will batch these together and only display the last one
        //eg:
        // function handleClick () {
        //   setMessage("peanut");
        //   setMessage("Hello react is amazingsvwe");
        //   setMessage("Hello react is amazingsdvvd");
          // only this ^ will display
  }

  return (
    <div>
      <h1> {message} </h1>
      <button onClick={handleClick}>Update message!</button>
    </div>
  )
}

export default App;

// .jsx = includes JSX 
// .js = only includes Javascript
