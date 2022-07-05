import './App.css';                             //* This is the way to import css files in js
import Navbar from './components/Navbar.js'     //* This is the way to import components in react
import TextForm from './components/TextForm';
// import About from './components/About';

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


function App() {                                //* React uses the Function-based components  
  return (                                      // Html and js should be return under return func!! Content written under return is known as jsx ..
    <>                                          {/* Html code has to be written under these brackets only! JSX fragment feature */}
      
                                                {/*//* This is the way to write comments in JSX!! Pain 😤*/}
      
      <Navbar title="TextUtils" aboutText="AboutUs"/>

      {/* <About/> */}
      <TextForm/>
    </>
  );
}

export default App;                             // Exporting App() func to other components..
