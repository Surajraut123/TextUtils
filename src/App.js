/*
Note: We Used here router, but while depoying react app on github pages the router will not work
as mentioned in documentation so we need to remove all router we commenting router
*/


import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
// import About from './components/About';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";

// import About from './components/About';
// import logo from './logo.svg';
// let name = "Suraj";
function App() {
    const [mode, setMode] = useState('light');
    // //Wheather dark mode is enabled or not

    const [alert, setalert] = useState(null)

    //tyep : - Here there are 4 types of alert messages
    const showalert = (message, type) =>{
        setalert({
          msg : message,
          type : type
        })

        //setting time
        setTimeout( ()=>{
          setalert(null);
        }, 3000) 
    }

    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#01132e'
        showalert("Dark Mode has been enabled", "success")
        document.title = "TextUtils - DarkMode"
      }  
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showalert("Light Mode has been enabled", "success")
        document.title = "TextUtils - LightMode"
      }  
    }
  return (

  <>
    {/* Inside Return Function code called jsx. Inside jsx we can return only onr tag. Want to return more tag
        Use JSX Fragmentation  <>.....</>. JSX is Compiled By Bebel, If we copy some code, that's the chances of errors.
        Because here every tag equired to close */}
    
    {/* <Navbar title="TextUtils2" aboutText="About us"/>  */}
    {/* If we not write title and aboutText in Navbar then the default props will use   */}

    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} aboutText = "About Us" toggleMode={toggleMode}/> 
      
      <Alerts alert={alert}/>
      {/* //Container is a By default property where elements come in center my-3 is use for margin at y by 3*/}
      <div className="container my-3">
      {/* <Routes> */}

        {/* /users --- component 1
        /users/home --- component 2  , = if we not write exact keyword then router will render on component1*/}

        {/* <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<TextFrom showalert={showalert} heading="Enter text to analyse" mode = {mode}/>} />
      </Routes> */}



      {/* This is all about before using react router    */}
      <TextFrom showalert={showalert} heading="Enter text to analyse" mode = {mode}/>
      {/*<About/> */}
          
      </div>
    {/* </Router> */}
    

    {/* <nav>
      <li>Home</li>
      <li>Contact</li>
      <li>Help</li>
    </nav>
    <h1>Hello {name}</h1>
    <div className="container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate ad magnam! Consectetur repellat maxime sequi accusantium sed facere consequatur dolore, unde illum, atque commodi labore quasi rem fuga officia minima dolorem. Dignissimos, nihil!</p>
    </div> */}
  </>
  );
}

export default App;
