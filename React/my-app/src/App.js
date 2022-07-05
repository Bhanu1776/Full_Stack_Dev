import './App.css';                             //* This is the way to import css files in js
import Navbar from './components/Navbar.js'     //* This is the way to import components in react
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';        // Using hooks in main app.js

// From this App.js all components going to load, In short browser will load according to this file

//* What is JSX ?
// It stands for Javascript XML. It is the syntax extension of Javascript which allows HTML to co-exist with Javascript in React.

//* Naming conventions in JSX.
// ==> You have to write "className" instead of "class" as class is the reserved keyword in Javascript, In place of "for" you have to use "htmlFor"
// JS content has to be written under curly braces{}
// In JSX closing the tags is very imp, which aren't closed by default
// Do check console frequently in browser to debug errors..

//* Adding components in JS
// First thing, Import component 
// Include component in App func


function App() {

  const [mode, setMode] = useState('light');                    // Whether dark mode is enabled or not, By default is Light mode

  const toggleMode = ()=>{
    if(mode === 'light'){                                       // When we toggle the switch, Light mode becomes Dark mode and vice-versa
      setMode('dark');
      document.body.style.backgroundColor = '#042743';          // This way we can change the body bg color
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>

      {/* <About/> */}
      <TextForm mode={mode}/>
    </>
  );
}

export default App;                             // Exporting App() func to other components..
