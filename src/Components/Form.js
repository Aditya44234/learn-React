import React,{useState} from 'react'

function Form(props) {

  
  const changeText=()=>{
    // console.log("Uppercase was clicked"+Text); 
    let newText=Text.toUpperCase();

    SetText(newText);
    
  }
  const handleOnChange=(event)=>{
    SetText(event.target.value)
    
  }
  
  const [Text,SetText]=useState("Enter text here");

  return (
    <>
    
    
   
    <div className='form'>

        <h2>{props.heading} </h2>
        <div>
        <textarea name="inpText" id="inpText"  value={Text} onChange={handleOnChange} rows={10} cols={90} ></textarea>
        </div>

        <button onClick={changeText}>Submit</button>
    </div>

    <div className="container">
      <h1>Your Text Summary</h1>

      <p>Number of words :- {Text.split(" ").length}</p>
      <p>Number of Characters:- {Text.length}</p>
    </div>

     </>
  )
}

export default Form
