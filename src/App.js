import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';

function App() {

  const [Mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');      
    }else{
      setMode('light');
    }

  }


  return (
    <>

    {/* Navigation Bar */}
    <Navbar navbar="AJAI" Search="Search" />

    {/* Form  */}

    <Form heading="Enter the text here"/>

    {/* About Us */}
    <About/>




    </>
  );
}

export default App;
