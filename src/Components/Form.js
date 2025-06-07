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
  const clearText=()=>{
    SetText("")
    
  }
  const copyToclip=()=>{
    let txt=Text;
    navigator.clipboard.writeText(txt);
    alert("Text Copied to Clipboard");
    // console.log("Text Copied to Clipboard");

    
  }
  
  const [Text,SetText]=useState("");

  return (
    <>
    
    
   
    <div className='form'>

        <h2>{props.heading} </h2>
        <div>
        <textarea name="inpText" id="inpText"  value={Text} onChange={handleOnChange} rows={10} cols={90} placeholder='Enter Text' ></textarea>
        </div>

        <div className="btns mx-5 my-3">
        <button onClick={changeText}>Submit</button>
        <button onClick={clearText}>Clear Text</button>
        <button onClick={copyToclip}>Copy</button>

        </div>
    </div>

    <div className="form">
      <h1>Your Text Summary</h1>

      <p>Number of words :- {Text.split(" ").length}</p>
      <p>Number of Characters:- {Text.length}</p>
    </div>

     </>
  )
}

export default Form
