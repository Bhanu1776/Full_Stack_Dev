//* States in React
// The state object is where you store property values that belongs to the component.
// When the state object changes, the component re-renders.

//* Hooks in React
// Hooks allow function components to have access to state and other React features

//* useState Hook in React
// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.


import React, { useState } from 'react'         //* Importing Hooks, useState is a predefined Hook

export default function TextForm() {

  const [Text, setText] = useState('');                    // setText is a state variable which is used to update the Text when the state changes  // Array destructuring..
  // Text = "Wassup";                                       // We cannot update Text in this way, Wrong way to change the state!
  // setText("Hello Bunny! Wassup")                         // With the help of setText we can update Text value

  const handleOnChange = (event) => {                         //* This is IMP, If we want TextArea to be editable, This func is Mandatory!!
    // console.log(Text);
    setText(event.target.value)                             // This line helps to store the user input values in 'Text' variable in every state..
  }

  const handleOnClick = () => {
    console.log(Text);
    let newText = Text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    console.log(Text);
    let newText = Text.toLowerCase();
    setText(newText)
  }
  
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
  }
  
  const handleConcatClick = () => {
    let newText = Text.concat(', Bye!');
    setText(newText)
  }

  const handleCopy = () => {
    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);    //* This is the way to copy the text into clipboard
}

const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);             // Js concept Regex is used here..
    setText(newText.join(" "))
}

  return (

    <>
      <div className="container my-5">
        <div className="mb-8">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"> Enter Text Here!</label>
          <textarea className="form-control" value={Text} onChange={handleOnChange} placeholder="Hello Stranger!" id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleOnClick} >Uppercase</button>
        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleLoClick} >Lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleConcatClick} >Bye</button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-danger mx-1 my-2" onClick={handleClearClick} >Clear Text</button>
      </div>
      <div className="container my-3" >
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes to read</p>

        <h2>Preview</h2>
        <p>{Text}</p>

      </div>
    </>
  )
}
