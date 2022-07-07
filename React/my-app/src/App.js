import './App.css';                            
import Navbar from './components/Navbar.js'    
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';       
import Alert from './components/Alert';

function App(props) {

  const [mode, setMode] = useState('light');     
  const [alert, setAlert] = useState(null);            

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){                                    
      setMode('dark');
      document.body.style.backgroundColor = '#042743';    
      showAlert("Dark mode has been enabled", "success");    
      document.title = 'TextUtils 🕶'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils ⭐'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
      {/* <About/> */}
      <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;                           
