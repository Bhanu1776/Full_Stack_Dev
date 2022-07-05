import PropTypes from 'prop-types'

//* Navbar is a component 

//* Advantages of components 
// By dividing your app into components you can reuse the component in the same or different app again and again. 

//* Props in React
// ==> We use props in React to pass data from one component to another (from a parent component to a child component())
//     In this case we passing data from app.js to navbar component..

//* Notes:-
// rfc ==> emmet shortcut to get boilerplate
// The first thing to do after adding bootstrap components is to change class --> className
// Next thing to do is close all tags
// change href # to /


import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>        {/* Converted normal className into String to use JS in className */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>      {/*//* Here Ternary operator is used which is a conditional statement */}
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {                            // Defining schema(set of rules)
  title: PropTypes.string,
  // title: PropTypes.string.isRequired,           // To set title compulsory we use isRequired.. Or else if we want that tile should not be undefined that time we use isRequired
  aboutText: PropTypes.string
};

Navbar.defaultProps = {                         // Setting the default props, if we are not passing any ways from app.js then these values will be displayed
  title: 'Set title here',
  aboutText: 'About text here'
};